import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
 
import { FiShoppingBag } from 'react-icons/fi';
import './style.css';
 
import logo from '../../assets/book.png';
 
export default function Header() {;
  const cart = useSelector(state =>
    state.cart.map(book => ({
      ...book,
      subtotal: book.price * book.amount
    }))
  );

  let calcTotal = cart.reduce((sum, book) => {
    return sum + book.amount;
  }, 0);  
  
 return (
   <header className="header">
     <Link to="/" className="logo">
       <img className="logo-icon" src={logo} alt="Rocketshoes" />
       <span className="logo-text">Books</span>
     </Link>
 
     <Link to="/cart" className="header-cart">
       <div>
         <strong>Sacola</strong>
         <span>         
           <strong>{calcTotal}</strong> livros
         </span>
       </div>
       <FiShoppingBag size={36} color="#FFF" />
     </Link>
   </header>
 );
}