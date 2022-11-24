import { NavBar } from "../../common/navBar/Navbar";
import PruebasHooks from "../../common/pruebasHooks/PruebasHooks";
import { useState } from "react";

export const Home = () => {

  const [contador, setContador] = useState(0) 
  

  return (
    
    <div><NavBar />
      <PruebasHooks contador={contador} setContador={setContador} />
      </div>
      
    
  );
};
