import React from 'react';
import Cards from '../Cards/Cards';
import pacientesImage from '../../assets/images/paciente.jpg';
import medicosImage from '../../assets/images/medicos.jpg';
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='cardContainer'>
      <Cards urlImage={medicosImage} text={'Médicos'} className='card'/>
      <Cards urlImage={pacientesImage} text={'Pacientes'} className='card'/>
    </div>
    </>
  );
};

export default Home;
