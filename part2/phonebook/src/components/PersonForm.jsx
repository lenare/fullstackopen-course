import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const existingPerson = persons.find((entry) => entry.name === newName)
    if (persons.find((entry) => entry.name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook. Do you want to replace the old number with a new one?`)) {
        existingPerson.number = newNumber
        personService
          .update(existingPerson.id, existingPerson)
          .then(returnedPerson => {
            setPersons(persons.map(person => person.id === existingPerson.id ? returnedPerson : person))
            setNewName('')
            setNewNumber('')
          })
      }
    } else {
      const personObject = { name: newName, number: newNumber, id: uuidv4() }
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value.trim())} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value.trim())} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
