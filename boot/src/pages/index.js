import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const IndexPage = () => (
  <div>
    {/* Navigation */}
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="logoENSET1.png" alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#account">Accueil</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#contacts">Contacts</a></li>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Recherche" />
          </ul>
        </div>
      </div>
    </nav>

    {/* Carousel */}
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://picsum.photos/1200/200" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        {/* Autres éléments du carousel ici */}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

    {/* Cards Section */}
    <div className="container mt-4">
      <div className="row">
        <div className="col-12 col-md-4 mb-4">
          <div className="card">
            <img src="https://picsum.photos/1200/200?1233" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card Title 1</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        {/* Autres cartes ici */}
      </div>
    </div>

    {/* Equipe Section */}
    <div className="container mt-4">
      <h2 className="text-center mb-4">Équipe</h2>
      <div className="row">
        <div className="col-12 col-md-4">
          <div className="card">
            <img src="pic1.jpg" className="card-img-top" alt="Membre 1" />
            <div className="card-body text-center">
              <h5 className="card-title">Nom du Membre 1</h5>
              <p className="card-text">Description brève du rôle de Membre 1, ses compétences et sa contribution au projet.</p>
            </div>
          </div>
        </div>
        {/* Autres membres de l'équipe ici */}
      </div>
    </div>

    {/* Google Map Embed */}
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col-12 col-md-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18..."
            width="650"
            height="300"
            style={{ border: "3px solid #ccc", borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="col-12 col-md-4">
          <h4>Contactez-nous</h4>
          <p><i className="fas fa-map-marker-alt"></i> <strong>Adresse :</strong> ENSET Mohammedia, Maroc</p>
          <p><i className="fas fa-phone-alt"></i> <strong>Téléphone :</strong> +212 5 22 45 67 89</p>
          <p><i className="fas fa-envelope"></i> <strong>Email :</strong> contact@enset.ma</p>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
