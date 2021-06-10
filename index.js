function wakeDog(dogName, dogBreed) {
  return `Wake ${dogName} the ${dogBreed}` }
const result = wakeDog("Skippy", "Welsh Corgi");
console.log(result);

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}` }
const result1 = leashDog("Boo Radley", "Pibble");
console.log(result1);

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}` }
const result3 = unleashDog("Lauren", "Golden Retriever");
console.log(result3);

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}` }
const result4 = walkToPark("Bunny", "Labrador");
console.log(result4);

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}` }
const result5 = throwFrisbee("Mary J. Blige", "Papillon");
console.log(result5);

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}` }
const result6 = walkHome("Santa Paws", "Husky");
console.log(result6);

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog];


function exerciseDog (dogName, dogBreed){
         const lastArray = [];
         for(let i = 0; i < routine.length; i++){
                 lastArray.push(routine[i](dogName, dogBreed));
         }
         return lastArray;
 }
