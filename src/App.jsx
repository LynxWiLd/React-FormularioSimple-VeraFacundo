import Formulario from "./Formulario.jsx";
import { Container } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <Container className="mt-4">
      <h1 className="titulo text-center text-white py-3 rounded">Formulario</h1>
      <Formulario />
    </Container>
  );
}

export default App;
