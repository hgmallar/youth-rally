import app from 'firebase/app';

const config = {
    clientIdSandbox: process.env.REACT_APP_PAYPAL_CLIENT_ID_SANDBOX,
    secretSandbox: process.env.REACT_APP_PAYPAL_SECRET_SANDBOX,
    clientIdProduction: process.env.REACT_APP_PAYPAL_CLIENT_ID_PRODUCTION,
    secretProduction: process.env.REACT_APP_PAYPAL_SECRET_PRODUCTION,
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
    }
  }
   
  export default Firebase;