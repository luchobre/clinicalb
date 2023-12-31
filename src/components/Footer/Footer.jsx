import React from 'react';
import { Typography } from "@material-tailwind/react";
import logo from '../../assets/images/logo.png'
import './Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='container-footer'>
    <footer className="bg-gray-200 py-4">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
          <img src={logo} alt="Logo" className="h-12 ml-2"/>
          </Link>
        </div>
        <div className="flex items-center mr-2">
          <Typography
            variant="body2"
            color="textPrimary"
            className="mx-1 cursor-pointer hover:underline border"
          >
            About us
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            className="mx-1 cursor-pointer hover:underline border"
          >
            Contact
          </Typography>
          <Typography
            variant="body2"
            color="textPrimary"
            className="mx-1 cursor-pointer hover:underline border"
          >
            Terms & Conditions
          </Typography>
        </div>
      </div>
      <hr className="my-4 border-gray-400" />
      <div className="container mx-auto text-center">
        <Typography variant="body2" color="textPrimary">
          &copy; 2023 Argentina Programa By Luciano Bregoli
        </Typography>
      </div>
    </footer>
    </div>
  );
};

export default Footer;
