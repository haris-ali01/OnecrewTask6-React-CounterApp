// CounterApp.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Declaring state varible
function CounterApp() {
  const [count, setCount] = useState(0);

//Event Handling
  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };


//Front UI
  return (
    <div className="vh-100 text-center d-flex align-items-center justify-content-center bg-warning flex-column">

      <h1 className='fs-1 fw-bold text-dark'>Counter App</h1>

    <div className="container mt-5 w-50 p-5 h-50 text-center border rounded-4 bg-light">

        <p className="fs-1 mt-3 fw-medium text-danger mb-5">{count}</p>

        <button className="btn btn-success me-5 mt-5 fs-4 w-25" onClick={handleIncrement}>
          +1
        </button>
        
        <button className="btn btn-danger ms-5 mt-5 fs-4 w-25" onClick={handleDecrement}>
          -1
        </button>
    </div>
    </div>
  );
}

export default CounterApp;
