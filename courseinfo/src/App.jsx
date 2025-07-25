const Header = (props) => {
  return (<h1>{props.course}</h1>)
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.partName} {props.numExercises}
      </p>
    </div>
  )
}

const Content = (props) => {

  return (
    <div>
      <Part partName={props.parts[0].name} numExercises={props.parts[0].exercises} />
      <Part partName={props.parts[1].name} numExercises={props.parts[1].exercises} />
      <Part partName={props.parts[2].name} numExercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of Exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {

const course = {
  name: 'Half Stack Application development',
  parts: [
  {
    name: 'Fundamentals of React',
    exercises: 10
  },

  {
  name: 'Using props to pass data',
  exercises: 7
  },

  {
  name: 'State of a Component',
  exercises: 14
  }
]
}

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App
