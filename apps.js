
const input = document.getElementById("ingreso-texto");
const lista = document.getElementById("lista-tareas");
const crearBotonEliminar = document.createElement("button");

//AGREGAR TAREA
const botonAgregar = document.getElementById("boton-agregar")
botonAgregar.addEventListener("click", function(){
    const itemNuevo = document.createElement("li")
    const texto = input.value.trim();
    itemNuevo.textContent = texto;
    lista.appendChild(itemNuevo)
    //crear el boton
    crearBotonEliminar.type = "button";
    crearBotonEliminar.textContent = "eliminar tarea";
    itemNuevo.appendChild(crearBotonEliminar) // agregar botón dentro del li
});
//ELIMINAR TAREA
    crearBotonEliminar.addEventListener("click", function(){
        const li = this.parentElement; //Obtener el <li> que contiene el botón
        li.remove();
});

