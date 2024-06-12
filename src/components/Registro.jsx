import React, { useState } from 'react';
import '../assets/styles/Registro.css';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', firstName: '', lastName: '', phone: '', idNumber: '', password: '' });

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    let formIsValid = true;
    let errors = { email: '', firstName: '', lastName: '', phone: '', idNumber: '', password: '' };

    if (!email) {
      formIsValid = false;
      errors.email = 'El correo es obligatorio';
    } else if (!validateEmail(email)) {
      formIsValid = false;
      errors.email = 'Correo no válido';
    }

    if (!firstName) {
      formIsValid = false;
      errors.firstName = 'El nombre es obligatorio';
    }

    if (!lastName) {
      formIsValid = false;
      errors.lastName = 'El apellido es obligatorio';
    }

    if (!phone) {
      formIsValid = false;
      errors.phone = 'El teléfono es obligatorio';
    } else if (phone.length !== 10) {
      formIsValid = false;
      errors.phone = 'El teléfono debe tener exactamente 10 dígitos';
    }

    if (!idNumber) {
      formIsValid = false;
      errors.idNumber = 'El documento de identidad es obligatorio';
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
      try {
        const response = await fetch('http://localhost:3001/register', { //Aquí iria donde está el servidor
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, firstName, lastName, phone, idNumber, password }),
        });
        const data = await response.json();
        console.log(data); // Aquí puedes manejar la respuesta del backend
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }; //Se supone que con esto ya se hace la petición POST para el backend

  return (
    <div className="register-container">
      <h2>¡Bienvenido!</h2>
      <p className="intro-text">Completa tu información básica y regístrate.</p>
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
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
          </div>
          <div className="form-group half-width">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group half-width">
            <label htmlFor="phone">Teléfono:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              minLength={10}
              maxLength={10}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>
          <div className="form-group half-width">
            <label htmlFor="idNumber">Documento de Identidad</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
            {errors.idNumber && <span className="error">{errors.idNumber}</span>}
          </div>
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
        <button type="submit">Registrarme</button>
      </form>
    </div>
  );
}

export default Registro;
