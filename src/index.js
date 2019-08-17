import React from 'react';
import ReactDOM from 'react-dom';


function FormatName(user) {
    return `${user.Nombre} ${user.Apellido}`;
}

const user = {
    Nombre: 'Francisco',
    Apellido: 'Ventura',

}

function getGreeting(user) {
    if (user) {
        return <h1>Hola, {FormatName(user)}!</h1>;
    }
    return <h1>Hola, Stranger.</h1>;
}


const element = (

    <div>
        <h1>Prueba</h1>
        {getGreeting(user)}
    </div>
)
const container = document.getElementById('root');

ReactDOM.render(element, container);

