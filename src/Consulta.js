import React from "react";
import { useState } from "react";
import getUsuario from './api';

export function Consulta() {

    const [user_id, setUser_id] = useState(0);
    const [name, setName] = useState("");
    const [email, setEMail] = useState('');

    getUsuario(1);
    const handleChange = (event) => {
        setUser_id(event.target.value);
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await getUsuario(user_id);
            console.log("respuesta status: ", response.status);
            if (response.status === 200) {
                if (response.data === "") {
                    setName("Usuario No existe")
                } 
                else 
                {
                    setName(response.data.name);
                    setEMail(response.data.email);
                } 
            }
            else 
            {
                setName("Error" + response.status);
            }
        } catch(error) {
            setName("Error", error.message);
        }
    };

    return (
        
        <div>
            <h2>Consultar Usuario</h2>
            <form onSubmit={handleFormSubmit}>
                User id:
                <input onChange={handleChange}/>
            </form>
            <div>{user_id}</div>
            <div>Name: {name}</div>
            <div>E-mail: {email}</div>
        </div>
    )
};
