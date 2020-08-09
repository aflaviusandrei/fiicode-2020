import React, { useEffect } from 'react';
import { Router } from 'translations';

import Login from '../Login/Login';
import axios from 'axios';

const Verify = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    (async () => {
      if (!token) return;
      // sugi pl
      try {
        await axios.patch(`/verify/?token=${token}`);
        Router.push('/login?status=verified');
      } catch (e) {
        Router.push('/login?status=' + e.response.data.message);
      }
    })();
  }, []);
  return <Login />;
};

export default Verify;
