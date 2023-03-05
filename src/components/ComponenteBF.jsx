import React, { useState } from "react";
import PropTypes from "prop-types";
import { Contacto } from "../models/contacto.class";

const ComponenteB = ({ contacto }) => {
  const [conectado, setConectado] = useState(contacto.conectado);

  const handlerButton = () => {
    setConectado(!conectado)
    contacto.conectado = !conectado
  };

  return (
    <div>
      <div>Nombre: {contacto.nombre}</div>
      <div>Apellido: {contacto.apellido}</div>
      <div>Email: {contacto.email}</div>
      <div>
        {contacto.conectado ? "Contacto En Línea" : "Contacto No Disponible"}
      </div>
      <div>
        <button onClick={handlerButton}>
          {contacto.conectado ? "Desconectar" : "Conectar"}
        </button>
      </div>
    </div>
  );
};

ComponenteB.propTypes = {
  contacto: PropTypes.instanceOf(Contacto),
};

export default ComponenteB;
