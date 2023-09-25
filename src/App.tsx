import { FC } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import { Field, Formik } from 'formik';
import * as Yup from 'yup';
import Channel from './components/Channel';
import Optimizer from './components/Optimizer';
import Tab from './components/TabButton';
import Sales from './components/sales';
import Scenario from './components/Scenario';
import Zone from './components/Zone';
import Month from './components/Month';
import ApplicationForm from './components/ApplicationForm';
export const App: FC<{ name: string }> = ({ name }) => {
  return (
    <>
      <Tab />
      <Optimizer />
      <Sales />
      <Month />
      <Scenario />
      <Channel />
      <Zone />
      <ApplicationForm />
      <br />
      
    </>
  );
};
