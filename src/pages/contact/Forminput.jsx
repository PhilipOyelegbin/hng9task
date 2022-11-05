export const Inputfield = ({text, label, placeholder}) => {
  return (
    <div className="form-group">
        <label htmlFor={text}>{label}</label>
        <input type="text" name={text} id={text} placeholder={placeholder} required />
    </div>
  )
}

export const Multitextfield = ({text, label, placeholder}) => {
    return (
      <div className="form-group">
          <label htmlFor={text}>{label}</label>
          <textarea name={text} id={text} cols="30" rows="5" placeholder={placeholder} required ></textarea>
      </div>
    )
  }
