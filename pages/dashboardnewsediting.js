import React,{useEffect} from 'react';
import DashboardNewsEditing from 'templates/Dashboard/Components/DashboardNewsEditing/DashboardNewsEditing';
import Dashboard from '../templates/Dashboard/Dashboard';
import Router from 'next/router';

export default () => {
  useEffect(()=>{
    Router.push('/');
  });
  return (
  <Dashboard>
    <DashboardNewsEditing/>
  </Dashboard>);
};