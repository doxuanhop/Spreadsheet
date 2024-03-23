### Explanation

![Blocks](/images/blocks.png)

This script is designed to handle requests to interact with Google Sheets data. Here's a breakdown of its key components:

1. **Normalization Function**: The `normalizeString()` function is used to normalize a string containing accented characters to ensure consistent handling.

2. **Processing User Data**: The `processDataFromUser()` function processes user input data before using it, ensuring that Unicode characters are normalized.

3. **GET Request Handling**: The `doGet()` function handles GET requests. It retrieves data from the Google Sheets based on the provided parameters and returns the result as a JSON string with UTF-8 encoding.

4. **POST Request Handling**: The `doPost()` function handles POST requests. It parses the user data, processes it using `processDataFromUser()`, performs the corresponding action on the Google Sheets data, and returns a response message as a JSON string with UTF-8 encoding.

5. **Data Retrieval**: The `getData()` function retrieves data from the Google Sheets based on the specified method (getRow, getColumn, or getCell) and parameters.

6. **Data Processing**: The `processData()` function processes the data received from the user. Depending on the method specified (append, update, or delete), it performs the corresponding action on the Google Sheets data and returns a success message.

This script provides a convenient way to interact with Google Sheets data through HTTP requests.
