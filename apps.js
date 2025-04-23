

//AGREGAR TAREA
document.getElementById("boton-agregar").addEventListener("click", function() {
    const input = document.getElementById("ingreso-texto");
    const texto = input.value.trim();
    const mensajeError = document.getElementById("mensaje-error")
    const lista = document.querySelector(".lista-tareas")
        if (texto) {
            const li = document.createElement("li");
            li.textContent = texto;
            lista.appendChild(li);
            input.value = "";
            mensajeError.textContent = "";
            //crear botó de eliminar para cada tarea
            const btnEliminar = document.createElement("button");
            btnEliminar.textContent = "Eliminar Tarea";
            btnEliminar.type = "button";
            btnEliminar.classList.add("boton-eliminar");
            //agregar evento para eliminar tarea
            btnEliminar.addEventListener("click", function {
                li.remove()
            });

            
        } else {
        mensajeError.textContent = "Por favor ingresa una tarea"
    }
});

//ELIMINAR TAREA
document.getElementById(boton-eliminar).addEventListener("click", function{
    
})
