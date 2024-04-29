import React from "react" 
import './shop.css'
import man from'../../assets/man.jpg'
import baby from'../../assets/baby.jpg'
import blackskirt from '../../assets/blackskirt.jpg'
import couple from '../../assets/couple.jpg'
import promdress from '../../assets/promdress.jpg'
import wedding from '../../assets/wedding.jpg'
import whitesuit from '../../assets/whitesuit.jpg'

const Shop = () => {
    return ( 
        <section className="shop">
<div className="content">
<div className="navbar">
<h1>SHOP</h1>
<div className="nav">
    <ul>
        <li><a href="">Home</a></li>
       <li id="all"><a href="">All</a></li>
        <li><a href="">Men</a></li>
        <li><a href="">Women</a></li>
        <li><a href="">Child</a></li>
        <li><a href="">Wedding</a></li>
    </ul>
</div>
</div>


<div className="body"> 
<img src={man} alt="" />
 
 <div>
<div className="row1">
    <div>  <img src={promdress}  alt="" sizes="2%" /> <p>Promdress</p> <p>100,000rwf</p></div>
    <div id="skirt"> <img src={blackskirt} alt="" /> <p>skirts</p> <p>40,000rwf</p></div>
    <div><img src={whitesuit} alt="" /><p>Whitesuit</p> <p>120,000rwf</p></div>
</div>

<div className="row2">
    <div id="baby"> <img src={baby} alt="" /><p>Baby dress</p> <p>80,000rwf</p></div>
    <div id="wedding"> <img src={wedding}alt="" /><p>wedding dress</p><p>200,000rwf</p></div>
    <div id="couple"><img src={couple} alt="" /><p>Couple complete</p> <p>80,000rwf</p></div>
</div>
</div>
</div>


</div>
        </section>
    
     )
}
export default Shop



