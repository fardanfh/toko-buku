import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import dataBuku from "../data/dataBuku";
import dataLifestyle from "../data/dataLifestyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const ProductDetail = () => {
  const { id } = useParams();
  const product = dataBuku.find((buku) => buku.id === parseInt(id)) || dataLifestyle.Hot.find((item) => item.id === parseInt(id)) || dataLifestyle.Hot.find((item) => item.id === parseInt(id))

  if (!product) {
    return <div>Product not found.</div>;
  }

  const renderRating = () => {
    if (product.rating && product.rating > 0) {
      const ratingStars = [];
      for (let i = 0; i < Math.round(product.rating); i++) {
        ratingStars.push(<FaStar key={i} />);
      }
      return ratingStars;
    }
    return null;
  };

  return (
    <div className="container mt-4">
      <Card>
        <Row>
          <Col md={4}>
            <Card.Img variant="top" src={product.image} alt={product.title} style={{ objectFit: "contain" }} />
          </Col>
          <Col md={8}>
            <Card.Body>
              <div className="d-flex justify-content-end align-items-center mb-3">
                <GiAirplaneDeparture size={24} style={{ marginRight: "0.5rem" }} />
                <span>Perkiraan Pengiriman: 3-5 hari kerja</span>
              </div>
              <Card.Title>{product.title}</Card.Title>
              <p>Tanggal Rilis: {product.releaseDate}</p>
              <p>Penulis: {product.author}</p>
              <p>Penerbit: {product.publisher}</p>
              <Card.Text>{product.deskripsi}</Card.Text>
              <Card.Text>Rating: {renderRating()}</Card.Text>
              <Card.Text>Harga: Rp {product.harga}</Card.Text>
              <p>Stok: {product.stok}</p>
              <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary">Add to Cart</Button>
                <div className="d-flex">
                  <Button variant="secondary" className="ml-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="secondary" className="ml-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="secondary" className="ml-2">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProductDetail;
