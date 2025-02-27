import React, { useState } from 'react'

function Eventos() {
    // Estados del componente
    const [valorInput, setValorInput] = useState("");
    const [lista, setLista] = useState([]);
    const [numeros, setNumeros] = useState([1, 2, 3, 4, 5]);
    const [usuario, setUsuario] = useState({nombre: "Leonardo"});

    // const arreglo1 = [1, 2, 3, 4, 5];
    // const arregloFinal = [...arreglo1, 6,7,8]
    // console.log(arregloFinal)

    // const objetoOriginal = { nombre: "Leonardo", edad: 25}
    // const copia = {...objetoOriginal}
    // console.log(copia)

    // const obj1 = { nombre: "Leonardo"};
    // const obj2 = {edad: 25}
    // const combinado = {...obj1, ...obj2 }
    // console.log(combinado)


    // Funciones event handlers (manejadoras de eventos)
    function handleClick() {
        alert("Boton clickeado!")
    };

    const handleOnchange = (e) => {
        setValorInput(e.target.value);
        console.log(e.target.value)
    };

    const handleOnKeyDown = (e) => {
        if (e.key == 'Enter') {
            setLista([...lista, valorInput]);
        }
    };

    const agregarElementosArray = () =>{
        setNumeros([...numeros, 6,7])
    }

    const agregarElementosObjeto = () =>{
        setUsuario({...usuario, edad: 20})
    }
    // Lo que retorna el componente
    return (
        <div className='container'>
            <div className="row">
                <div className="">
                    <button onClick={()=>{agregarElementosArray()}}>Agregar elementos al arreglo</button>
                    <button onClick={()=>{agregarElementosObjeto()}}>Agregar elementos al objeto</button>
                    {/* El input donde usamos los eventos en combinación con los manejadores de eventos */}
                    <input
                        type="text"
                        onChange={(e) => { handleOnchange(e) }} // Aqui llamamos el manejador de evento (handleOnChange)
                        onKeyDown={(e) => { handleOnKeyDown(e) }} // Aqui llamamos el manejador de evento (handleOnKeyDown)
                        value={valorInput} // Variable del estado.
                        placeholder='Aqui un texto cualquiera...' />
                    <hr />
                    <div>
                        <ul>
                            {lista.map((value, index) => {
                                return <li>{value}</li>

                            })}
                        </ul>
                    </div>
                    {/* Ejemplos de otros eventos */}
                    {/* <button onClick={ (e)=>{ handleClick(); } }> Haz Click Aqui!</button>
                    <button onMouseEnter={(e)=>{ console.log(e) }}>onMouseEnter</button>
                    <button onMouseLeave={(e)=>{ console.log(e) }}>onMouseLeave</button>

                    <input type="text" onKeyDown={(e)=>{ console.log(e)  }} placeholder='onKeyDown'/>
                    <input type="text" onKeyUp={(e)=>{ console.log(e)  }} placeholder='onKeyUp'/> */}

                    {/* <form onChange={(e)=>{ console.log(e.target.value)  }}>

                    <input type="text" placeholder='Nombre'/>
                    <input type="text" placeholder='Apellido'/>

                    </form>

                    <input type="text" onFocus={(e)=> { console.log(e)}} placeholder='onFocus'/>
                    <input type="text" onBlur={(e)=> { console.log(e)}} placeholder='onBlur'/> */}
                </div>
            </div>
        </div>
    )
}

export default Eventos