import Image from "next/image";
import useQuiosco from "../hooks/useQuiosco";

const Categoria = ({ categoria }) => {
  const { handleClickCategoria, categoriaActual } = useQuiosco();
  const { nombre, id, icono } = categoria;

  return (
    <div
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center w-full gap-4 border p-5 hover:bg-amber-400`}
      onClick={() => handleClickCategoria(id)}
    >
      <Image
        width={60}
        height={60}
        alt="Imagen icono"
        src={`/assets/img/icono_${icono}.svg`}
      />
      <button type="button" className="text-2xl font-bold hover:cursor-pointer">
        {nombre}
      </button>
    </div>
  );
};

export default Categoria;
