import type { V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
        <h1 className="text-3xl font-bold underline">Mi primera pagina en remix</h1>
        <p>Aqui se presenta mi primera página hecha con remix.js, se consumirá una API y se utilizaran componentes para mostrar esa información</p>
        <p>Dando click en el texto de arba tambien se puede ir a la otra pagina, donde se carga la informacion de la API</p>
    </div>
  );
}