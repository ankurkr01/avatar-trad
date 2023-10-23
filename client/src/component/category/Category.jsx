import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../style/categoryStyle/styles.css"
import "../../style/categoryStyle/header.css"
import Navbar from "../home/Navbar"



const Category = () => {
  return (
    <div className="container">
   
         




<div className='category-name'>
  <h1>Popular Categories</h1>
</div>



<div className='category-img row'>
<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/1.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>

<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/2.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>

<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/7.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>

<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/4.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>
<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/4.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>
<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/4.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>
<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/4.jpg" className="card-img-top w-100" alt="..."/>

</div>
</div>

<div className="col-3 overflow-hidden mb-4 mb-2">
<div className="card card-body w-100 m-0" >
  <img src="images/6.jpg" className="card-img-top w-100" alt="..."/>
  {/* <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div> */}
</div>
</div>



</div>







   

  </div>
  );
}

export default Category;
