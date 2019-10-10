'use strict'

const faker = require('faker')
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let days = getRandomInt(1, 112)
let boo = getRandomInt(1, 3)
var assessment = {
  id: 1,
  order: 1,
  required: (boo == 1) ? true : false,
  startsAt: days,
  title: faker.lorem.word(),
  description: faker.lorem.words()
}

let assessments = []
let assessmentrm = {}
let nTotal = getRandomInt(5, 15)

for (let i = 2; i <= nTotal; i++) {
  let days = getRandomInt(1, 112)
  let boo = getRandomInt(1, 3)

  assessmentrm = {
    id: i - 1,
    order: i,
    required: (boo == 1) ? true : false,
    startAt: days,
    title: faker.lorem.word(),
    description: faker.lorem.words()
  }
  assessments.push(assessmentrm)
}

module.exports = {
    single: assessment,
    all: assessments
}
