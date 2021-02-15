import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getURL } from './../helpers';


export const Header = () => {
    const loggedIn = sessionStorage.getItem('loggedIn');
    const { name } = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : { name: ''};
    const history = useHistory();
    const onClick = async () => {
        try {
          await fetch(`http://localhost:4000/logout`);
          sessionStorage.clear();
          window.location.href='/login';
    
        } catch(error) {
    
        }
      }
    return (
    <header className="App-header">
            {loggedIn ? <Link to="/book"> <button type="button" > Zarezerwuj termin </button> </Link> : null}
    {loggedIn ? <Link to="/reject"><button type="button" > Odwołanie rezerwacji </button>  </Link> : null}
    {loggedIn ? <Link to="/my"> <button type="button" > O nas </button></Link> : null}
    {loggedIn ? <Link to="/contact"> <button type="button" > Kontakt </button> </Link> : null}
    {loggedIn ? <Link to="/sale"> <button type="button" > Cennik </button> </Link> : null}
    {loggedIn ? <div className="account">{`Hello ${name}`}</div> : null}
    {loggedIn ? <button type="button"><Link to="/me"> Konto użytkownika</Link> </button> : null}
    {loggedIn  ? <button type="button"><Link to="/list"> Lista użytkowników</Link> </button> : null}
    {loggedIn ? <button type="button" onClick={onClick} > Wyloguj </button> : null}
    {loggedIn ? null : <Link to="/register"> <button> Rejestracja </button> </Link>}
    {loggedIn ? null : <Link to="/login"> <button> Logowanie </button> </Link>}
    </header>
    );
}