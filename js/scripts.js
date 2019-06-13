var outputArray = [];

function toThree(input) {
  if ((input < 4) && (input > 0)) {
    var difference = (input - 1);
    differenceArray = new Array(difference + 1);
    differenceArray.fill('I');
    differenceArray.concat(outputArray);
    var output = differenceArray.join('');
    console.log(differenceArray);
    console.log(outputArray);
    console.log(output);
    outputArray = output;
  }

  else if (input === 4) {
    outputArray.push("IV");
     outputArray = outputArray.join('');
  }
  else if (input === 5) {
    outputArray.push("V");
     outputArray = outputArray.join('');
  }
};

toThree(5);

console.log(outputArray);


// $(document).ready(function(){
//
// });
