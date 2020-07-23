require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const Person = require('./models/Person')

app.use(express.json())
app.use(morgan('tiny'))
app.use(cors())
app.use(express.static('build'))

//List of phonebook
let persons = [
  {
    'name': 'Arto Hellas',
    'number': '040-123456',
    'id': 1
  },
  {
    'name': 'Ada Lovelace',
    'number': '39-44-5323523',
    'id': 2
  },
  {
    'name': 'Dan Abramov',
    'number': '12-43-234345',
    'id': 3
  },
  {
    'name': 'Mary Poppendieck',
    'number': '39-23-6423122',
    'id': 4
  }
]



/*const url =
    `mongodb+srv://Damian:P@ssw0rd@cluster0.iwm8o.mongodb.net/phonebook?retryWrites=true&w=majority`
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const PersonSchema = new mongoose.Schema({
  name: String,
  number: String,
  id: Number,
})


PersonSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})
const Person = mongoose.model('Person', PersonSchema) */


app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons)
  })
})

//Return a hardcoded list of phonebook
/* app.get('/api/persons', (req, res) => [
    res.json(persons)

  ]) */



//Display information
app.get('/info', (req, res) => {
  let date = new Date()
  let info = `<p><strong>Phonebook has info for ${persons.length} people</strong><p/>
  <strong>${date}</strong>`
  res.send(info)
})

//Display the information for a single phonebook entry.
/*app.get('/api/persons/:id', (req, resp) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person) {
    resp.json(person)
  } else {
    resp.status(404).end()
  }
}) */

app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person.toJSON())
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))

})

//Delete an entry

/*app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})*/

app.delete('/api/persons/:id', (request, response, next) => {
  Person.deleteOne({ _id: request.params.id })
    .then((result) => {
      if (result.deletedCount === 0) {
        response.status(404).json({ errorMessage: 'Person no longer exists' })
      } else {
        response.status(204).end()
      }
    })
    .catch((error) => next(error))
})


//Add new entry to the phonebook

/*const generateId = () => {
  const uniqueId = Math.floor(Math.random() * 1000)
  return uniqueId
}


app.post('/api/persons', (req, resp) => {
  const body = req.body
const person = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(person)

  if ((person.name).length === 0) {
    return resp.status(400).json({
      error: 'name  missing'
  })
  }
  if ((person.number).length === 0) {
    return resp.status(400).json({
      error: 'number  missing'
  })
  }
  resp.json(person)
})*/

app.post('/api/persons', (request, response, next) => {
  const body = request.body

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  if (!body.name && !body.number) {
    return response.status(400).json({
      error: 'name and number are missing'
    })
  }

  if (!body.name) {
    return response.status(400).json({
      error: 'name  missing'
    })
  }

  if (!body.number) {
    return response.status(400).json({
      error: 'number  missing'
    })
  }


  person.save()
    .then(savedPerson => savedPerson.toJSON())
    .then(savedAndFormattedPerson => {
      response.json(savedAndFormattedPerson)
    })
    .catch(error => next(error))


})

//update an entry

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson.toJSON())
    })
    .catch(error => next(error))
})

//error handling
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind === 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

/* const port = 3001;
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    }) */

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})