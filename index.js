function wakeDog(dogName, dogBreed) {
  // const dogName = "Xerox";
  // const dogBreed = "Border Collie";
  return(`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
  // const dogName = "Boo Radley";
  // const dogBreed = "Pibble";
  return(`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
  // const dogName = "Bunny";
  // const dogBreed = "Labrador";
  return(`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
  // const dogName = "Mary J. Blige";
  // const dogBreed = "Papillon";
  return(`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
  // const dogName = "Santa Paws";
  // const dogBreed = "Husky";
  return(`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
  // const dogName = "Lauren";
  // const dogBreed = "Golden Retriever";
  return(`Unleash ${dogName} the ${dogBreed}`);
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];
 
function exerciseDog(dogName, dogBreed){
  let exercis = [];
  for (let i = 0; i < routine.length; i++){
  exercis.push(routine[i](dogName,dogBreed));
  }
  return exercis;
}