function createWordCloud(str) {
  let cloud = new Map();

  var word = '';
  var wordCount;

  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i).toLowerCase().match(/[A-Za-z]|-/)) {
      word = word + str.charAt(i).toLowerCase();
    } else {
      wordCount = cloud.get(word);

      if (wordCount) {
        cloud.set(word, ++wordCount);
      } else if (word !== '') {
        cloud.set(word, 1);
      }

      word = '';
    }
  }

  return cloud;
};


//let str = `After beating the eggs, Dana read the next step: Add milk and eggs, then add flour and sugar.`;
//let str = "Twenty-three, twenty-two and twenty-three"
let str = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. The bill came to five dollars."


var cloud = createWordCloud(str);
console.log(cloud);