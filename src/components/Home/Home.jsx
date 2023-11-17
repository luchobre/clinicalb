import React from 'react';
import Cards from '../Cards/Cards';
import pacientesImage from '../../assets/images/paciente.jpg';
import medicosImage from '../../assets/images/medicos.jpg';
import './Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className='cardContainer'>
      <Link to= 'medicos'>
      <Cards urlImage={medicosImage} text={'Médicos'} className='card'/>
      </Link>
      <Link to = '/pacientes'>
      <Cards urlImage={pacientesImage} text={'Pacientes'} className='card'/>
      </Link>
    </div>
    </>
  );
};

export default Home;
