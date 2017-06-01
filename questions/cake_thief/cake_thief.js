class Cake {
  constructor(weight, value) {
    this.weight = weight;
    this.value = value;
  }
}

const calculateValue = (cake) => {
  if (cake.weight === 0) {
    return 0;
  }

  return cake.value / cake.weight;
};

const compare = (a,b) => {
  if (calculateValue(a) < calculateValue(b)) {
    return 1;
  }

  if (calculateValue(a) > calculateValue(b)) {
    return -1;
  }

  return 0;
}

const maxDuffelBagValue = (cakes, capacity) => {
  let toKeep = [];
  let currentWeight = 0;
  let currentCake;

  let sorted = cakes.sort(compare);

  for (var i = 0; i < sorted.length; i++) {
    currentCake = sorted[i];

    while (currentWeight + currentCake.weight<= capacity) {
      toKeep.push(currentCake);
      currentWeight = currentWeight + currentCake.weight;
    }
  }

  return toKeep.reduce((acc, cake) => {
    return acc + cake.value
  }, 0);
};

let cakes = [
  new Cake(7, 160),
  new Cake(3, 90),
  new Cake(2, 15),
];

let capacity = 20;

console.log(maxDuffelBagValue(cakes, capacity));
