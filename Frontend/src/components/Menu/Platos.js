import Card from 'react-bootstrap/Card';
import React from "react";
import './Platos.css';
//import { useState, useEffect } from 'react';
//import Aji_Gallina from './Imagenes/Aji-Gallina.jpeg'
import { Navigate, useNavigate } from 'react-router-dom';


const Platos = ({items, addToCart}) =>{
    
    return (
      <div className="row justify-content-center">
        {items.map((items, key)=>{       
        const {id, title, img, price} = items
        return (        
            <Card key={key} className="col-xs-12 col-lg-3 m-3  colorcard" style={{ width: '18rem' }} >
                <Card.Body>
                <Card.Title className='titulo'><h3>{title}</h3></Card.Title>
                <Card.Img className='img_menu py-2' variant="top" src={img} alt={title}  />
                <Card.Text className='desc'>
                  <h5>Precio</h5>
                   {price}
                </Card.Text>
                <button onClick={() => Navigate} type="button" className="boton">Visualizar</button>
                <button onClick={()=>addToCart(id)} type="button" className="boton">Agregar</button>
              </Card.Body>
            </Card>
        )
        })}
      
    </div>
    )
}

export default Platos