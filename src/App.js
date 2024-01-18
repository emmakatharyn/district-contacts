import { React, useState } from "react";
import "./App.css";

import employers from "./employers";

// regular bootstrap (not react bootstrap)
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className='App m-2'>
      <Header />
      <hr />

      <form className='my-4'>
        <div className='align-items-center'>
          <label htmlFor='inlineFormInputName' className='text-muted'>
            Enter a district name or ID
          </label>
          <Search query={query} setQuery={setQuery} />
        </div>
      </form>

      <button
        className='btn btn-primary'
        onClick={() => console.log("selected roster list")}
      >
        Select from Roster
      </button>

      <EmployersList />

      <span className='pb-4'>Showing results for "{query}"</span>

      <div className='search-result'>
        <h2 className='my-2'>Elite School of Book Learnin' NM</h2>

        {/* contact person */}
        <div className='my-4'>
          <h3 className='my-2'>
            <em>Jane K. Doe</em>
          </h3>
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
          <h3 className='my-2'>
            <em>James Tho</em>
          </h3>
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
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className='header'>
      <img
        className='brand'
        src='https://nmpsia.com/images/NMPSIA-Logo-transparent-2023.png'
        alt='nmpsia logo'
      />
      <h1>NMPSIA Participating Employer Contact Database</h1>
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
