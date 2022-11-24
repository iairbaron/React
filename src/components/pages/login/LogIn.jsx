import {useNavigate} from 'react-router-dom'


const LogIn = () => {
    const navigate=useNavigate("")

    const handleLogin=()=>{
        localStorage.setItem("accesToken","true")
        navigate("/productos")
    }

  return (
    <>
    <h2>Log in</h2>
    <button onClick={handleLogin} > Ingresar</button>

    </>

  )
}

export default LogIn