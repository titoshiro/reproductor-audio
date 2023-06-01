import { useRef } from 'react'


function App() {

  const inputRef= useRef(null);
  const textoInput= useRef("hola")

  const botonInput=()=>{
    textoInput.current.innerHTML = inputRef.current.value;


  }
 

  return (
    <>
      <input ref={inputRef} type="text" />
      <button  onClick={botonInput}>clic</button>
      <div ref={textoInput}></div>
    
    </>
  )
}

export default App
