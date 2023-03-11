import React from "react";

import Image from './components/ImageComponent.js'
import NameTag from './components/NameTagComponent.js'
import Buttons from './components/ButtonsComponent.js'
import About from './components/AboutComponent.js'
import Interests from './components/InterestsComponent.js'
import Socials from './components/SocialsComponent.js'


export default function App() {
  return (
    <div className="main text-center mx-auto col-md-6 col-sm-4 mt-5">
      <Image />
      <NameTag />
      <Buttons />
      <About />
      <Interests />
      <Socials />
    </div>
  );
}
