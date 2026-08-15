/**
 * GOOGLE APPS SCRIPT FOR WEDDING INVITATION (LÂM TUẤN & NHƯ HUẾ)
 * Copy toàn bộ đoạn code này dán vào Google Sheets -> Extensions (Mở rộng) -> Apps Script
 */

function doPost(e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var params = e.parameter;
    var action = params.action; // 'rsvp' hoặc 'wish'

    if (action === 'rsvp') {
      var sheetRSVP = ss.getSheetByName("Xác Nhận Tham Dự") || ss.insertSheet("Xác Nhận Tham Dự");
      if (sheetRSVP.getLastRow() === 0) {
        sheetRSVP.appendRow(["Thời Gian", "Họ Và Tên", "Số Điện Thoại", "Số Người Tham Dự", "Khách Mời Của", "Xác Nhận"]);
        sheetRSVP.getRange("1:1").setFontWeight("bold").setBackground("#FFCDD2");
      }
      sheetRSVP.appendRow([
        params.time || new Date().toLocaleString("vi-VN"),
        params.name || "",
        params.phone || "",
        params.guests || "",
        params.side || "",
        params.status || ""
      ]);
    } else {
      var sheetWish = ss.getSheetByName("Lời Chúc") || ss.insertSheet("Lời Chúc");
      if (sheetWish.getLastRow() === 0) {
        sheetWish.appendRow(["Thời Gian", "Họ Và Tên", "Mối Quan Hệ", "Lời Chúc Mừng"]);
        sheetWish.getRange("1:1").setFontWeight("bold").setBackground("#FFCDD2");
      }
      sheetWish.appendRow([
        params.time || new Date().toLocaleString("vi-VN"),
        params.name || "",
        params.relation || "",
        params.message || ""
      ]);
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
