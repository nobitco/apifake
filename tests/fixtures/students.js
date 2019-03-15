'use strict'

const faker = require('faker')
var statePractice = ['busqueda', 'proceso', 'culminado']
var universities = ['icesi', 'javeriana', 'usc']
var enterprises = ['Canon', 'Ecopetrol', 'Nobit']
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}


// Generar assignments
function getAssessments() {

  /* ******** asignación ********* */
  var today = Date.now()
  let deliveryDate
  deliveryDate = new Date(faker.date.future())

  var deliveryTime = deliveryDate - today
  var deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos

  let assignment = {
    id: 1,
    activity: 'informe a',
    deliveryDate: deliveryDate.toDateString(),
    deliveryDays: deliveryDays
  }

  let assignmentrm = {}
  let nextAssignments = []

  nextAssignments.push(assignment)

  let nTotal = getRandomInt(1, 5)

  for (let i = 2; i <= nTotal; i++) {
    deliveryDate = new Date(faker.date.future())
    deliveryTime = deliveryDate - today
    deliveryDays = Math.trunc(deliveryTime / 86400000) // milisegundos

    assignmentrm = {
      id: i,
      activity: 'Activity ' + faker.random.word(),
      deliveryDate: deliveryDate.toDateString(),
      deliveryDays: deliveryDays
    }
    nextAssignments.push(assignmentrm)
  }
  // ordenar
  nextAssignments.sort(function compareNumbers (a, b) {
    if (a.deliveryDays > b.deliveryDays) {
      return 1
    }

    if (a.deliveryDays < b.deliveryDays) {
      return -1
    }

    return 0
  })

  return nextAssignments
}

// student unitario
const student = {
  id: 1,
  username: faker.internet.userName(),
  name: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  state: statePractice[0],
  university: 'icesi',
  city: faker.address.city(),
  assessments: []
}

student.fullname = student.firstName + ' ' + student.lastname

let students = []
let studentrm = {}

let nTotal = getRandomInt(10, 30)
let idUniversity
let idEnterprise
let idStatePractice

for (let i = 2; i <= nTotal; i++) {
  idUniversity = getRandomInt(0, 3)
  idEnterprise = getRandomInt(0, 3)
  idStatePractice = getRandomInt(0, 3)

  studentrm = {
    id: i - 1,
    username: faker.internet.userName(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    state: statePractice[idStatePractice],
    university: universities[idUniversity],
    place: enterprises[idEnterprise],
    city: faker.address.city(),
  }

  studentrm.fullname = studentrm.name + ' ' + studentrm.lastname
  
  switch(idStatePractice) {
    case 0:
      studentrm.assessments = []
      break
    case 1:
      studentrm.startDate = new Date()
      studentrm.assessments = getAssessments()

      break
  }


  students.push(studentrm)
}

module.exports = {
  single: student,
  all: students
}
