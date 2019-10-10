'use strict'

const faker = require('faker')
var statePractice = ['busqueda', 'proceso', 'culminado']
var universities = ['icesi', 'javeriana', 'usc']
var enterprises = ['Canon', 'Ecopetrol', 'Nobit']
const milisecondsByDay = 86400000 
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}


// Generar assignments
function getAssessments(startDate) {
  /* ******** asignación ********* */
  var today = new Date()
  let startsAt = getRandomInt(1, 112)
  var milisecondsDeadline = startDate.getTime() + (startsAt * milisecondsByDay)
  let deadline = new Date(milisecondsDeadline)
  let boo = getRandomInt(1, 3)

  let assessment = {
    id: 1,
    order: 1,
    required: (boo == 1) ? true : false,
    title: faker.lorem.word(),
    description: faker.lorem.words(),
    startsAt: startsAt,
    deadline: deadline.toDateString(),
    isExpired: (today > deadline) ? true : false
  }

  let assessmentrm = {}
  let nextAssessments = []

  nextAssessments.push(assessment)

  let nTotal = getRandomInt(1, 5)
  for (let i = 2; i <= nTotal; i++) {
    let startsAt = getRandomInt(1, 112)
    var milisecondsDeadline = startDate.getTime() + (startsAt * milisecondsByDay)
    let deadline = new Date(milisecondsDeadline)
    let boo = getRandomInt(1, 3)

    assessmentrm = {
      id: i,
      order: i,
      required: (boo == 1) ? true : false,
      title: faker.lorem.word(),
      description: faker.lorem.words(),
      startsAt: startsAt,
      deadline: deadline.toDateString(),
      isExpired: (today > deadline) ? true : false
    }
    nextAssessments.push(assessmentrm)
  }
  // ordenar
  nextAssessments.sort(function compareNumbers (a, b) {
    if (a.order > b.order) {
      return 1
    }

    if (a.order < b.order) {
      return -1
    }

    return 0
  })

  return nextAssessments
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
  academicTutor: faker.internet.userName(),
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
      studentrm.assessments = getAssessments(studentrm.startDate)

      break
  }
  students.push(studentrm)
}

module.exports = {
  single: student,
  all: students
}
