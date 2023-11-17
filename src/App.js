import "./App.css";

import employers from "./employers";

// using a CDN in the html root
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className='App m-2'>
      <h1>Participating Employer Contact Database</h1>
      <hr />
      {/* <Form>
        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Enter a District/Charter Name or #</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form> */}

      <Form className='m-2'>
        <Row className='align-items-center'>
          <Form.Label htmlFor='inlineFormInputName'>
            Enter a District/Charter Name or #
          </Form.Label>
          <Col sm={8} className='my-1'>
            <Form.Control
              id='inlineFormInputName'
              placeholder='Search for...'
            />
          </Col>

          <Col sm={4} className='my-1'>
            <Button type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>

      <EmployersList />
    </div>
  );
}
const ers = ["er1", "er2", "er3", "er4", "er5"];

function EmployersList() {
  const listItems = ers.map((er) => <li>{er}</li>);
  return <ul>{listItems}</ul>;
}
export default App;
