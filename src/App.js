import './App.css';
import Boton from './components/Boton';
import Display from './components/Display';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const limpiarInput = () => setInput('');

  const agregarInput = val => {
    const operadorRepetido = /[+\-*/^.]$/gm;

    if (operadorRepetido.test(input) && isNaN(val)) {
      setInput(input.slice(0, -1) + val);
    } else {
      setInput(input + val);
    }
  };
  const calcularResultado = () => {
    if (input) {
      setInput(Math.round((evaluate(input) + Number.EPSILON) * 100000) / 100000);
    };
  };

  return (
    <div className="App">
      <div>
        <h1 className='logo'>CalculadorApp</h1>
      </div>
      <div className='contenedor-calculadora'>
        <Display input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput} chr='7'>7</Boton>
          <Boton manejarClic={agregarInput} chr='8'>8</Boton>
          <Boton manejarClic={agregarInput} chr='9'>9</Boton>
          <Boton manejarClic={agregarInput} chr='/'>&divide;</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} chr='4'>4</Boton>
          <Boton manejarClic={agregarInput} chr='5'>5</Boton>
          <Boton manejarClic={agregarInput} chr='6'>6</Boton>
          <Boton manejarClic={agregarInput} chr='*'>&times;</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} chr='1'>1</Boton>
          <Boton manejarClic={agregarInput} chr='2'>2</Boton>
          <Boton manejarClic={agregarInput} chr='3'>3</Boton>
          <Boton manejarClic={agregarInput} chr='-'>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput} chr='.'>.</Boton>
          <Boton manejarClic={agregarInput} chr='0'>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput} chr='+'>+</Boton>
        </div>
        <div className='fila'>
          <BotonClear limpiarInput={limpiarInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
