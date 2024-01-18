import { React, useState } from "react";
import "./App.css";

import employers from "./employers";

// using a CDN in the html root
// import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
// import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className='App m-2'>
      <h1>NMPSIA Participating Employer Contact Database</h1>
      <hr />

      <Form className='my-4'>
        <Row className='align-items-center'>
          <Col>
            <Form.Label htmlFor='inlineFormInputName' className='text-muted'>
              Enter a district name or ID
            </Form.Label>
            <Search query={query} setQuery={setQuery} />
          </Col>

          {/* <Col className='my-1'>
            <Button type='submit'>Search</Button>
          </Col> */}
        </Row>
      </Form>

      <Button>Select from Roster</Button>

      <EmployersList />

      <span className='pb-4'>Showing results for "{query}"</span>

      <Card className='search-result'>
        <Card.Body>
          <Card.Title className='my-2'>
            Elite School of Book Learnin' NM
          </Card.Title>

          {/* contact person */}
          <div className='my-4'>
            <Card.Subtitle className='my-2'>
              <em>Jane K. Doe</em>
            </Card.Subtitle>
            <div className='contact-info d-flex gap-4'>
              <ul className='ps-4'>
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
                <li>
                  <span className='text-muted'>Fax:</span> 505-555-0123
                </li>
              </ul>
              <div>
                <span className='text-muted'>Physical Address</span>
                <ul className='ps-4'>
                  <li>111 Somewhere Ln</li>
                  <li>Nowhereland, UM 00000</li>
                </ul>
              </div>
              <div>
                <span className='text-muted'>Mailing Address</span>
                <ul className='ps-4'>
                  <li>P.O. BOX 123987</li>
                  <li>Nowhereland, UM 00000</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='my-4'>
            <Card.Subtitle className='my-2'>
              <em>James Tho</em>
            </Card.Subtitle>
            <div className='contact-info d-flex gap-4'>
              <ul className='ps-4'>
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
                <li>
                  <span className='text-muted'>Fax:</span> 505-555-4567
                </li>
              </ul>
              <div>
                <span className='text-muted'>Physical Address</span>
                <ul className='ps-4'>
                  <li>111 Somewhere Ln</li>
                  <li>Nowhereland, UM 00000</li>
                </ul>
              </div>
              <div>
                <span className='text-muted'>Mailing Address</span>
                <ul className='ps-4'>
                  <li>P.O. BOX 123987</li>
                  <li>Nowhereland, UM 00000</li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

function EmployersList() {
  const listItems = employers.map((employer) => (
    <li key={employer.distID}>
      {employer.distID < 100 ? `0${employer.distID}` : employer.distID} -{" "}
      {employer.school}
    </li>
  ));
  return <ul>{listItems}</ul>;
}

function Search({ query, setQuery }) {
  return (
    <div>
      <input
        id='inlineFormInputName'
        className='form-control'
        type='text'
        placeholder='Search for...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        className='btn btn-primary my-2'
        type='submit'
        onClick={(e) => {
          e.target.preventDefault();
          console.log("search was clicked");
        }}
      >
        Search
      </button>
    </div>
  );
}

export default App;
