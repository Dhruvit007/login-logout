import './index.css'

const Message = props => {
  const {heading} = props
  return <h1 className="heading">{heading}</h1>
}

export default Message
