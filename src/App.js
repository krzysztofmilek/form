import React, { useState } from 'react';
const fs = require('fs');

function App() {
  const [formData, setFormData] = useState({
    imie: '',
    nazwisko: '',
    miejscowosc: '',
  });



  return (
    <div className="App">
      <form>
        <label>
          Imię:
          <input type="text" name="imie" />
        </label>
        <br />
        <label>
          Nazwisko:
          <input type="text" name="nazwisko"  />
        </label>
        <br />
        <label>
          Miejscowość:
          <input type="text" name="miejscowosc" />
        </label>
        <br />
        <label>
          Miejscowość:
          <input type="text" name="miejscowosc" />
        </label>
        <br />
        <button type="button" >
          Zapisz
        </button>
      </form>
    </div>
  );
}

export default App;