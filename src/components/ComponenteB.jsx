import React, { Component } from "react";
import PropTypes from "prop-types";

class ComponenteB extends Component {
  constructor(props) {
    super(props);
    const { nombre, apellido, email, conectado } = props.contacto;
    this.state = {
      nombre,
      apellido,
      email,
      conectado,
    };
  }

  render() {
    return (
      <div>
        <div>Nombre: {this.state.nombre}</div>
        <div>Apellido: {this.state.apellido}</div>
        <div>Email: {this.state.email}</div>
        <div>
          {this.state.conectado
            ? "Contacto En Línea"
            : "Contacto No Disponible"}
        </div>
        <div>
          <button onClick={this.handlerButton}>
            {this.state.conectado ? "Desconectar" : "Conectar"}
          </button>
        </div>
      </div>
    );
  }

  handlerButton = () => {
    this.setState((prevState) => ({
      conectado: !prevState.conectado,
    }));
  };
}

ComponenteB.propTypes = {
  nombre: PropTypes.string,
  apellido: PropTypes.string,
  email: PropTypes.string,
  conectado: PropTypes.bool,
};

export default ComponenteB;
