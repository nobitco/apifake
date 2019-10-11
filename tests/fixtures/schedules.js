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

        let month = deliveryDate.getMonth() + 1
        let monthWithZero
        month < 10 ? monthWithZero = '0' : monthWithZero = ''

        let day = deliveryDate.getDate()
        let dayWithZero
        day < 10 ? dayWithZero = '0' : dayWithZero = ''

        let formatted_date = deliveryDate.getFullYear() + "-" + monthWithZero + (deliveryDate.getMonth() + 1) + "-" + dayWithZero + deliveryDate.getDate()
        
        task = {
            id: j,
            taskTitle: 'Task ' + faker.lorem.word(),
            taskDate : formatted_date,
            unixtimezero: Date.parse(deliveryDate)
        }
        tasks.push(task)
    }

    tasks.sort(function (a,b) {
        return a.unixtimezero - b.unixtimezero
    })
    
    schedule = {
        id: i,
        scheduleTitle: faker.lorem.word(),
        tasks: tasks
    }

    schedules.push(schedule)
}

module.exports = {
    all: schedules
}
