import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";
export default function Display (props)
{
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    const [data,setData] = useState([]);
    useEffect(() => {
      const asd = async () => {
        await axios({
            headers: { Authorization : `Bearer ${token}` },
            method: 'GET',
            url: 'https://jwt.sulla.hu/termekek'
          })
        .then((resp)=>{
            setData(resp.data);
        })
        .catch((error)=> {
            console.log(error)
        })
      }
      asd();
    },[])

    return (<div>{
        data.map((x)=>{
            return (
              <Card key={x.id} style={{ width: '18rem'}} className='border border-2 mx-auto mt-2 '>
                <Card.Body>
                  <Card.Title>{x.id}</Card.Title>
                  <Card.Text>{x.name}</Card.Text>
                  <Card.Text>{x.price}</Card.Text>
                </Card.Body>
              </Card>
            )
        })
      }</div>
    )
}
