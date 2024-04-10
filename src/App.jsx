import { useState } from 'react'
// importo los modulos de firebase
import appFirebase from '../src/credenciales'
import {getAuth,onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(appFirebase)

//importo los componentes 
import Login from '../src/components/Login'
import Home from '../src/components/Home' 

import './App.css'

function App() {

  const [usuario, setUsuario] = useState(null)

  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if (usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else {
      setUsuario(null)
    }
  });

  return (
  <div>
    {usuario ? <Home correoUsuario= {usuario.email}/> : <Login />}
  </div>
  )
}

export default App
