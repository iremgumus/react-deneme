
import{Container,Button,Form} from "react-bootstrap";

import './App.css';

function App() {
  return (
   <Container>
    <Form class="ad">
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Lütfen email adresinizi giriniz.." />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>sifre</Form.Label>
    <Form.Control type="sifre" placeholder="Lütfen sifrenizi giriniz.." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
   Gönder
  </Button>
</Form>
</Container>
  );
}

export default App;
