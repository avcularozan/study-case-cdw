import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Slider from './components/Slider'
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
      <Slider list={initialData} />
    </div>
  )
}

export default App
