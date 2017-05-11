let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let twoEgg = (floors, highestFloor) => {
  let incrementBy = 10;
  var eggHeight = 10;
  var attempts = 1;

  while (eggHeight < highestFloor) {
    attempts = attempts + 1;
    eggHeight = eggHeight + incrementBy;
  }

  if (eggHeight > highestFloor) {
    var eggHeightBrokenAt = eggHeight;
    var starting = incrementBy * (attempts - 1) + 1;

    attempts = attempts + 1;

    for (eggHeight = starting; eggHeight < eggHeightBrokenAt; eggHeight++) {
      if (eggHeight === highestFloor) {
        break;
      }

      attempts = attempts + 1;
    };
  }

  return {
    floor: eggHeight,
    attempts,
  };
};

let min = 1;
let max = 100;

//let highestFloor = getRandomIntInclusive(min, max);
let highestFloor = 19;
console.log('the highest floor is:', highestFloor);

let solution = twoEgg(max, highestFloor);
console.log(solution);
