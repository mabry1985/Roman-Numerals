function toThree(input) {
  if ((input < 4) && (input > 0)) {
    var outputArray = [];
    var difference = (input - 1);
    differenceArray = new Array(difference + 1);
    differenceArray.fill('I');
    differenceArray.concat(outputArray);
    var output = differenceArray.join('');
    outputArray = output;
    return outputArray;
  }  else if (input === 4) {
    var outputArray = [];
    outputArray.push('IV');
    outputArray = outputArray.join('');
    return outputArray;

  } else if (input === 5) {
    var outputArray = [];
    outputArray.push('V');
    outputArray = outputArray.join('');
    return outputArray;
  }
};

$(document).ready(function () {
  $('.formOne').submit(function (event) {
    event.preventDefault();
    var userInput = parseInt($('#input').val());
    var finallyDidIt = toThree(userInput);
    console.log(finallyDidIt);
    $('.output').text(finallyDidIt);
  });
});
