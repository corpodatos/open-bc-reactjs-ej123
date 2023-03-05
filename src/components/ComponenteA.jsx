import { Contacto } from "../models/contacto.class";
import ComponenteB from "./ComponenteB";
import ComponenteBF from "./ComponenteBF";

const ComponenteA = () => {
  const defaultContacto = new Contacto(
    "José",
    "Hernández",
    "jose@gmail.com",
    false
  );

  return (
    <div>
      <ComponenteBF contacto={defaultContacto}></ComponenteBF>
      <br />
      <ComponenteB contacto={defaultContacto}></ComponenteB>
    </div>
  );
};

export default ComponenteA;
