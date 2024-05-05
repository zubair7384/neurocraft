import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { email } = req.body;

      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: "waheed.iqbal2030@gmail.com",
          private_key: "b55395e0c6393285e920c001ce5886fee49688e5",
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });
      const spreadsheetId = "1VWSRvn6TiTsnWyCfzCZ47tQ94y2ZreYEZx14UvhNA0c";
      const range = "Sheet1!A:A";

      const response = sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
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
