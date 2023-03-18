import { read, utils } from "xlsx";

import { parsePhoneNumber } from "./parse-phone-number";

export interface SheetRow {
  [key: string]: string;
}
export interface SheetData {
  sheetName: string;
  sheetData: SheetRow[];
}

/**
 * This function takes in an Excel file as Blob and returns an array of ExcelSheetData objects.
 * @param fileArrayBuffer The Excel file's array buffer as a string.
 */
export const generateObjectFromExcelFile = (fileArrayBuffer: string) => {
  const workbook = read(fileArrayBuffer);
  let sheetNameList = workbook.SheetNames;

  let excelData: SheetData[] = [];

  sheetNameList.forEach((sheetName) => {
    let sheetData = utils.sheet_to_json(
      workbook.Sheets[sheetName]
    ) as SheetRow[];

    excelData.push({
      sheetName,
      sheetData
    });
  });

  return excelData;
};

/**
 * Gets the Column title of the first sheet or the named sheet of an excel object.
 * @param excelData JSON of an Excel file or csv file.
 * @param sheetName (Optional) parse the title from just that sheetname.
 */
export const extractExcelSheetHeaders = (
  excelData: SheetData[],
  sheetName?: string
): string[] => {
  // In case of empty excel data array
  if (excelData.length === 0) {
    return [];
  }

  // If there is a target sheet
  let targetIndex = 0;
  if (sheetName) {
    targetIndex = excelData.findIndex(
      (excelSheet) => excelSheet.sheetName === sheetName
    );
  }

  // Check first/target sheet
  if (excelData[targetIndex].sheetData.length === 0) {
    return [];
  } else {
    const headerRow = Object.keys(excelData[targetIndex].sheetData[0]);
    return headerRow;
  }
};

/**
 *  Function returns the key which is most likely to be the phone number column
 * @param {Object} data SheetRow type, e.g. {"NameKey" : "John", "PhoneNumberKey" : "2015478875"}
 * @returns {String} The column header which is most likely to be the Phone Number Column. Or false if it has no guesses.
 */
export const getLikelyPhoneNumberColumnHeader = (sheetRow: SheetRow) => {
  let candidateKeys: string[] = [];

  Object.keys(sheetRow).forEach((fieldKey) => {
    if (parsePhoneNumber(sheetRow[fieldKey])) {
      candidateKeys.push(fieldKey);
    }
  });
  return candidateKeys;
};

/**
 * Returns an array of the Sheets that make up the Excel file
 * @param excelAsJson The excel file, parsed as JSON
 */
export const getSheetsFromWorkbook = (excelAsJson: SheetData[]) => {
  let retval: string[] = [];
  for (let x = 0; x < excelAsJson.length; x++) {
    let sheet = excelAsJson[x];
    retval.push(sheet.sheetName);
  }

  return retval;
};

/**
 * Message parser for messages created with shortcodes from Excel. This function unparses one shortcode of one
 * @param {String} messageText Unparsed Message in the format `Hello Mr ${d. NameKey}, thank you for .... `
 * @param {Object} data Object of a "row" in the excel file {"NameKey" : "John", "PhoneNumberKey" : "2015478875"}
 */
export function excelMessageTextParser(messageText: string, data: SheetRow) {
  let parsedMessage = messageText;

  let dataKey = Object.keys(data);

  for (let i = 0; i < dataKey.length; i++) {
    let singleDataKey = dataKey[i];
    let shortcode = "${excel." + singleDataKey + "}";
    while (
      parsedMessage !== parsedMessage.replace(shortcode, data[singleDataKey])
    ) {
      parsedMessage = parsedMessage.replace(shortcode, data[singleDataKey]);
    }
  }

  return parsedMessage;
}
