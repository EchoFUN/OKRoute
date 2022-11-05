/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

import React from 'react'
import Route from './route'

const render = route => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      {
        route.component
      }
    </React.StrictMode>
  );
}

export const initialize = async () => {
  let instanceRoute = new Route({
    render,
    wrapApp
  })





}


