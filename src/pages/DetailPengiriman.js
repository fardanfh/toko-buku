import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const DetailPengiriman = () => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    kota: "",
    kodePos: "",
    telepon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here
    console.log(formData);
    // Redirect to confirmation page or perform further actions
  };

  return (
    <div className="container mt-4">
      <h2>Detail Pengiriman</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="nama">
          <Form.Label>Nama</Form.Label>
          <Form.Control type="text" name="nama" value={formData.nama} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="alamat">
          <Form.Label>Alamat</Form.Label>
          <Form.Control type="text" name="alamat" value={formData.alamat} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="kota">
          <Form.Label>Kota</Form.Label>
          <Form.Control type="text" name="kota" value={formData.kota} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="kodePos">
          <Form.Label>Kode Pos</Form.Label>
          <Form.Control type="text" name="kodePos" value={formData.kodePos} onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="telepon">
          <Form.Label>Telepon</Form.Label>
          <Form.Control type="text" name="telepon" value={formData.telepon} onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" style={{ marginTop: "20px" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default DetailPengiriman;
