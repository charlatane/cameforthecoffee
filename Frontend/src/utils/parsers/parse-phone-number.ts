/**
 * Returns a number as "01715..." or returns false;
 * @param inputPhoneNumber
 */
export const parsePhoneNumber = (inputPhoneNumber: string): string | null => {
  let validPhoneNumber: string | null = null;

  const processedPhoneNumber = inputPhoneNumber.toString();

  let regexedNumber = processedPhoneNumber.replace(/ /g, "");
  regexedNumber = regexedNumber.replace(/,/g, "");

  if (isNaN(Number(regexedNumber))) {
    return null;
  }

  const numberLength = regexedNumber.length;

  if (numberLength === 11 && regexedNumber.substring(0, 2) === "01")
    validPhoneNumber = processedPhoneNumber;

  if (numberLength === 13 && regexedNumber.substring(0, 4) === "8801")
    validPhoneNumber = processedPhoneNumber.substring(2, 13);

  if (numberLength === 14 && regexedNumber.substring(0, 5) === "+8801")
    validPhoneNumber = processedPhoneNumber.substring(3, 14);

  if (numberLength === 10 && regexedNumber.substring(0, 1) === "1")
    validPhoneNumber = "0" + processedPhoneNumber;

  return validPhoneNumber;
};
