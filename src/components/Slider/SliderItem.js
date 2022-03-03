const SliderItem = ({ id, name, selected }) => {
  return (
    <div className="item1">
      <p className="content-id">{id}</p>
      <p className="content-name">{name}</p>
      <hr className={selected !== id ? 'item-selected' : ''} />
    </div>
  )
}

export default SliderItem
