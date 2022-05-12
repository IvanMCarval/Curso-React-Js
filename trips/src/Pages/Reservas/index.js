import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {removeReserve} from '../../Store/Modules/Reserve/actions';

import {MdDelete} from 'react-icons/md'

import './style.css';

export default function Reservas() {
  const reserves = useSelector(state => state.reserve);

  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(removeReserve(id));
  }

  return (
    <div>
        <h1 className="title">Voce solicitou {reserves.length} reserva</h1>

        {reserves.map(reserve => (
          <div key={reserve.id} className="reservas">
            <img src={reserve.image} alt={reserve.title}/>
            <strong>{reserve.title}</strong>
            <span>Quantidade: {reserve.amount}</span>
            <button type="button" onClick={() => handleDelete(reserve.id)}>
              <MdDelete size={20} color="#191919"/>
            </button>
          </div>
        ))}


        <footer>
          <button type="button">Solicitar Reservas</button>
        </footer>
    </div>
  )
}