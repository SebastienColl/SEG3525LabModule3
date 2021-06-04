import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import { Product } from '../App';

interface CartComponentProps {
    cart: Product[];
}

const CartComponent: React.FC<CartComponentProps> = ({cart}) => {

  return (
    <Col className="mt-3 ml-3">
        <Row>
            <h3>Panier</h3>
        </Row>
        <br/>

        <Table>
            <thead>
                <tr>
                    <th>Nom du produit</th>
                    <th>Prix</th>
                </tr>
            </thead>
            <tbody>
                {cart.map(p => {
                    return (<tr>
                        <td>{p.name}</td>
                        <td>{p.price}$</td>
                    </tr>)
                })}
            </tbody>
        </Table>
        
        <Row>
            <h3>Prix total: {cart.reduce((a, b) => a + b.price, 0).toFixed(2)}$</h3>
        </Row>
    </Col>
  );
}

export default CartComponent;
