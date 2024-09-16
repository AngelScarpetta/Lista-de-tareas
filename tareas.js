// poner ID del html para usarlos
const nuevaTareaInput = document.getElementById('nuevaTarea');
const agregarTareaBtn = document.getElementById('agregarTarea');
const listaTareas = document.getElementById('listaTareas');

// Agregar evento click al botón "Agregar"
agregarTareaBtn.addEventListener('click', function() {
  const textoTarea = nuevaTareaInput.value.trim();

  if (textoTarea !== '') {
    agregarTarea(textoTarea);
    nuevaTareaInput.value = '';
  }
});

// Agregar evento click a la lista de tareas
listaTareas.addEventListener('click', function(event) {
  const elementoClicado = event.target;

  if (elementoClicado.tagName === 'LI') {
    elementoClicado.classList.toggle('completada');
  } else if (elementoClicado.tagName === 'BUTTON') {
    elementoClicado.parentElement.remove();
  }
});

// Función para agregar una tarea a la lista
function agregarTarea(texto) {
  const nuevaTarea = document.createElement('li');
  nuevaTarea.textContent = texto;

  const botonEliminar = document.createElement('button');
  botonEliminar.textContent = 'Eliminar';

  nuevaTarea.appendChild(botonEliminar);
  listaTareas.appendChild(nuevaTarea);
}
