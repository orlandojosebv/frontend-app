export function CambiarFormato(str){
    return (new Intl.NumberFormat('es-MX').format(str));
  }
  export function Tranformada(precio, descuento){
    return precio-(precio*descuento/100);
  }

