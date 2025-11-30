const precioEl = document.querySelector("#precio")
const cantidadEl = document.querySelector("#cantidad")
const totalEl = document.querySelector("#total")

const btnSumar = document.querySelector("#btn-sumar")
const btnRestar = document.querySelector("#btn-restar")

btnSumar.onclick = () => {
  let cantidad = Number(cantidadEl.innerHTML)
  cantidad = cantidad + 1
  cantidadEl.innerHTML = cantidad
  totalEl.innerHTML = cantidad * Number(precioEl.innerHTML)
}

btnRestar.onclick = () => {
  let cantidad = Number(cantidadEl.innerHTML)
  if (cantidad > 0) {
    cantidad = cantidad - 1
  }
  cantidadEl.innerHTML = cantidad
  totalEl.innerHTML = cantidad * Number(precioEl.innerHTML)
}
