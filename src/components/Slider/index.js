import './index.css'
import SliderItem from './SliderItem'

const Slider = ({ list }) => {
  return (
    <div className="slider-container">
      {list.length > 0 &&
        list.map((item) => (
          <SliderItem id={item.id} name={item.name} selected={item.id} />
        ))}
    </div>
  )
}

export default Slider
