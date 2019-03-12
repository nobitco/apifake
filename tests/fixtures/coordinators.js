'use strict'

const faker = require('faker/locale/es')
var universities = ['icesi', 'javeriana', 'usc']

function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

const coordinator = {
  id: 1,
  email: faker.internet.userName(),
  university: 'icesi',
  updatedAt: faker.date.past()
}

let coordinators = []
let coordinatorrm = {}
let idUniversity = 0
let nTotal = 5

for (let i = 2; i <= nTotal; i++) {
  idUniversity = getRandomInt(0, 3)
  coordinatorrm = {
    id: i - 1,
    email: faker.internet.userName(),
    university: universities[idUniversity],
    updatedAt: faker.date.past()
  }
  coordinators.push(coordinatorrm)
}
module.exports = {
  single: coordinator,
  all: coordinators
}
