import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'

import { Navbar } from './components/Navbar.jsx';
import { Hero } from './components/Hero.jsx';
import { Philosophy } from './components/Philosophy.jsx';
import { Workbench } from './components/Workbench.jsx';
// import { TechStack } from './components/TechStack.jsx';
import { FeaturedWork } from './components/FeaturedWork.jsx';
import { Playground } from './components/Playground.jsx';
import { Currently } from './components/Currently.jsx';
import { Contact } from './components/Contact.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Philosophy/>
    <Workbench/>
    {/* <TechStack/> */}
    <FeaturedWork/>
    <Playground/>
    <Currently/>
    <Contact/>
    <Footer/>
    </>
  )
}