import { React, useState } from "react";
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
  const [query, setQuery] = useState();
  return (
    <div className='App m-2'>
      <h1>NMPSIA Participating Employer Contact Database</h1>
      <hr />

      <Form className='my-4'>
        <Row className='align-items-center'>
          <Col className='my-1'>
            <Form.Label htmlFor='inlineFormInputName' className='text-muted'>
              Enter a District Name or #
            </Form.Label>
            <Search query={query} setQuery={setQuery} />
          </Col>

          <Col className='my-1'>
            <Button type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>

      {/* <EmployersList /> */}
      <span className='mb-4'>Search result:</span>
      <Card>
        <Card.Body>
          <Card.Title className='my-2'>
            Elite School of Book Learnin' NM
          </Card.Title>

          <div className='my-4'>
            <Card.Subtitle className='my-2'>
              <em>Jane K. Doe</em>
            </Card.Subtitle>
            <div>
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
            </div>
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

function Search({ query, setQuery }) {
  return (
    <input
      className='form-control'
      type='text'
      placeholder='Search for...'
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}

export default App;
