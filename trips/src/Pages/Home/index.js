import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {addReserveRequest} from '../../Store/Modules/Reserve/actions';

import { MdFlightTakeoff } from 'react-icons/md';

import api from '../../Services/api';

import './style.css';

export default function Home() {
  const [trips, setTrips] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');

      setTrips(response.data);
    }

    loadApi();
  }, []);

  function handleAdd(id) {
    dispatch(addReserveRequest(id));
  }

  return (
    <div>
        <div className="box">
          {trips.map(trip => (
            <li key={trip.id}>
              <img src={trip.image} alt={trip.title}/>
              <strong>{trip.title}</strong>
              <span>Status: {trip.status ?'Disponivel' : 'Indisponivel'}</span>

              <button type="button" onClick={() => handleAdd(trip.id)}>
                <div>
                  <MdFlightTakeoff size={16} color="#fff"/>
                </div>
                <span>Solicitar Reserva</span>
              </button>
            </li>
          ))}
        </div>
    </div>
  )
}