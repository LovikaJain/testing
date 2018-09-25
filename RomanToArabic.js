// Function to conver roman numerals to arabic numbers
function romanToArabic(roman){

/*
 Validation for characters
 'I','X','C' & 'M' shouldn't be repeated thrice
 'D','L' & 'V' shouldn't be repeated at all
*/
  if (/III|XXX|CCC|MMM|VV|LL|DD|[^IVXLCDM]/.test(roman)) 
    return -1;
   // if no parameter is passed 
  if(roman == null)
      return -1;

  var totalValue = 0, 
  // Initialise
      value = 0, 
      prev = 0;

// Iterate till the end of the length of the roman numeral
  for(var i=0;i<roman.length;i++){
      var current = char_to_int(roman.charAt(i));
      if (current > prev) {
          totalValue -= 2 * value;
      }
      if (current !== prev) { // Different symbol?
          value = 0; // reset the sum for the new symbol
      }
      value += current; // keep adding same symbols
      totalValue += current;
      prev = current;
  }
  // Value shouldn't exceed 3000
  if(totalValue > 3000){
    console.log("Error!! Value can't exceed 3000")
    return -1;
  }
  return totalValue;
}

// switch case for base values
function char_to_int(character) {
  switch(character){
      case 'I': return 1;
      case 'V': return 5;
      case 'X': return 10;
      case 'L': return 50;
      case 'C': return 100;
      case 'D': return 500;
      case 'M': return 1000;
      default: return -1;
  }
}
// Return value
console.log(romanToArabic('MMCMXLIIV'));
// Character I is repeated thrice return -1
console.log(romanToArabic('IIIC'));
// Character D is repeated return -1
console.log(romanToArabic('DDX'));
// Value exceeds 3000 throw an error and return -1
console.log(romanToArabic('MMCMXLIIVM'));

