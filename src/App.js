import './App.css'
import Header from './components/Header'
import { initialData } from './data'

const App = () => {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${initialData[3].image})` }}
    >
      <Header />
    </div>
  )
}

export default App
