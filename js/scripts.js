function convertRoman(input) {
  if ((input < 4) && (input > 0)) {
    var difference = (input - 1);
    outputString = new Array(difference + 1).fill('I').concat(outputArray).join('');
    return outputString;
  } else if (input === 4) {
    var outputArray = [];
    outputArray.push('IV');
    outputString = outputArray.join('');
    return outputString;
  } else if (input === 5) {
    var outputArray = [];
    outputArray.push('V');
    outputString = outputArray.join('');
    return outputString;
  }
};

$(document).ready(function () {
  $('.formOne').submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($('#input').val());
    var finallyDidIt = convertRoman(userInput);
    console.log(finallyDidIt);
    $('.output').text(finallyDidIt);
  });
});
