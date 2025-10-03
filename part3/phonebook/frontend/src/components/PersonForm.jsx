import { useState } from 'react'
import personService from '../services/persons'

const PersonForm = ({ persons, setPersons, setMessage }) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const existingPerson = persons.find(
      (entry) => entry.name === newName.trim()
    )

    // 🔹 helper to handle post-save housekeeping
    const finalizeUpdate = (returnedPerson, message) => {
      setNewName('')
      setNewNumber('')
      setMessage(message)
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    }

    if (existingPerson) {
      if (
        window.confirm(
          `${newName.trim()} is already added to phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        const updatedPerson = { ...existingPerson, number: newNumber }
        personService
          .update(existingPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id === existingPerson.id ? returnedPerson : person
              )
            )
            finalizeUpdate(
              returnedPerson,
              `Updated number of ${returnedPerson.name}`
            )
          })
          .catch(error => {
            setMessage(`Error when updating number of ${updatedPerson.name}. Person has already been removed from server.`)
            setTimeout(() => {
              setMessage(null)
            }, 3000)
            personService
              .getAll()
              .then(allPersons => setPersons(allPersons))
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      personService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        finalizeUpdate(returnedPerson, `Added ${returnedPerson.name}`)
      })
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={(event) => setNewName(event.target.value)} />
        </div>
        <div>
          number: <input value={newNumber} onChange={(event) => setNewNumber(event.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm
