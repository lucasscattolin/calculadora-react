import '../styles/BotonClear.css'

const BotonClear = ({ children, limpiarInput }) => {
  return (
    <div
      className='boton-contenedor clear'
      onClick={() => limpiarInput()}>
      {children}
    </div>
  )
}

export default BotonClear