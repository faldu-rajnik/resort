import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Contact = () =>  (
    <div>
      <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validate={values => {
          const errors = {};
          if (!values.name) {
            errors.name = 'Required';
          }
          if (!values.message) {
            errors.message = 'Required';
          }
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        
        onSubmit={(values, { setSubmitting,resetForm  }) => {
            
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
                resetForm();
            
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
    <section className="question" id="contact" >
        <div className="container">
            <h2>HAVE A QUESTION?</h2>
            <form  id="form_question" autoComplete="off" noValidate="novalidate" onSubmit={handleSubmit}>
                <div className="form_grp">
                    <input type="text"
                            name="name"
                            placeholder='Full Name'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}/>
                             <ErrorMessage name="name" component="div" className='error'/>
                </div>
                <div className="form_grp">
                    <input  type="email"
                            name="email"
                            placeholder='Enter Email'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}/>
                             <ErrorMessage name="email" component="div" className='error'/>
                </div>
                <div className="form_grp">
                    <textarea  name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder="Message"
                                value={values.message}></textarea>
                                  <ErrorMessage name="message" component="div" className='error' />
                </div>
                <div className="form_grp">
                    <button type="submit" className="btn-primary form-submit" disabled={isSubmitting}>SUBMIT</button>
                </div>
            </form>
            </div>
            </section>
            )}
        
           
            </Formik>
   </div>

);

export default Contact;