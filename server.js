const express = require('express')
const next = require('next')

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const server = express()
const handle = app.getRequestHandler()

const PORT = process.env.PORT || 3000

server.use(
  '/_next/static/style.css',
  express.static('./.next/static/style.css')
)
server.use(
  '/_next/static/style.css.map',
  express.static('./.next/static/style.css.map')
)

/*
===============================================================================
PROFILE ROUTES
===============================================================================
*/

// User Profile
server.get('/user/:id', (req, res) => {
  return app.render(req, res, '/profile/user', req.params)
})

// Team Profile
server.get('/team/:id', (req, res) => {
  return app.render(req, res, '/profile/team', req.params)
})

/*
===============================================================================
LIST ROUTES
===============================================================================
*/

// Teams List
server.get('/teams', (req, res) => {
  return app.render(req, res, '/lists/teams', req.params)
})

// Users List
server.get('/users', (req, res) => {
  return app.render(req, res, '/lists/users', req.params)
})

// Entries List
server.get('/entries', (req, res) => {
  return app.render(req, res, '/lists/entries', req.params)
})

/*
===============================================================================
AUTH ROUTES
===============================================================================
*/

// Teams List
server.get('/login', (req, res) => {
  return app.render(req, res, '/auth/login', req.params)
})

// Users List
server.get('/logout', (req, res) => {
  return app.render(req, res, '/auth/logout', req.params)
})

// Entries List
server.get('/authorized', (req, res) => {
  return app.render(req, res, '/auth/authorized', req.params)
})

/*
===============================================================================
CREATION ROUTES
===============================================================================
*/

// New Team
server.get('/new/team', (req, res) => {
  return app.render(req, res, '/new/team', req.params)
})

// New User
server.get('/new/user', (req, res) => {
  return app.render(req, res, '/new/user', req.params)
})

// New Entry
server.get('/new/entry', (req, res) => {
  return app.render(req, res, '/new/entry', req.params)
})

/*
===============================================================================
MANAGEMENT ROUTES
===============================================================================
*/

// Manage Team
server.get('/manage/team/:id', (req, res) => {
  return app.render(req, res, '/manage/team', req.params)
})

// Manage Profile
server.get('/manage/user/:id', (req, res) => {
  return app.render(req, res, '/manage/user', req.params)
})

// Manage Account
server.get('/manage/user/:id/account', (req, res) => {
  return app.render(req, res, '/manage/user/account', req.params)
})

// Manage Event
server.get('/manage/event', (req, res) => {
  return app.render(req, res, '/manage/event', req.params)
})

/*
===============================================================================
SUBMISSION ROUTES
===============================================================================
*/

// Entry
server.get('/:entity/:id/:entry', (req, res) => {
  if (req.params.entity === 'user' || req.params.entity === 'team') {
    return app.render(req, res, '/entry/id', req.params)
  }

  return app.render404(req, res)
})

// Edit Entry
server.get('/:entity/:id/:entry/edit', (req, res) => {
  return app.render(req, res, '/entry/id/edit', req.params)
})

// Judge Entry
server.get('/:entity/:id/:entry/judge', (req, res) => {
  return app.render(req, res, '/entry/id/judge', req.params)
})

/*
===============================================================================
BASE ROUTES
===============================================================================
*/

// Render index
server.get('/', (req, res) => {
  return app.render(req, res, '/')
})

// Event info
server.get('/event', (req, res) => {
  return app.render(req, res, '/event')
})

// Rules page
server.get('/rules', (req, res) => {
  return app.render(req, res, '/event/rules')
})

// Blanket everything else in a something
server.get('*', (req, res) => {
  return handle(req, res)
})

app.prepare().then(() => {
  server.listen(PORT)
})
