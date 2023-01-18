import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from "react";
import "./iniciarsesion.css";
const url_api = 'http://localhost:3005';

function Iniciarsesion() {
  const valorInicial = {
    username:'',
    password:''
}

const [usuario, setUsuario] = useState(valorInicial);

const capturarInputs = (e) => {
    const {name, value} = e.target;
    setUsuario({...usuario, [name]:value})
}

const consultarDatos = async (e) => {
    e.preventDefault();

    console.log(usuario);
    try {
        let config = {
            method:'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(usuario)
        }

        let res = await fetch (`${url_api}/usuarios`, config)
        let json = await res.json()

        console.log(json)
    }catch (error){
        console.error(error)

    }
}





  return (
    <section className='seccionformulario'>
    <Form onSubmit={consultarDatos} className='formulario1'>
      <h1 className='mt-4 mb-4 text-light'>Iniciar Sesión</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" onChange={capturarInputs} value={usuario.username}>
        <Form.Control type="text" placeholder="username" name="username"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword" onChange={capturarInputs} value={usuario.password}>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mb-4' variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}


export default Iniciarsesion;