import { useState } from 'react';
import '../../../assets/styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { login as loginService } from "../../../services/UserService"
import useUser from "../../../hooks/useUser"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  let navigate = useNavigate();
  const { setToken, setLoading, setUser } = useUser()

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let formIsValid = true;
    let errors = { email: '', password: '' };

    if (!email) {
      formIsValid = false;
      errors.email = 'El correo es obligatorio';
    } else if (!validateEmail(email)) {
      formIsValid = false;
      errors.email = 'Correo no válido';
    }

    if (!password) {
      formIsValid = false;
      errors.password = 'La contraseña es obligatoria';
    } else if (password.length < 6 || password.length > 20) {
      formIsValid = false;
      errors.password = 'La contraseña debe tener entre 6 y 20 caracteres';
    }

    setErrors(errors);

    if (formIsValid) {
      setLoading(true)
      loginService(email, password).then(data => {
        console.log(data)

        if (data.token) {
          setToken(data.token)
          setUser(data.data)

          if (data.data?.id_rol === 0) {
            navigate("/")//Ruta direccionar.
          } else {
            navigate("/VerClientes")//Ruta direccionar.
          }
        }
      }).finally(() => {
        setLoading(false)
      })
    }
  }; //Con esto se supone que se haría la petición POST para el backend.

  return (
    <div className="login-container">
      <h2>¡Inicia Sesión!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" // Patrón para validar el correo
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            maxLength={20}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <button type="submit">Iniciar Sesión</button>
        <Link to="/OlvidoContrasena" className="OlvidoContrasena">¿Olvidaste tu contraseña?</Link>
      </form>
    </div>
  );
}

export default Login;
