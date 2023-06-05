import React, { useState, useEffect } from 'react';
import './Import.css'

const Import = () => {
  const [title, set_title] = useState('');
  const [amount, set_amount] = useState(0);
  const [company, set_company] = useState('');
  const [national, set_national] = useState('');
  const [book, set_book] = useState([]);

  const handle_adding_books = async (e) => {
    e.preventDefault();
    let result = await fetch(
      'http://localhost:5000/add_books_to_cart', {
      method: "post",
      body: JSON.stringify({ title, amount, company, national }),
			headers: {
				'Content-Type': 'application/json'
			}
    }) 
    console.log(result)
    result = await result.json();
    console.warn(result);
    if (result) {
      alert("Data saved succesfully");
      set_amount(0);
      set_company("");
      set_national("");
      set_title("");
      Handle_show_books();
    }
  }

  const Handle_show_books = async (e) => {
    let result = await fetch(
      'http://localhost:5000/show').then(response => {
        return response.json()
      }).then(data => {
        set_book(data)
      })  
      if(result) {
        console.log('The available books')
      }
    }

    useEffect(() => {
      Handle_show_books()
    }, [])

    const Handle_request_to_import_book = async (e) => {
      e.preventDefault();
      let result = await fetch(
        'http://localhost:5000/send_requests_to_buy_book', {
        method: "post",
        body: JSON.stringify({ title, amount, company, national }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(result)
      result = await result.json();
      console.warn(result);
      if (result) {
        alert("Sented request to import books");
        Handle_show_books();
      }
    }


    return (
      <div className='splitScreen'>
        <div className='left'>
          <h2>Import Books</h2>
          <form className="import-form">
            <label>
              Title:
              <input
                type="text"
                value={title}
                onChange={(e) => set_title(e.target.value)}
              />
            </label>

            <label>
              Amount:
              <input
                type="number"
                value={amount}
                onChange={(e) => set_amount(e.target.value)}
              />
            </label>

            <label>
              Company:
              <input
                type="text"
                value={company}
                onChange={(e) => set_company(e.target.value)}
              />
            </label>

            <label>
              National:
              <input
                type="text"
                value={national}
                onChange={(e) => set_national(e.target.value)}
              />
            </label>

            <label>
              Title:
              <input
                type="file"
              />
            </label>

            <button type="submit" onClick={handle_adding_books}>Import</button>

          </form>
        </div>

        <div className='right'>
          <table className="custom-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Amount</th>
                <th>National</th>
                <th>Company</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {book.map(book_detail => (
							<tr>
							<th key={book_detail.id}>{book_detail.title}</th>
							<th key={book_detail.id}>{book_detail.amount}</th>
              <th key={book_detail.id}>{book_detail.national}</th>
							<th key={book_detail.id}>{book_detail.company}</th>
              <th key={book_detail.id}>{book_detail.time}</th>

							</tr>
						))}
            </tbody>
          </table>
          <form>
          <button type="submit" onClick={Handle_request_to_import_book}>Import</button>
          </form>
        </div>

      </div>
    );
};

  export default Import;
