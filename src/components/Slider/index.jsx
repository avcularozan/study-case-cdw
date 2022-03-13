import './index.css'
import SliderItem from './SliderItem'

const Slider = ({ list, handleSlider }) => {
  return (
    <div className="slider-container">
      {list.length > 0 &&
        list.map((item) => (
          <SliderItem
            key={item.id}
            id={item.id}
            name={item.name}
            selected={item.selected}
            handleSliderItem={handleSlider}
          />
        ))}
    </div>
  )
}

export default Slider
