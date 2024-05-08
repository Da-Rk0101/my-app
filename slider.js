function Slider(){
    return(
        <>
  <div id="carouselExample" className="carousel slide"/>
     <div className="carousel-inner">
        <div className="carousel-item active">
        <img src="https://th.bing.com/th/id/OIP.rpO5YvtHipknB7PwMvwyAQHaEl?w=298&h=185&c=7&r=0&o=5&pid=1.7" className="d-block w-100" alt="..."/>
        </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.g3xcOGZJ9u85ZzBzGU1yPgHaDT?w=313&h=156&c=7&r=0&o=5&pid=1.7" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://th.bing.com/th/id/OIP.eaa7x1UHUYXdh2LPcTlRygHaEk?rs=1&pid=ImgDetMain" className="d-block w-100" alt="..."/>
    </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       
       </>

    );
}

export default Slider;