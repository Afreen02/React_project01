import './App.css'
import Card from './components/Card'
function App() {
  let myObj = {
    userName: 'Afreen',
    class: 'MCA'
  }
  let newArray = [1, 2, 3]

  return (
    <>
    <h1 className='bg-green-400 text-white rounded-xl p-4'>Tailwind testing</h1>
    <Card userName="Afreenblogs"/>
    <Card userName="Jaipur blogs" text="Click here"/>
    </>
  )
}

export default App
