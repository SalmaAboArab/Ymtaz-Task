import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Searchbar({getlist}) {

  const debounce = (func, delay) => {
    let debounceTimer;
    return function () {
        const context = this;
        const args = arguments;
        clearTimeout(debounceTimer);
        debounceTimer = 
            setTimeout(() => func.apply(context, args), delay);
    }
}
  return (
    <div className='mt-5'>
      <Form className="d-flex w-50 mx-auto">
            <Form.Control
              type="search"
              placeholder="ابحث بالاسم"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>debounce(getlist(e.target.value),500)}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
    </div>
  )
}
