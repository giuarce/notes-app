import React from 'react';
import { Formik, Form } from 'formik';
import axios from 'axios';

const Create = () => {

  const postNotes = async (notes)=>{
    await axios.post('http://localhost:8002/notes', notes)
  }

  return (
    <div className="Create" style={{ padding: '10%'}}>
      <Formik
        initialValues={{
          title: '',
          description: ''
        }}
        onSubmit={(values, actions) => {
          postNotes(values);
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {
          props => (
            <Form>
            <div className="card border-dark mb-3" style={{width: '18rem'}}>
              <div className="card-body">
                <h5 className="card-title">Nueva nota</h5>
                    <div className="mb-3">
                      <input type="text" className="form-control" name='title' value={props.values.title} onChange={props.handleChange} />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='description' value={props.values.description} onChange={props.handleChange} ></textarea>
                    </div>
                  <button type="submit" className="btn btn-outline-dark" style={{width:'100%'}}>Save</button>
              </div>
            </div>
            </Form>
          )
        }

      </Formik>
    </div>
  );
}

export default Create;