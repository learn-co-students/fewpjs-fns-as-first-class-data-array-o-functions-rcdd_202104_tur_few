

// function wakeDog(dogName, dogBreed) {
//     console.log(`Wake ${dogName} the ${dogBreed}`);
//     return (`Wake ${dogName} the ${dogBreed}`);
//   }
// function leashDog(dogName, dogBreed) {
//     console.log(`Leash ${dogName} the ${dogBreed}`);
//     return (`Leash ${dogName} the ${dogBreed}`);
// }
// function walkToPark(dogName, dogBreed) {
//     console.log(`Walk to ${dogName} the ${dogBreed} park`);
//     return (`Walk to the park with ${dogName} the ${dogBreed}`);
// }
// function throwFrisbee(dogName, dogBreed) {
//     console.log(`Throw ${dogName} the ${dogBreed} Frisbee`);
//     return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
// }
// function walkHome(dogName, dogBreed) {
//     console.log(`Walk ${dogName} the ${dogBreed} home`);
//     return (`Walk home with ${dogName} the ${dogBreed}`);
// }
// function unleashDog(dogName, dogBreed) {
//     console.log(`Unleash ${dogName} the ${dogBreed}`);
//     return (`Unleash ${dogName} the ${dogBreed}`);
// }


// wakeDog("Xerox", "Border Collie")
// leashDog("Boo", "Pibble")
// walkToPark("Bunny", "Labrador")
// throwFrisbee("Mary J. Blige", "Papillon")
// walkHome("Santa Paws", "Husky")
// unleashDog("Lauren", "Golden Retriever")


// let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ]




// function array(dogName, dogBreed) {
//     let resultArray = [];
//     for (i=0;i < routine.length;i++){
//         let resultArray = routine[i]
        
//     }
//     return resultArray
// }






//console.log(array("ceyhun", "mustafa"));
function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;     
}
function leashDog(dogName, dogBreed) {
    return `Leash ${dogName} the ${dogBreed}`;
  }
function walkToPark(dogName, dogBreed) {
    return `Walk to the park with ${dogName} the ${dogBreed}`;
  }
function throwFrisbee(dogName, dogBreed) {
    return `Throw the frisbee for ${dogName} the ${dogBreed}`;
  }
function walkHome(dogName, dogBreed) {
    return `Walk home with ${dogName} the ${dogBreed}`;
  }
function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`;
  }
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, walkHome, unleashDog ];
function exerciseDog(dogName, dogBreed) {
    let array = [];
    for (let i=0; i < routine.length; i++) {
        array.push(routine[i](dogName, dogBreed));
        
    }
    return array;

} 

