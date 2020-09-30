import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Products from './components/Products'
import Categories from './components/Categories'
import SimpleCart from './components/SimpleCart';

function App() {
  return (
    <>
    <Header />
    <SimpleCart />
    <Categories />
    <Products />
    <Footer />
    </>
  );
}

export default App;
