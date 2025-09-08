const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {

  return (
    <div>
      {props.parts.map((element, index) => (
        <Part key={index} part={element.name} exercises={element.exercises} />
      ))}
    </div>
  );
}

const Part = (props) => {
  return <p>{props.part} {props.exercises}</p>
}

const Total = (props) => {
  let total = 0
  props.parts.forEach(element => {
    total += element.exercises
  })
  return <p>Number of exercises {total}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App
