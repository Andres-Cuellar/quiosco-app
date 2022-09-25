import { useRouter } from "next/router";

const pasos = [
  { paso: 1, nombre: "Menú", url: "/" },
  { paso: 2, nombre: "Resumen", url: "/resumen" },
  { paso: 3, nombre: "Datos y total", url: "/total" },
];

const Steps = () => {
  const router = useRouter();

  const calcularPaso = () => {
    let valor;
    if (router.pathname === "/") {
      valor = 2;
    } else if (router.pathname === "/resumen") {
      valor = 50;
    } else {
      valor = 100;
    }

    return valor;
  };

  return (
    <>
      <div className="flex justify-between mb-5">
        {pasos.map((paso) => (
          <button
            className="text-2xl font-bold shadow px-10 py-5 rounded w-full"
            key={paso.paso}
            onClick={() => {
              router.push(paso.url);
            }}
          >
            {paso.nombre}
          </button>
        ))}
      </div>
      <div className="bg-gray-100 mb-10">
        <div
          className={`rounded-full bg-amber-500 text-xs leading-none h-2 text-center text-white`}
          style={{ width: `${calcularPaso()}%` }}
        ></div>
      </div>
    </>
  );
};

export default Steps;
