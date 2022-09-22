import Image from "next/image";
import { formatearDinero } from "../helpers";

const Producto = ({ producto }) => {
  const { id, nombre, precio, imagen } = producto;
  const precioFormateado = formatearDinero(precio);
  return (
    <div className="border p-3">
      <Image
        width={200}
        height={250}
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen de producto ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {precioFormateado}
        </p>
      </div>
    </div>
  );
};

export default Producto;
