let getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let twoEgg = (floors, highestFloor) => {
  let halfWay = Math.ceil(floors/2);

  var eggHeight;
  var attempts = 1;

  if (halfWay === highestFloor) {
    return {
      floor: halfWay,
      attempts,
    };
  } else if (halfWay < highestFloor) {
    eggHeight = halfWay;
  } else {
    eggHeight = 1;
  }

  while (eggHeight < highestFloor) {
    attempts = attempts + 1;
    eggHeight = eggHeight + 1;
  }

  return {
    floor: eggHeight,
    attempts,
  };
};

let min = 1;
let max = 100;

let highestFloor = getRandomIntInclusive(min, max);
console.log('the highest floor is:', highestFloor);

let solution = twoEgg(max, highestFloor);
console.log(solution);
