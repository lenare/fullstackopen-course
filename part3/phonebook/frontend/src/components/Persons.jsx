import personService from '../services/persons'

const Persons = ({ persons, setPersons }) => {
  const handleDeleteButton = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .deleteById(person.id)
        .then(deletedPerson => {
          console.log(deletedPerson.id)
          setPersons(persons.filter(person => person.id !== deletedPerson.id)) }
        )
    }
  }
  return (
    <div>
      {persons.map(person => <div key={person.id}>{person.name} {person.number} <button onClick={() => handleDeleteButton(person)}>delete</button></div>)}
    </div>
  )
}



export default Persons
