export function CambiarFormato(number) {
  return number.toLocaleString('es-ES');;
}
export function Tranformada(precio, descuento) {
  return precio - (precio * descuento / 100);
}

