# README

This webapp is to get today events from Google Calendar.

```shell
$ curl -L https://script.google.com/macros/s/<Deploy ID>/exec \
  -H "Content-Type: application/json" \
  -d '{"token":"<Token>"}'
```

The response is obtained.

```json
[
  {
    "startTime": "2021-05-22T04:00:00.000Z",
    "endTime": "2021-05-22T08:00:00.000Z",
    "title": "Hiking"
  }
]
```

## Usage

Please install `clasp`, when deploy this webapp to Google Apps Script.

```shell
$ npm install -g clasp
```

1. Create a GAS project in your account.

   ```shell
   $ clasp create <Project Name> --type webapp --rootDir src/
   ```

1. Push and open GAS project https://script.google.com/d//edit (this URL will be shown following clasp create)

   ```shell
   $ clasp push
   $ clasp open
   ```

1. Set the following script properties, then set trigger as main.

   | variable    | value                                                 |
   | :---------- | :---------------------------------------------------- |
   | CALENDAR_ID | Google Calender ID                                    |
   | TOKEN       | Any characters or character strings for authorization |

1. Deploy this script as a web app following settings.  
   In the detail, see https://developers.google.com/apps-script/guides/web .
   - **Execute the app as** - (me) your-email
   - **Who has access to the app** - anyone even anonymous
