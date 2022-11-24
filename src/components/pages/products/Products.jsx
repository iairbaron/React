import { productos } from "../../../productsDispo";
import { Link, useNavigate } from "react-router-dom";


import React from "react";

const Products = () => {

  const navigate = useNavigate()

  console.log(productos);
  const handleLogOut = () => {
    localStorage.removeItem("accesToken");
    navigate("/")
  };

  return (
    <>
      <button onClick={handleLogOut}> Cerrar sesion </button>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {productos.map((product) => (
          <div
            key={product.id}
            style={{
              border: "2px solid black",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              width: "25%",
              height: "200px",
            }}
          >
            <h4>{product.name}</h4>
            <h4>{product.descripcion}</h4>
            <Link to={`/productos/${product.id}`}>
              Ver detalle de producto{" "}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
