import React from 'react';
import obrazek from '../scissors-1297454_1280.webp';


const Me = () => {
return(
<div className="me">
<h1> Nasz salon fryzjerski cieszy się długoletnią tradycją i jest obecny na rynku od prawie 20 lat. Nasze atuty to przede wszystkim długoletnie doświadczenie z nastawieniem na innowacje i zmieniające się trendy w modzie i stylizacji. Każdy klient jest u nas traktowany, ze szczególną troską a panująca w salonie atmosfera pozwala na odprężenie i relaks w rękach specjalistów.</h1>
<h2>Godziny otwarcia: 10:00-18:00</h2>
<img src={obrazek} width="40%" alt="obrazek"></img>
</div>
)
}




export default Me;