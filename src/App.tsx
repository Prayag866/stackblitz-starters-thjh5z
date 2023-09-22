import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      {/* we are storing values here getFieldsprop value passed  */}
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          checked: [],
          picked: '',
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required firstName'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required lastName'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required Email'),
          checked: Yup.array().min(1, 'select one').required(''),
          picked: Yup.string()
            .min(1, 'Please select at one value')
            .required('Please select at one value'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {/* Here we are using  Formik to display error and checking touched property and */}
        {(formik) => (
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              {...formik.getFieldProps('firstName')}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div>{formik.errors.firstName}</div>
            ) : null}
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              {...formik.getFieldProps('lastName')}
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div>{formik.errors.lastName}</div>
            ) : null}
            <br />
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" {...formik.getFieldProps('email')} />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <div id="checkbox-group">Checked</div>
            <div role="group" aria-labelledby="checkbox-group">
              <label>
                <Field type="checkbox" name="checked" value="One" />
                One
              </label>
              <label>
                <Field type="checkbox" name="checked" value="Two" />
                Two
              </label>

              <label>
                <Field type="checkbox" name="checked" value="Three" />
                Three
              </label>
              {formik.touched.checked && formik.errors.checked ? (
                <div>{formik.errors.checked}</div>
              ) : null}
              <br />
            </div>

            <div id="my-radio-group">Picked</div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="picked" value="One" />
                One
              </label>
              <label>
                <Field type="radio" name="picked" value="Two" />
                Two
              </label>
              <div>Picked: {formik.values.picked}</div>
            </div>
            {formik.touched.picked && formik.errors.picked ? (
              <div>{formik.errors.picked}</div>
            ) : null}
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};
