const CALENDAR_ID = PropertiesService.getScriptProperties().getProperty(
  "CALENDAR_ID"
);
const TOKEN = PropertiesService.getScriptProperties().getProperty("TOKEN");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function doPost(
  ev: GoogleAppsScript.Events.DoPost
): GoogleAppsScript.Content.TextOutput {
  try {
    const { token } = JSON.parse(ev.postData?.contents);
    if (token !== TOKEN) {
      return ContentService.createTextOutput(
        JSON.stringify({ error: "Require token." })
      );
    }
    const calendar = CalendarApp.getCalendarById(CALENDAR_ID);
    const events = calendar.getEventsForDay(new Date()).map((event) => {
      return {
        startTime: event.getStartTime(),
        endTime: event.getEndTime(),
        title: event.getTitle(),
      };
    });
    return ContentService.createTextOutput(JSON.stringify(events));
  } catch (err) {
    console.error(err);
    return ContentService.createTextOutput(
      JSON.stringify({ error: "An error has occurred." })
    );
  }
}
