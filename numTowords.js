const units = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function convertHundreds(num) {
  if (num > 99) {
    return units[Math.floor(num / 100)] + ' Hundred ' + convertTens(num % 100);
  } else {
    return convertTens(num);
  }
}

function convertTens(num) {
  if (num < 10) return units[num];
  else if (num < 20) return teens[num - 10];
  else return tens[Math.floor(num / 10)] + ' ' + units[num % 10];
}

function numberToWords(number) {
  if (number === 0) return 'Zero';
  if (number < 0) return 'Negative ' + numberToWords(-number);
  let result = '';
  if (number >= 1000) {
    result += convertHundreds(Math.floor(number / 1000)) + ' Thousand ';
    number %= 1000;
  }
  if (number >= 100) {
    result += convertHundreds(number) + ' ';
  } else if (number > 0) {
    result += units[number] + ' ';
  }
  return result.trim();
}

const number = 12345;
const numberInWords = numberToWords(number);
console.log(numberInWords); // "Twelve Thousand Three Hundred Forty-Five"
