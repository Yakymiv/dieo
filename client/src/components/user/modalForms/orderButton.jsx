import React from 'react';
import { Row, Button, Col } from 'react-bootstrap';

const OrderButton = ({ myClick }) => <Row className="mb-4 justify-content-md-center"><Col sm={4}><Button variant="info" size="lg" block onClick={myClick}>Зробити заказ</Button></Col></Row>;

export default OrderButton;