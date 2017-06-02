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

const maxDuffelBagValue = (cakes, maxCapacity) => {
  let maxValuesAtCapacities = [];

  for (var currentCapacity = 0; currentCapacity <= maxCapacity; currentCapacity++) {
    let currentMaxValue = 0;

    for (var i = 0; i < cakes.length; i++) {
      if (cakes[i].weight === 0 && cakes[i].value !==0) {
        console.log('youre rich!');
        return Infinity;
      }

      if (cakes[i].weight <= currentCapacity) {
        let remainingCapacityAfterTakingCake = currentCapacity - cakes[i].weight;
        let maxValueUsingCake = cakes[i].value + maxValuesAtCapacities[remainingCapacityAfterTakingCake];

        currentMaxValue = Math.max(maxValueUsingCake, currentMaxValue);
      }
    }

    maxValuesAtCapacities.push(currentMaxValue);
  }

  return maxValuesAtCapacities[maxCapacity];
};

let cakes = [
  new Cake(3, 40),
  new Cake(5, 70),
];

let capacity = 9;

console.log(maxDuffelBagValue(cakes, capacity));
