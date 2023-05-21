import React, { useState } from 'react';
import './Import.css'

const Import = () => {
  const [importUrl, setImportUrl] = useState('');

  const handleImport = (event) => {
    event.preventDefault();

    // Add your logic for handling the import functionality using the importUrl state value
    console.log('Importing books from URL:', importUrl);
    
    // Clear the input field after import
    setImportUrl('');
  };

  const handleUrlChange = (event) => {
    setImportUrl(event.target.value);
  };

  return (
    <div className='splitScreen'>
    <div className='import-container'>
      <h2>Import Books</h2>
      <form onSubmit={handleImport} className="import-form">
      <label>
          Title:
          <input
            type="text"
          />
        </label>

        <label>
          Amount:
          <input
            type="number"
          />
        </label>

        <label>
          Company:
          <input
            type="text"
          />
        </label>

        <label>
          National:
          <input
            type="text"
          />
        </label>

        <label>
          Title:
          <input
            type="file"
          />
        </label>

        <button type="submit">Import</button>
      </form>
    </div>  

    <div className='table-container'>

    <table className="custom-table">
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
        </tr>
        {/* Add more table rows and data as needed */}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default Import;
