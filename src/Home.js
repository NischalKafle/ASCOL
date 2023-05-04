import React from 'react'

function Home() {
  return (
    
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="./images/Location.jpg" class="d-block w-100" id="img-height" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 id="bold">LOCATION</h5>
          <p id="dark">Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/telephone.jpg" class="d-block w-100" id="img-height" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 id="bold">CONTACT NUMBER</h5>
          <p id="dark">9841568945</p>
       

        </div>
      </div>
      <div class="carousel-item">
        <img src="./images/awards.jpg" class="d-block w-100" id="img-height" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5 id="bold">AWARDS AND RECOGNITION</h5>
          <p id="dark">Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  
  )
}

export default Home