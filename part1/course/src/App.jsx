import Total from './components/Total'
import Header from './components/Header'
import Content from './components/Content'

const App = () => {
  const course = {
    name: 'Half Stack application development',
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
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const totalExercises = course.parts.reduce((a, b) => a + b.exercises, 0)

  return (
    <div>
    <Header course={ course.name } />
    <Content parts={ course.parts } />
    <Total parts={ totalExercises } />
    </div>
  )
}

export default App