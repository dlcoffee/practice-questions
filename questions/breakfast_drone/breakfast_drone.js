// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
let shuffle = (array) => {
  for (var i = array.length; i; i--) {
    var j = Math.floor(Math.random() * i);
    [array[i - 1], array[j]] = [array[j], array[i - 1]];
  }
};


let findUnique = (ids) => {
  let values = {};

  for (var i = 0; i < ids.length; i++) {
    if (!values[ids[i]]) {
      values[ids[i]] = true;
    } else {
      delete values[ids[i]];
    }
  }

  let keys = Object.keys(values);

  if (keys.length !== 1) {
    console.log('could not find a unique key!');
    return -1;
  }

  return keys[0];
};

var i;
let deliveryIdConfirmations = [];

for (i = 1; i < 50; i++) {
  deliveryIdConfirmations.push(i);
  deliveryIdConfirmations.push(i);
};

deliveryIdConfirmations.push(100);

shuffle(deliveryIdConfirmations);

console.log('unique id:', findUnique(deliveryIdConfirmations));
