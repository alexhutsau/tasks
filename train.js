
function randomInt(max, min = 0) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

function randomIntInclusive(max, min = 0) {
  return randomInt(max + 1, min)
}

console.log('Start...')

// Random train length
const length = randomIntInclusive(100000, 3)

// Fill it with random values
const train = [true, false]
for (let index = 2; index < length; index++) {
  train[index] = randomInt(100) > 49
}

// Own random position
let position = randomInt(length)

// Define key variables
let keyLight = train[position]
let coll = 1
let maxColl = 0

// Random direction
let direction = randomInt(100) > 49
direction ? position++ : position--

while (true) {
  if (position < 0) position = length - 1
  else if (position > length - 1) position = 0

  const currLight = train[position]

  if (currLight !== keyLight) {
    coll++
    train[position] = !currLight
    direction ? position++ : position--
  }
  else {
    if (coll === maxColl) break

    maxColl = coll
    coll = 1

    train[position] = !currLight
    keyLight = !keyLight

    direction = !direction
    direction ? position++ : position--
  }
}

console.log('Finish')
console.log(`Original length is ${length}`)
console.log(`Calculated length is ${maxColl}`)
