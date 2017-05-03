function isEmpty(obj) {
  return Object.keys(obj).length === 0;
};

function findXOverlap(r1, r2) {
  let maxRHS = Math.max((r1.leftX + r1.width), (r2.leftX + r2.width));
  let minLHS = Math.min(r1.leftX, r2.leftX);

  if ((maxRHS - minLHS) < (r1.width + r2.width)) {
    let leftX = Math.max(r1.leftX, r2.leftX);
    let width = Math.min((r1.leftX + r1.width), (r2.leftX + r2.width)) - leftX;

    return {
      leftX: leftX,
      width: width,
    };
  }

  return {};
};

function findYOverlap() {
  let maxRHS = Math.max((r1.bottomY + r1.height), (r2.bottomY + r2.height));
  let minLHS = Math.min(r1.bottomY, r2.bottomY);

  if ((maxRHS - minLHS) < (r1.height + r2.height)) {
    let bottomY = Math.max(r1.bottomY, r2.bottomY);
    let height = Math.min((r1.bottomY + r1.height), (r2.bottomY + r2.height)) - bottomY;

    return {
      bottomY: bottomY,
      height: height,
    };
  }

  return {};
};

function createRectangle(x,y,w,h) {
  return {
    leftX: x,
    bottomY: y,

    width: w,
    height: h,
  };
}

let r1 = createRectangle(3,4,2,3);
let r2 = createRectangle(1,2,3,4);

let xCoords = findXOverlap(r1, r2);
let yCoords = findYOverlap(r1, r2);

if (isEmpty(xCoords) || isEmpty(yCoords)) {
  console.log('no overlap!');
} else {
  let intersectedRectangle = {
    leftX: xCoords.leftX,
    bottomY: yCoords.bottomY,

    width: xCoords.width,
    height: yCoords.height,
  }

  console.log(intersectedRectangle);
}
