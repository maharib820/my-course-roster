import './App.css'
import Courses from './components/Courses/Courses'

function App() {

  return (
    <>
      <div className='flex flex-col lg:flex-row justify-between pb-24 px-2 lg:px-16 gap-6'>
        <Courses></Courses>
      </div>
    </>
  )
}

export default App
