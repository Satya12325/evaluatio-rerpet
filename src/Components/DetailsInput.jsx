import {useState} from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";
export default function DetailsInput(){
    const [name,setName] = useState("");
    const [date,setDate]=useState("");
    const [purpose,setPurpose] = useState("");
    const [amount,setAmount] = useState("");

    const handleClick = () => {
        const payload= {
            name: name,
            date: date,
            purpose: purpose,
            amount: amount,
            status: "PENDING",
            id:uuid()
        }
        const config = {
            url: " http://localhost:3000/data",
            method: "POST",
            data: payload
        }
        return axios(config);
    }
    
    return (
        <div>
            <input type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input type="date"
                placeholder="Date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
            />
            <input type="text"
                placeholder="Purpose of Clame"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
            />
            <input type="number"
                placeholder="Amount to be Claimed"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
           
            <button onClick={handleClick}>
                Add
            </button>
        </div>
    )
}