import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: 'aaa',
  //     lastName: '',
  //     email: '',
  //     checked: [],
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(15, 'Must be 15 characters or less')
  //       .required('Required'),
  //     lastName: Yup.string()
  //       .max(20, 'Must be 20 characters or less')
  //       .required('Required'),
  //     email: Yup.string().email('Invalid email address').required('Required'),
  //     checked: Yup.array().min(1).required('Please select at least one'),
  //   }),
  //   onSubmit: (values) => {
  //     alert(JSON.stringify(values, null, 2));
  //   },
  // });
  return (
    <>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', checked: [] }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required2'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required1'),
          email: Yup.string()
            .email('Invalid email address')
            .required('Required3'),
          checked: Yup.array().min(1, 'slect one').required('hhah'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
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
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
};
