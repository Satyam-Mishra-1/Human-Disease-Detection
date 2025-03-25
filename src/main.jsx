import React from "react";
import ReactDom from 'react-dom/client'
import {BrowserRouter as Router } from 'react-router-dom';

import App from './App'

import './index.css'

import {PrivyProvider} from '@privy-io/react-auth';
import { StateContextProvider } from "./context";

const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <PrivyProvider
      appId="cm0vz2df9005l11bclz9mdx6z"
      config={{
        // Display email and wallet as login methods
        //  loginMethods: ['email', 'wallet'],
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
        //   accentColor: '#676FFF',
        //   logo: 'https://your-logo-url',

        },

        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >

      <Router>
        <StateContextProvider>
          <App /> 
        </StateContextProvider>
           
      </Router>  
    
    </PrivyProvider>
)