import React from "react";
import { Card, CardGroup, Button } from "react-bootstrap";
import dataLifestyle from "../data/dataLifestyle";
import { Link } from 'react-router-dom';

const Lifestyle = () => {
  return (
    <div>
      <h2 className="text-center mb-4">Lifestyle</h2>
      {Object.keys(dataLifestyle).map((category) => (
        <div key={category}>
          <h3>{category}</h3>
          <CardGroup>
            {dataLifestyle[category].map((book) => (
              <Card key={book.id}>
                <Card.Img
                  variant="top"
                  src={book.image}
                  style={{ objectFit: "contain", maxHeight: "200px" }}
                />
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <Card.Text>{book.deskripsi}</Card.Text>
                  <Card.Text>Rp {book.harga}</Card.Text>
                  <Card.Text>Stok: {book.stok}</Card.Text>
                  <Link  to={`/product/${book.id}`} className="custom-link">
                    <Button variant="primary">Lihat Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
          <div className="mt-4"></div>
        </div>
      ))}
    </div>
  );
};

export default Lifestyle;
