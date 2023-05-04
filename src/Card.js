import React from 'react'

function Card() {
  return (<>
    <h1>Our Services</h1>
    <div class="margin">
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <img src="./images/fooding.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Fooding</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <img src="./images/lodging.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Lodging</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <img src="./images/Gym.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Gym</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100 d-flex flex-column">
      <img src="./images/bar.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Bar</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>
  <div class="col">
  <div class="card h-100 d-flex flex-column">
    <img src="./images/swimming_pool.jpg" class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Swimming Pool</h5>
      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
    </div>
  </div>
</div>
<div class="col">
<div class="card h-100 d-flex flex-column">
  <img src="./images/laundry.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Laundry</h5>
    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
  </div>
</div>
</div>

</div>

    </div>
    </>
  )
}

export default Card