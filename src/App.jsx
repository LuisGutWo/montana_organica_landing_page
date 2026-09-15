import RielDeCotas from "./components/RielDeCotas";
import Cordillera from "./components/Cordillera";
import Origen from "./components/Origen";
import Catalogo from "./components/Catalogo";
import Aliados from "./components/Aliados";
import Lecturas from "./components/Lecturas";
import Contacto from "./components/Contacto";
import PieDePagina from "./components/PieDePagina";
import AvisoCookies from "./components/AvisoCookies";

/**
 * El corte completo, de la nieve al mar:
 * Janca → Puna → Quechua → Yunga → Chala.
 */
export default function App() {
  return (
    <div className="corte">
      <a className="salto" href="#catalogo">
        Saltar al catálogo
      </a>
      <RielDeCotas />
      <main className="lamina">
        <Cordillera />
        <Origen />
        <Catalogo />
        <Aliados />
        <section id="mesa" className="piso mesa" data-piso="chala">
          <div className="limite">
            <p className="chapa instrumento">
              <strong>Chala</strong>
              <span>A tu mesa</span>
              <span className="chapa-cota">0 – 500 m</span>
            </p>
            <Contacto />
            <Lecturas />
          </div>
          <PieDePagina />
        </section>
      </main>
      <AvisoCookies />
    </div>
  );
}
