/*Note:by doxuanhop
/* Replace YOUR_SHEET_ID with the ID of your spreadsheet.
/* This code structure is just an example, you can adjust it to fit your specific needs.

// Function to normalize a string containing accented characters
function normalizeString(str) {
  return str.normalize('NFC');
}

// Function to process data from the user
function processDataFromUser(input) {
  // Process the input data to normalize Unicode characters
  const processedInput = normalizeString(input);
  return processedInput;
}

function doGet(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID');
  const data = getData(sheet, e.parameter);
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType('application/json; charset=UTF-8');
}

function doPost(e) {
  const sheet = SpreadsheetApp.openById('YOUR_SHEET_ID');
  const data = JSON.parse(processDataFromUser(e.parameter.data)); // Process user data before using it
  const response = processData(sheet, data);
  return ContentService.createTextOutput(JSON.stringify(response)).setMimeType('application/json; charset=UTF-8');
}

function getData(sheet, params) {
  if (params.method === 'getRow') {
    return sheet.getRange(params.row, 1, 1, sheet.getLastColumn()).getValues()[0];
  } else if (params.method === 'getColumn') {
    const columnData = sheet.getRange(1, params.column, sheet.getLastRow(), 1).getValues();
    return columnData.map(row => row[0]);
  } else if (params.method === 'getCell') {
    return sheet.getRange(params.row, params.column).getValue();
  }
}

function processData(sheet, data) {
  if (data.method === 'append') {
    sheet.appendRow(data.data);
    return { success: true, message: 'Row added successfully' };
  } else if (data.method === 'update') {
    const row = sheet.getRange(data.row, 1, 1, sheet.getLastColumn());
    row.setValues([data.data]);
    return { success: true, message: 'Row updated successfully' };
  } else if (data.method === 'delete') {
    sheet.deleteRow(data.row);
    return { success: true, message: 'Row deleted successfully' };
  }
}
