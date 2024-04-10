import React from 'react';
import Login from './components/Login'; // Ajusta la ruta según la ubicación de tu componente Login
import './App.css'; // Importa el archivo CSS de estilos

function App() {
  return (
    <div className="app-container">
      <h1 className="app-title">¡Bienvenido a mi aplicación!</h1>
      <Login />
    </div>
  );
}

export default App;
