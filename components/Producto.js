import Image from "next/image";
import { formatearDinero } from "../helpers";
import useQuiosco from "../hooks/useQuiosco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useQuiosco();

  const { id, nombre, precio, imagen } = producto;
  const precioFormateado = formatearDinero(precio);

  return (
    <div className="border p-3">
      <Image
        width={400}
        height={500}
        src={`/assets/img/${imagen}.jpg`}
        alt={`Imagen de producto ${nombre}`}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{nombre}</h3>
        <p className="mt-5 font-black text-4xl text-amber-500">
          {precioFormateado}
        </p>
        <button
          type="button"
          className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase"
          onClick={() => {
            handleChangeModal();
            handleSetProducto(producto);
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Producto;

