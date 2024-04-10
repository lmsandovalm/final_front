
import { useState } from 'react';
import ImageProlife from '../assets/usuario.png';
import Image from '../assets/inicio.jpg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [registrando, setRegistrando] = useState(false);
    const [error, setError] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('https://backend-final1.onrender.com/api-auth/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                console.log("Inicio de sesión exitoso")
                // Registro exitoso
                // Realiza las acciones necesarias, como redireccionar al usuario a otra página
            } else {
                // Error en el registro
                const data = await response.json();
                setError(data.detail); 
            }
        } catch (error) {
            console.error('Error al ingresar:', error);
            setError('Error de red. Por favor, inténtalo de nuevo más tarde.');
        }
    };

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-4">
                    <div className="padre">
                        <div className="card card-body shadow-lg">
                            <img src={ImageProlife} alt='' className='estilo-prolife'/>
                            <form onSubmit={handleFormSubmit}>
                                <input 
                                    type='text' 
                                    placeholder='Ingresar Email' 
                                    className='cajatexto' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input 
                                    type='password' 
                                    placeholder='Ingresar Contraseña' 
                                    className='cajatexto' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button className='btnform' type="submit">
                                    {registrando ? "Registrate" : "Inicia Sesión"}
                                </button>
                            </form>
                            <h4>{registrando ? "Si ya tienes cuenta" : "No tienes una cuenta"}
                                <button className='btnswicth' onClick={()=>setRegistrando(!registrando)}>
                                    {registrando ? "Inicia Sesión" : "Registrate"}
                                </button>
                            </h4>
                            {error && <p>{error}</p>}
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <img src={Image} alt='' className='tamaño-imagen'/>
                </div>
            </div>
        </div>
    );
};

export default Login;
