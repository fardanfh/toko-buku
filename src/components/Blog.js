import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const Blog = ({ image, title, content }) => {
  return (
    <Card>
      <CardImg top src={image} alt={title} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  );
};

export default Blog;
