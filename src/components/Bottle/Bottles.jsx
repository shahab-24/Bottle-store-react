import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle1/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(()=> {
        fetch('Bottles.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    console.log(bottles)
    return (
        <div>
            <h3>Hello from BOttles</h3>
           <div className="bottles">
           {
                bottles.map(bottle => <Bottle bottle={bottle}></Bottle>)
            }
           </div>
        </div>
    );
};

export default Bottles;