// Split----------------------------------
// ---------------------------------------

var sentence = 'Hello, my name is Nizar and I like Pizza and cookies';

var pieces = sentence.split(" ");
console.log( pieces );


var phoneNumber = '555-555-5555';

pieces = phoneNumber.split('-');
console.log( pieces );

pieces = phoneNumber.split("");
console.log( pieces );


var letters = 'Z***B***C***T';

pieces = letters.split('***');
console.log( pieces );



// Array Loops ---------------------------
// ---------------------------------------

var arrayNames = ["Pedro", "Jake", "Joan", "Ariel", "Kevin", "Alia", "Marisa", "Nizar" ];
  //                 0        1       2       3        4        5       6         7


console.log('forEach loop (best for arrays)');
console.log('------------------------------');
console.log("");

arrayNames.forEach(function (oneName, i) {
  console.log( i );
  console.log( oneName );

  console.log( oneName.split("") );
  console.log( oneName.toUpperCase() );
  console.log( oneName.length );

  console.log("");
});

console.log("");
console.log("");


console.log('for loop (works for arrays but not the best)');
console.log('--------------------------------------------');
console.log("");

for (var i = 0; i < arrayNames.length; i += 1) {
  console.log(i);
  console.log( arrayNames[i] );

  console.log( arrayNames[i].split("") );
  console.log( arrayNames[i].toUpperCase() );
  console.log( arrayNames[i].length );

  console.log("");
}
