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
 */

import React from 'react'
import ReactDOM from 'react-dom/client';
import { initialize } from '../../utils/entry'

import { push } from '../../utils/route'


const Home = () => {
  const handleNext = () => {
    push('/login').then(args => {
      debugger
    }).catch(error => {
      debugger
    })
  }

  return (
    <div onClick={handleNext}>I am the Home page .</div>
  )
}

initialize(Home)