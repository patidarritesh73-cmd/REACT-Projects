function Button({ children, className = '', onClick, type = 'button' }) {
  return (
    <button className={`button ${className}`.trim()} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button
