import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './style.css';
import api from '../../services/api';
import { MdFlightTakeoff } from 'react-icons/md';
import { useDispatch } from 'react-redux';
export default function Home() {
    const dispatch = useDispatch();
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        async function loadApi(){
            const response = await api.get("trips");
            setTrips(response.data);

            console.log(response.data);
        }

        loadApi();

    } , [])

    function handleAdd(trip){
        dispatch({
            type:'ADD_RESERVE',
            trip
        })
    }

  return (
    <div>
        <div className="box">
            {trips.map(trip => (
                <li key={trip.id}>
                    <img src={trip.image} alt={trip.title} />
                    <strong>{trip.title}</strong>
                    <span>status: {trip.status ? 'Disponivel' : 'Indisponivel'}</span>

                    <button type='button' onClick={() => handleAdd(trip)}>
                        <div> <MdFlightTakeoff size={16} color="#fff"/></div>
                        Solicitar Reserva
                    </button>
                </li>
            ))}
        </div>
    </div>
  )
}
