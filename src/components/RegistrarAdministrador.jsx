import { useState } from 'react';
import TemplateAdmin from './TemplateAdmin';
import useUser from '../hooks/useUser';
import { registroAdmin } from '../services/UserService';
import AccesoDenegado from './AccesoDenegado';

const RegistrarAdministrador = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', firstName: '', lastName: '', phone: '', idNumber: '', password: '' });
  const {user, token} = useUser();


  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (event) => {
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
      if (!token) return
      registroAdmin({
        correo: email,
        nombre: firstName,
        apellido: lastName,
        telefono:phone,
        cedula:idNumber,
        contrasena:password
      },token).then( data => (console.log(data)))
    }
  };

  if (user?.id_rol === 0) {
    // retorna la pagina de no autorizado
    return <AccesoDenegado></AccesoDenegado>
  }

  return (
    <TemplateAdmin>
      <div className="max-w-lg mx-auto bg-[#F4F4F4] p-8 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Registrar Administrador</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">Nombre</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              />
              {errors.firstName && <span className="text-red-500 text-sm">{errors.firstName}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              />
              {errors.lastName && <span className="text-red-500 text-sm">{errors.lastName}</span>}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Teléfono</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                min="0"
                max="9999999999"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
            </div>
            <div className="mb-4">
              <label htmlFor="idNumber" className="block text-gray-700">Documento de Identidad</label>
              <input
                type="number"
                id="idNumber"
                name="idNumber"
                value={idNumber}
                onChange={(e) => setIdNumber(e.target.value)}
                required
                min="0"
                className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
              />
              {errors.idNumber && <span className="text-red-500 text-sm">{errors.idNumber}</span>}
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              maxLength={20}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-indigo-200"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
          </div>
          <div className="flex justify-center">
            <button type="submit" className="py-2 px-6 bg-black text-white rounded-md avck:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500">Registrar</button>
          </div>
        </form>
      </div>
    </TemplateAdmin>
  );
}

export default RegistrarAdministrador;
