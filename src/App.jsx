import { useEffect, useState } from 'react'

import './App.css'
import Tarjeta from './componentes/Tarjeta.jsx'

const DEF_TARJETA = <Tarjeta
  key = {"def key"}
  id={0}
  nombre={"def amigo"}
  telefono={1111111111}
  imagen={""}
/>;

function App() {
  const [amigos, setAmigos] = useState([DEF_TARJETA]);
  useEffect(()=>{
    console.log("Effect");
    async function pedirAmigos(){
      const res = await fetch("http://localhost:5000/amigos/");
      let amigos = "def amigo";
      const tempComponentTarjetas = [];
      if(res.ok){
        amigos = await res.json();
        console.log(amigos);
        amigos.forEach(amigos => {
          tempComponentTarjetas.push(
            <Tarjeta
              key = {amigos.nro_orden}
              nombre={amigos.amigo_nombre}
              telefono={amigos.amigo_telefono}
              id={amigos.nro_orden}
              imagen={"/amigos.jpg"}
              />
          )
        });
        setAmigos(tempComponentTarjetas);
      }
    }
    pedirAmigos();
    return ()=>{
      console.log("Limpiando efecto");
    }
  },[]);

  return (
    <>
     {amigos}
    </>
  )
}

export default App
