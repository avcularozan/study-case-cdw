import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import { initialData } from './data'

const App = () => {
  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${initialData[1].image})` }}
    >
      <Header />
      <Content
        name={initialData[1].name}
        type={initialData[1].type}
        date={initialData[1].date}
      />
    </div>
  )
}

export default App
