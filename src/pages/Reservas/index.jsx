import React from 'react'
import { MdDelete } from 'react-icons/md';
import { useSelector } from 'react-redux';
import './style.css';
export default function Index() {

  const reservers = useSelector(state => state.reserve);
  console.log(reservers);

  return (
    <div>
      <h1 className='title'>Você solicitou {reservers.length} reserva</h1>
      {reservers.map(reserve => (
        <div className='reservas' key={reserve.id}>
          <img src={reserve.img} alt={reserve.title} />

          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
          <button type='button' onClick={() => { }}><MdDelete size={20} color="#191919" /></button>
        </div>
      ))}


      <footer>
        <button type='button'>Solicitar reservas</button>
      </footer>
    </div>
  )
}
