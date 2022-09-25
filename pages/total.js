import Layout from "../layout/layout";
import { useEffect, useCallback } from "react";
import useQuiosco from "../hooks/useQuiosco";
import { formatearDinero } from "../helpers";

export default function Total() {
  const { pedido, nombre, setNombre, colocalOrden, total } = useQuiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre === "" || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina={"Datos y Total"}>
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirma tu pedido a continuación</p>
      <form onSubmit={colocalOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font-bold text-xl"
          >
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar {""} <span className="font-bold">{formatearDinero(total)}</span>{" "}
          </p>
        </div>
        <div>
          <input
            className={`${
              comprobarPedido()
                ? "bg-indigo-300"
                : "bg-indigo-700 hover:bg-indigo-800"
            } w-fwll lg:w-auto px-5 py-2 rounded uppercase text-white mt-5 font-bold text-center  `}
            value="Confirmar Pedido"
            type="submit"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
