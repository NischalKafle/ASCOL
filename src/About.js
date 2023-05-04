
import React from 'react'

function About() {
  return (
    <>
    <section id="about-info" className="bg-light py-3">
    <div className="container">
        <div className="info-left">
            <h1 className="l-heading"><span class="text-primary">About</span> Hotel XYZ</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto doloribus vitae qui earum sed
                quae, neque eum quia repellendus consequuntur! Fugiat, accusamus repudiandae porro dicta veritatis
                ducimus ab rem culpa?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum dolorem expedita omnis suscipit
                repellat ipsa possimus tenetur? Tempora, aliquid.</p>
        </div>
        <div class="info-right">
            <img src="./images1/photo-2.jpg" alt="Hotel "/>
        </div>
    </div>
    </section>
    
    <div class="clr"></div>
    
    <section id="testimonials" className="py-3">
    <div className="container">
        <h2 className="l-heading">What Our Guests Say</h2>
        <div className="testimonial bg-primary">
            <img src="./images1/person-1.jpg" alt="Kritan"/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum maxime incidunt praesentium
                doloremque velit similique numquam magni eum rem ad eligendi consectetur quam eveniet impedit
                molestias assumenda debitis tenetur quas corporis, expedita necessitatibus! Dolore ut suscipit
                voluptatibus voluptatem explicabo perferendis!</p>
        </div>
        <div className="testimonial bg-primary">
            <img src="./images1/person-2.jpg" alt="Dipesh"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aliquam quia architecto ea dolore nihil
                id enim aspernatur expedita. Optio illo rem adipisci quia suscipit iste distinctio earum repellendus
                doloremque architecto! Voluptates illo libero fuga, vero temporibus fugiat alias corrupti.</p>
        </div>
    </div>
    </section>
    </>
    
  )
}

export default About

