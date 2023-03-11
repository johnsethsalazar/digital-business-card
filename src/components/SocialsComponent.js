import React from "react";
import {FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa'
import '../App.css'


export default function Socials() {
  return (
    <div className="socials">
      <a href="https://twitter.com/salazarjohnseth" target="_blank">
        <FaTwitterSquare className="icon-lg m-3 text-secondary"/>
      </a>
      <a href="https://www.facebook.com/johnseth.salazar/" target="_blank">
        <FaFacebookSquare className="icon-lg m-3 text-secondary"/>
      </a>
      <a href="https://www.instagram.com/old.hall/" target="_blank">
        <FaInstagramSquare className="icon-lg m-3 text-secondary"/>
      </a>
      <a href="https://github.com/johnsethsalazar" target="_blank">
        <FaGithubSquare className="icon-lg m-3 text-secondary"/>
      </a>
    </div>
  );
}
