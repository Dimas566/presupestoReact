import React, { Fragment,useState } from "react";
import Error from './Error';

const Presuesto = ({guardarPresupuesto, guardarRestante}) => {

    ///Definir el State
    const [cantidad, guardarCantidad] = useState(0);
    const [error,guardarError] = useState(false);

    ///Función que lee el presupuesto.
    const definirPresuesto = e => {
        guardarCantidad(parseInt(e.target.value,10));
    }
    //Submit para agregar el presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if(cantidad < 1 || isNaN( cantidad )){
            guardarError(true);
            return;
        }

        //Que hacer luego de validar
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }
  return (
    <Fragment>
        {error ? <Error mensaje = 'El presupuesto es incorrecto' /> : null}
      <form
        onSubmit = {agregarPresupuesto}
      >
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange = {definirPresuesto}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir Presupuesto"
        />
      </form>
    </Fragment>
  );
};

export default Presuesto;
