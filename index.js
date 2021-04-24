// One by one iteration
function wakeDog(dogName, dogBreed) {
        console.log(`Wake ${dogName} the ${dogBreed}`);
        return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog (dogName, dogBreed) {
        console.log(`Leash ${dogName} the ${dogBreed}`);
        return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
        console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
        return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
        console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
        return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
        console.log(`Walk home with ${dogName} the ${dogBreed}`);
        return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
        console.log(`Unleash ${dogName} the ${dogBreed}`);
        return `Unleash ${dogName} the ${dogBreed}`;
}

// An array iteration
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog (dogName, dogBreed){
        const finalArray = [];
        for(let i = 0; i < routine.length; i++){
                finalArray.push(routine[i](dogName, dogBreed));
        }
        return finalArray;
}
/*
function exerciseDog (dogName, dogBreed){
        const routine = [wakeDog(dogName, dogBreed),
                        leashDog (dogName, dogBreed),
                        walkToPark(dogName, dogBreed),
                        throwFrisbee(dogName, dogBreed),
                        walkHome(dogName, dogBreed),
                        unleashDog(dogName, dogBreed)];
        const finalArray = [];
        for(let i = 0; i < routine.length; i++){
                finalArray.push(routine[i]);
        }
        return finalArray;
}
*/

// A solution from online:
/*
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog(dogName, breedName) {
  return routine.map(fn => fn(dogName, breedName))
}
*/


