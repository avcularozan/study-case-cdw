const SliderItem = ({ id, name, selected, handleSliderItem }) => {
  return (
    <div className="item" onClick={() => handleSliderItem(id)}>
      <p className="content-id">{id}</p>
      <p className="content-name">{name}</p>
      <hr className={selected ? 'item-selected' : ''} />
    </div>
  )
}

export default SliderItem