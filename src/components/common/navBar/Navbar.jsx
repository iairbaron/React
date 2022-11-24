export const NavBar = () => {
  return (
    <ul
      style={{
        width: "100%",
        height: "50",
        border: "2px solid black",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <li style={{ listStyle: "none", cursor: "pointer" }}>inicio</li>
      <li style={{ listStyle: "none", cursor: "pointer" }}>nosotros</li>
      <li style={{ listStyle: "none", cursor: "pointer" }}>Contacto</li>
    </ul>
  );
};
