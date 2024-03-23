### Explanation

![Blocks](/images/blocks.png)
**Spreadsheet**
Last Updated On 2024-03-23

Non-visible component that provides access to the Google spreadsheet storage
**Properties**
You can set the below properties in the UI part of the builder.

APIEndpoint - it's a string value which is set to blank by default.
SheetName - it's a string value which is set to sheet1 by default.
UseSheetData - it's a boolean value which is set to false by default.

**Block Properties**
You can set the below blocks properties in the blocks section of the builder.

**APIEndpoint**
API endpoint is the access key that you'll get from us to read/write data on your Spreadsheet.


**SheetName**
Sheet Name.


**UseSheetData**
Use sheet data, if true then it'll include return value of sheet when you use offline get data blocks. else include spreadsheet data.



**Methods**
You can set the below method blocks in the blocks section of the builder.

**Delete**
Delete a row by number

**GetCell**
Get Cell Value

**GetCellValue**
Method for GetCellValue

**GetColumn**
Get Column

**GetColumnList**
Method for GetColumnList

**GetRow**
Get Row

**GetRowList**
Method for GetRowList

**GetSheet**
Performs an HTTPS POST request to read/get data from your spreadsheet

**GetSheetList**
Method for GetSheetList

**GetSpreadsheet**
Performs an HTTPS POST request to read/get data from your spreadsheet

**UpdateData**
Update Row by number and columns.

**UploadData**
Append row in your sheet


**Events**
You can set the below event blocks in the blocks section of the builder.

**DataChange**
Event indicating that a request has finished. Here function name return the last function that you call. Exmaple: 1. UPDATE : Update Data 2. UPLOAD : Upload data 3. DELETE : Delete Data

**ErrorOccured**
Event for error occured

**GotCell**
Triggered when Get Cell value. Data Type = String

**GotColumn**
Triggered when got column values as list

**GotRow**
Triggered when got row values as list

**GotSheet**
Triggered when got sheet data. Data type = JSON

**GotSpreadsheet**
Triggered when got spreadsheet data



### Apps Script
This script is designed to handle requests to interact with Google Sheets data. Here's a breakdown of its key components:

1. **Normalization Function**: The `normalizeString()` function is used to normalize a string containing accented characters to ensure consistent handling.

2. **Processing User Data**: The `processDataFromUser()` function processes user input data before using it, ensuring that Unicode characters are normalized.

3. **GET Request Handling**: The `doGet()` function handles GET requests. It retrieves data from the Google Sheets based on the provided parameters and returns the result as a JSON string with UTF-8 encoding.

4. **POST Request Handling**: The `doPost()` function handles POST requests. It parses the user data, processes it using `processDataFromUser()`, performs the corresponding action on the Google Sheets data, and returns a response message as a JSON string with UTF-8 encoding.

5. **Data Retrieval**: The `getData()` function retrieves data from the Google Sheets based on the specified method (getRow, getColumn, or getCell) and parameters.

6. **Data Processing**: The `processData()` function processes the data received from the user. Depending on the method specified (append, update, or delete), it performs the corresponding action on the Google Sheets data and returns a success message.

This script provides a convenient way to interact with Google Sheets data through HTTP requests.
