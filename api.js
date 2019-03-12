'use strict'

const debug = require('debug')('platziverse:api:routes')
const express = require('express')

const api = express.Router()
const novicesFixtures = require('./tests/fixtures/novices')
const usersFixtures = require('./tests/fixtures/users')
const assignmentsFixtures = require('./tests/fixtures/assignments')
const tutorsFixtures = require('./tests/fixtures/tutors')
const companiesFixtures = require('./tests/fixtures/companies')
const studentsFixtures = require('./tests/fixtures/students')
const coordinatorsFixtures = require('./tests/fixtures/coordinators')

api.get('/students/:username', (req, res) => {
  debug('get students')
  if (req.params.username == 'coordinador100') {
    res.append('Access-Control-Allow-Origin','*')
    res.json(studentsFixtures.all)
  } else {
    res.status(404).send('¡Lo siento, no puedo encontrar eso!')
  }
})

api.get('/tutors', (req, res) => {
  debug('get tutors')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(tutorsFixtures.all))
})

api.get('/places', (req, res) => {
  debug('get tutors')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(companiesFixtures.all))
})

api.get('/users', (req, res) => {
  debug('GET users')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(usersFixtures.all))
})

api.get('/next-assignments', (req, res) => {
  debug('GET next-assignments')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(assignmentsFixtures.nextAssignments))
})

api.get('/expired-assignments', (req, res) => {
  debug('GET expired-assignments')
  res.append('Access-Control-Allow-Origin','*')
  res.send(JSON.stringify(assignmentsFixtures.expiredAssignments))
})

api.get('/coordinators', (req, res) => {
  debug('GET expired-assignments')
  res.append('Access-Control-Allow-Origin','*')
  res.json(coordinatorsFixtures.all)
})

module.exports = api
