import React, { useState } from 'react'


function F_ToDoList() {
    const [listaTareas, setListaTareas] = useState([]);
    const [tarea, setTarea] = useState("");
  
    const handleOnKeyDown = (e) => {
        if (e.key == 'Enter' && tarea.trim() !== "") {
          setListaTareas([...listaTareas, { text: tarea, completed: false }]);
          setTarea("");
        }
    };
  
    const toggleCompletion = (index) => {
      const updatedTasks = listaTareas.map((t, idx) => 
        idx === index ? { ...t, completed: !t.completed } : t
      );
      setListaTareas(updatedTasks);
    };
  
    const handleEliminar = (index) => {
      const updatedTasks = listaTareas.filter((_, idx) => idx !== index);
      setListaTareas(updatedTasks);
    };
  
    return (
      <div className='container'>

            <h1>React To-Do App</h1>
            <div>
                <input
                    type="text"
                    value={tarea}
                    onChange={(e) => setTarea(e.target.value)}
                    onKeyDown={handleOnKeyDown}
                    placeholder="Nueva Tarea, Enter"
                />
            </div>
            
            <div >
            <ul className="no-bullets" width="100%">
                {listaTareas.map((task, index) => (
                    <li key={index} className="task-item" style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                        <div className='itemsTask'>
                        
                        <span onClick={() => toggleCompletion(index)}>{task.text}</span>

                        <button
                            className="btnDelete"
                            onClick={() => handleEliminar(index)}
                            aria-label={`Delete task "${task.text}"`}
                        >
                       <span > X</span>  
                        </button>
                        </div>
                    </li>
                ))}
            </ul>
            </div>
            <div style={{textAlign: "left"}}>
              {listaTareas.length == 0 ? <span >No hay tareas, añadir tareas</span> : <span >  Tareas: {listaTareas.length}</span> }
            </div>
      </div>
    );
  }

  export default F_ToDoList;