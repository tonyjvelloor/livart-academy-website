/**
 * LIVART BEAUTY ACADEMY - GOOGLE SHEETS & WHATSAPP LEAD AUTOMATION
 * 
 * INSTRUCTIONS TO CONNECT:
 * 1. Open Google Sheets (https://sheets.new) and create a new spreadsheet named "LivArt Academy - 2026 Admissions Leads".
 * 2. On Sheet1, create these exact headers in Row 1:
 *    A1: Timestamp | B1: Candidate Name | C1: WhatsApp Number | D1: Course | E1: Batch | F1: Campus | G1: Page URL | H1: Status
 * 3. In Google Sheets top menu, click: Extensions -> Apps Script.
 * 4. Delete any code in the editor, paste this entire file, and click "Save" (Floppy disk icon).
 * 5. Run the setupSheet() function once by clicking "Run". Approve permissions if prompted.
 * 6. Click the blue "Deploy" button at top-right -> "New deployment".
 * 7. Choose type: "Web app".
 *    - Description: "LivArt Leads API"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (IMPORTANT!)
 * 8. Click "Deploy". Copy the Web App URL provided (ends with /exec).
 * 9. Paste this URL into your website's Layout.astro or env variable `PUBLIC_GOOGLE_SHEET_WEBHOOK`.
 */

function setupSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  
  if (sheet.getLastRow() === 0) {
    var headers = [
      "Timestamp",
      "Candidate Name",
      "WhatsApp Number",
      "Course",
      "Preferred Batch",
      "Campus",
      "Page URL",
      "Lead Status",
      "Notes"
    ];
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight("bold").setBackground("#c8102e").setFontColor("#ffffff");
    sheet.setFrozenRows(1);
  }
}

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);
  
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = {};
    
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        data = e.parameter;
      }
    } else if (e.parameter) {
      data = e.parameter;
    }
    
    var timestamp = data.timestamp || new Date();
    var name = data.name || "Unknown Candidate";
    var phone = data.phone || "";
    var course = data.course || "General Inquiry";
    var batch = data.batch || "Immediate 2026 Batch";
    var campus = data.campus || "Kalamassery, Kochi";
    var pageUrl = data.pageUrl || "";
    var status = "NEW LEAD - WHATSAPP INITIATED";
    var notes = data.notes || "";
    
    sheet.appendRow([
      timestamp,
      name,
      phone,
      course,
      batch,
      campus,
      pageUrl,
      status,
      notes
    ]);
    
    // Optional: Send automated Email notification to Admissions Desk
    try {
      var notificationEmail = "connect@livart.co.in";
      var subject = "🔥 New Admissions Lead: " + name + " (" + course + ")";
      var body = "New Lead received from LivArt Website:\n\n" +
        "Name: " + name + "\n" +
        "WhatsApp: " + phone + "\n" +
        "Course: " + course + "\n" +
        "Batch: " + batch + "\n" +
        "Campus: " + campus + "\n" +
        "Submitted at: " + timestamp + "\n\n" +
        "Quick WhatsApp Action: https://wa.me/" + phone.replace(/[^0-9]/g, '') + "\n";
      
      MailApp.sendEmail(notificationEmail, subject, body);
    } catch (mailErr) {
      Logger.log("Email notification skipped: " + mailErr);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      "result": "success",
      "message": "Lead logged successfully"
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      "result": "error",
      "error": error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    "status": "online",
    "service": "LivArt Academy Admissions API",
    "timestamp": new Date()
  })).setMimeType(ContentService.MimeType.JSON);
}
