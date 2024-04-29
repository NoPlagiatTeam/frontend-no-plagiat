export function lowerCase(textArray) {
  let lowerCaseArray = [];
  textArray.forEach((element) => {
    lowerCaseArray = [...lowerCaseArray, element.toLowerCase()];
  });
  return lowerCaseArray;
}
