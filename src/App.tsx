import React from 'react';
import './App.css';
import {Brand} from "./Brand";

function App() {
    return (
        <div>
            <Brand topCars={topCars}/>
        </div>
    );
}


const topCars = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]


export default App;