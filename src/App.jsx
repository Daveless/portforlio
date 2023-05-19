import './App.css'
import Contact from './components/Contact'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section3 from './components/Section3'



function App() {


  return (
    <div className='bg-dav-gray min-h-screen flex flex-col gap-3'>

      <Section1/>
      <Section2/>
      <Section3/>
      <Contact/>
    </div>
  )
}

export default App
