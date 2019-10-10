'use strict'

const faker = require('faker')
// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!
function getRandomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min
}

let schedules = []
let task = {}
let schedule = {}
let nTotal = 0

nTotal = getRandomInt(3, 6)


for (let i = 1; i <= nTotal; i++) { 
    let tasks = []
    let nTotal = getRandomInt(5, 15)

    for (let j = 1; j <= nTotal; j++) {
        let deliveryDate = new Date(faker.date.future())
        let formatted_date = deliveryDate.getFullYear() + "-" + (deliveryDate.getMonth() + 1) + "-" + deliveryDate.getDate()
        
        task = {
            id: j,
            taskTitle: 'Task ' + faker.lorem.word(),
            deliveryDate : formatted_date
        }
        tasks.push(task)
    }
    schedule = {
        id: i,
        scheduleTitle: faker.lorem.word(),
        schedule: tasks
    }

    schedules.push(schedule)
}

module.exports = {
    all: schedules
}
