import React, { useState, useEffect } from "react";
//Mis imports
import Presupuesto from "./componentes/Presupuesto";
import Formulario from "./componentes/Formulario";
import Listado from "./componentes/Listado";
import ControlPresupuesto from "./componentes/ControlPresupuesto";

function App() {
  //Definir state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  //Carga condicional de componentes, a traves de un state
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);

  //Use Effect o array de dependencias que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      //Agregar el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      ///Resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      //Resetear a false
      guardarCrearGasto(false);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? (
            <Presupuesto
              guardarPresupuesto={guardarPresupuesto}
              guardarRestante={guardarRestante}
              actualizarPregunta={actualizarPregunta}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Formulario
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
              <div className="one-half column">
                <Listado gastos={gastos} 
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
