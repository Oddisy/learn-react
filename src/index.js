import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppCard from './AppCard'
import AppButton from "./AppButton"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
   <>
   <AppButton />
      <AppCard />
      </>
);

