import { useState, useEffect } from 'react'
import './App.css'
import Content from './components/Content'
import Header from './components/Header'
import Slider from './components/Slider'
import { initialData } from './data'

const App = () => {
  const [list, setList] = useState(initialData)
  const [selectedItem, setSelectedItem] = useState(list[0])

  const handleItem = (id) => {
    list.map((item) => {
      if (item.id === id) {
        item.selected = true
        setSelectedItem(item)
      } else {
        item.selected = false
      }
    })
  }

  return (
    <div
      className="App"
      style={{ backgroundImage: `url(${selectedItem.image})` }}
    >
      <Header />
      <Content
        name={selectedItem.name}
        type={selectedItem.type}
        date={selectedItem.date}
      />
      <Slider list={list} handleSlider={handleItem} />
    </div>
  )
}

export default App
