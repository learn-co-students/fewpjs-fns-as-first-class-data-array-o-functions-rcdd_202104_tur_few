// wakeDog 
let wakeDog = function(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
  }
  
// leashDog 
let leashDog = function(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return `Leash ${dogName} the ${dogBreed}`
  }
  
//    walkToPark 
let walkToPark = function(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return `Walk to the park with ${dogName} the ${dogBreed}`
  }
  
//   throwFrisbee
let throwFrisbee = function(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return `Throw the frisbee for ${dogName} the ${dogBreed}`
  }
  
//   walkHome
let walkHome = function(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return `Walk home with ${dogName} the ${dogBreed}`
  }
//   unleashDog
let unleashDog = function(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return `Unleash ${dogName} the ${dogBreed}`
  }
  
  
  const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, walkHome, unleashDog ];
  function exerciseDog(dogName, dogBreed) {
      let array = [];
      for (let i=0; i < routine.length; i++) {
          array.push(routine[i](dogName, dogBreed));
  
      }
      return array;
  
  } 