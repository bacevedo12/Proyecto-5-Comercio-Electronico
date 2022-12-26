import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./iniciarsesion.css"

function Iniciarsesion() {
  return (
    <section className='seccionformulario'>
    <Form className='formulario1'>
      <h1 className='mt-4 mb-4'>Iniciar Sesión</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="username" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button className='mb-4' variant="secondary" type="submit">
        Submit
      </Button>
    </Form>
    </section>
  );
}


export default Iniciarsesion;