import { google } from "googleapis";
import {
  GOOGLE_SHEETS_CLIENT_EMAIL,
  GOOGLE_SHEETS_PRIVATE_KEY,
  SPREADSHEET_ID,
} from "./api_consts";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: GOOGLE_SHEETS_CLIENT_EMAIL,
          private_key: GOOGLE_SHEETS_PRIVATE_KEY.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = SPREADSHEET_ID;

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId,
        range: "Sheet1!A:A",
        valueInputOption: "USER_ENTERED",
        resource: {
          values: [[email]],
        },
      });

      res.status(200).json({ message: "Email added successfully!" });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to add email", error: error.message });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
