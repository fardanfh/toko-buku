import React from "react";
import { Carousel, Card, Button, CardGroup } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import dataBuku from "../data/dataBuku";
import dataBlog from "../data/dataBlog";
import Blog from "../components/Blog";
import dataComingSoon from "../data/dataComingSoon";
import { Link } from "react-router-dom";







const Beranda = () => {
  const carouselRef = React.useRef(null);
  const handlePrevSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  }
  
  const handleNextSlide = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
  return (
    <div>
        <h2>Top Seller</h2>
      <Carousel style={{ marginBottom: "5rem" }} ref={carouselRef} prevIcon={<FaChevronLeft />} nextIcon={<FaChevronRight />}>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFA-RzZ7KM97QDKeteysMVpy3jfuYcVD-ycA&usqp=CAU"
            alt="Slide 1"
            
            
          />
          
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://img.my-best.id/content_section/beforehand_tips/c52151fa97e8c07545bd2b822a2f2e26.jpeg?ixlib=rails-4.3.1&q=70&lossless=0&w=690&fit=max&s=f18cf0cf7f2b7f31cca3a7e098578183"
            alt="Slide 2"
          />
          <div className="carousel-buttons-container">
              
            </div>
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 carousel-image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9O8Sba-dAU_jCpbDe-UainMNY1yQnAa_XQ&usqp=CAU"
            alt="Slide 3"
          />
          <div className="carousel-buttons-container">
              
            </div>
          <Carousel.Caption>
       
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      

      <h2 className="mt-4">Just Arrived</h2>
      <CardGroup className="my-3">
      {dataBuku.map((buku) => (
  <Card key={buku.id} style={{ width: "12rem" }}>
    <Link  to={`/product/${buku.id}`} className="custom-link">
      <Card.Img variant="top" src={buku.image} style={{ height: "10rem", objectFit: "contain" }} />
      <Card.Body>
        <Card.Title>{buku.title}</Card.Title>
        
          <Card.Text>Penerbit: {buku.publisher}</Card.Text> {/* Tambahkan informasi publisher */}
         
        <Card.Text>{buku.deskripsi}</Card.Text>
        <Card.Text>Rp {buku.harga}</Card.Text>
        <Card.Text>Stok: {buku.stok}</Card.Text>
        <Button variant="primary">Lihat Detail</Button>
      </Card.Body>
    </Link>
  </Card>
))}
      </CardGroup>
      <h2 className="mt-4">Coming Soon</h2>
      <CardGroup className="my-3">
        {dataComingSoon.map((buku) => (
          <Card key={buku.id} style={{ width: "12rem" }}>
            <Card.Img variant="top" src={buku.imageUrl} style={{ height: "10rem", objectFit: "contain" }} />
            <Card.Body>
              <Card.Title>{buku.title}</Card.Title>
              <Card.Text>{buku.deskripsi}</Card.Text>
              <Card.Text>Rp {buku.harga}</Card.Text>
              
              <Button variant="primary">Lihat Detail</Button>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
      <h2>Blog Terbaru</h2>
      <CardGroup className="my-3">
        {dataBlog.map((blog) => (
          <Card key={blog.id} style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src={blog.image}
              style={{ height: "10rem", objectFit: "contain" }}
            />
            <Card.Body>
              <Card.Title>{blog.title}</Card.Title>
              <Card.Text>{blog.content}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
   
    </div>
    
  );
};

export default Beranda;
