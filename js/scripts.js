
var ones = [null, "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
var tens = [null, "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
var hundreds = [null, "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
var thousands = [null, "M", "MM", "MMM"]

var validateInput = function(numVar) {
  if (isNaN(numVar)) {
  return alert("Please enter a number less than 3999.");
  } else {
    return numVar
  }
};

var biggestNumber = function(verified) {
  if(verified > 3999) {
    return alert("Please enter a number less than 3999.");
  } else {
    return verified
  }
};

var numberSplitter = function(verified) {
  return verified.split("").map(function(t){return parseInt(t)});
}

var onesIdentifier = function(numbers) {
  var onesPlace = numbers[numbers.length - 1];
  // console.log(onesPlace);
  return ones[onesPlace];
}

var tensIdentifier = function(numbers) {
  if (numbers.length > 1) {
  var tensPlace = numbers[numbers.length - 2];
  return tens[tensPlace];
  } else {
    return null;
  }
}

var hundredsIdentifier = function(numbers) {
  if (numbers.length > 2) {
  var hundredsPlace = numbers[numbers.length - 3];
  return hundreds[hundredsPlace];
  } else {
    return null;
  };
};

var thousandsIdentifier = function(numbers) {
  if (numbers.length > 3) {
  var thousandsPlace = numbers[numbers.length - 4];
  return thousands[thousandsPlace];
  } else {
    return null;
  };
};

var roman = function(thousandsPlace, hundredsPlace, tensPlace, onesPlace){
  var romani = [thousandsPlace, hundredsPlace, tensPlace, onesPlace]
  console.log(romani);
  romani = romani.filter(function(roman){
    return roman;
  });
  console.log(romani);
  var result = romani.toString().replace(/,/g, "");

  return result;
};





$(document).ready(function() {
  $("form#r-numerals").submit(function(event) {
    event.preventDefault();
    var number = $("input#number").val();
    var verified = validateInput(number);
    verified = biggestNumber(verified);
    console.log("verified number is " + verified);
    var numbers = numberSplitter(verified);
    var onesPlace = onesIdentifier(numbers);
    var tensPlace = tensIdentifier(numbers);
    // console.log(onesPlace);
   var hundredsPlace = hundredsIdentifier(numbers);
   var thousandsPlace = thousandsIdentifier(numbers);
//   console.log(thousandsPlace + hundredsPlace + tensPlace + onesPlace);
   var result = roman(thousandsPlace, hundredsPlace, tensPlace, onesPlace);
   console.log(result);
    $(".number").text(number);
    $(".roman").text(result);

    $("#result").show();

  });
});
