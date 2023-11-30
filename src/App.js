import "./App.css";

// import employers from "./employers";

// using a CDN in the html root
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function App() {
  return (
    <div className='App m-2'>
      <h1>NMPSIA Participating Employer Contact Database</h1>
      <hr />

      <Form className='my-4' style={{ maxWidth: "600px" }}>
        <Row className='align-items-center'>
          <Form.Label htmlFor='inlineFormInputName' className='text-muted'>
            Enter a District Name or #
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

      {/* <EmployersList /> */}
      <span className='mb-4'>Search result:</span>
      <Card style={{ width: "600px" }}>
        <Card.Body>
          <Card.Title className='my-2'>
            Elite School of Book Learnin' NM
          </Card.Title>

          <div className='my-4'>
            <Card.Subtitle className='my-2'>
              <em>Jane K. Doe</em>
            </Card.Subtitle>
            <Card.Text>
              <ul
                className='ps-3'
                style={{ listStyle: "none", borderLeft: "2px solid #eee" }}
              >
                <li>
                  <span className='text-muted'>Role:</span> BILLING1, BENEFITS1
                </li>
                <li>
                  <span className='text-muted'>Email:</span>{" "}
                  janesemail@janelol.com
                </li>
                <li>
                  <span className='text-muted'>Phone:</span> 505-555-0123
                </li>
              </ul>
            </Card.Text>
          </div>

          <div className='my-4'>
            <Card.Subtitle className='my-2'>
              <em>James Tho</em>
            </Card.Subtitle>
            <Card.Text>
              <ul
                className='ps-3'
                style={{ listStyle: "none", borderLeft: "2px solid #eee" }}
              >
                <li>
                  <span className='text-muted'>Role:</span> BILLING2, BENEFITS2
                </li>
                <li>
                  <span className='text-muted'>Email:</span>{" "}
                  jameysemail@jameslmao.com
                </li>
                <li>
                  <span className='text-muted'>Phone:</span> 505-555-4567
                </li>
              </ul>
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
