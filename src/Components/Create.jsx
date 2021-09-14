import React, { useState } from 'react';

const Create = () => {
  return (
    <div className="Create" style={{ padding: '10%'}}>
      <div className="card border-dark mb-3" style={{width: '18rem'}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
              <div className="mb-3">
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
            <button type="button" className="btn btn-outline-dark" style={{width:'100%'}}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default Create;