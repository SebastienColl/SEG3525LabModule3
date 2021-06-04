import React from 'react';
import { Accordion, Button, Card, Col, Row } from 'react-bootstrap';
import { Product } from '../App';
import ProductCardComponent from './ProductCard';

interface ProductsComponentProps {
    products: Product[];
    cart: Product[];
    filters: string[];
    organicPreference: boolean;
}

const ProductsComponent: React.FC<ProductsComponentProps> = ({products, cart, filters, organicPreference}) => {
    console.log(filters)
    console.log(organicPreference)

    const filteredProducts = products.filter(prod => {
        if (filters.includes("nutsAllergy") && filters.includes("lactoseIntolerance")) {
            return !prod.containsNuts && !prod.containsLactose
        } else if (filters.includes("lactoseIntolerance")) {
            return !prod.containsLactose
        } else if (filters.includes("nutsAllergy")) {
            return !prod.containsNuts
        } else {
            return true
        }
    }).filter(prod => {
        if (organicPreference) {
            return prod.organic
        } else {
            return true;
        }
    })

    const dairyProducts = filteredProducts.filter((p: Product) => p.section === "dairy");
    const meatProducts = filteredProducts.filter((p: Product) => p.section === "meat");
    const seaProducts = filteredProducts.filter((p: Product) => p.section === "seafood");
    const fruitProducts = filteredProducts.filter((p: Product) => p.section === "fruit");
    const vegetableProducts = filteredProducts.filter((p: Product) => p.section === "vegetable");
    const snackProducts = filteredProducts.filter((p: Product) => p.section === "snack");

    return (
        
        <Col className="mt-3 ml-3">
            <Row>
                <h3>Produits</h3>
            </Row>

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Produits Laitiers
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        {dairyProducts.length === 0 ? 
                        <h5>Aucun produit disponible dans cette section.
                        Veuillez modifier vos critères de recherche.</h5> : 
                        dairyProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {dairyProducts[i+1] ? 
                                            <ProductCardComponent p={dairyProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {dairyProducts[i+2] ? 
                                            <ProductCardComponent p={dairyProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Viande
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        {meatProducts.length === 0 ? 
                            <h5>Aucun produit disponible dans cette section.
                            Veuillez modifier vos critères de recherche.</h5> : 
                            meatProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {meatProducts[i+1] ? 
                                            <ProductCardComponent p={meatProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {meatProducts[i+2] ? 
                                            <ProductCardComponent p={meatProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Fruits de mer
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        {seaProducts.length === 0 ? 
                            <h5>Aucun produit disponible dans cette section.
                            Veuillez modifier vos critères de recherche.</h5> : 
                            seaProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {seaProducts[i+1] ? 
                                            <ProductCardComponent p={seaProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {seaProducts[i+2] ? 
                                            <ProductCardComponent p={seaProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Fruits
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        {fruitProducts.length === 0 ? 
                            <h5>Aucun produit disponible dans cette section.
                            Veuillez modifier vos critères de recherche.</h5> : 
                            fruitProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {fruitProducts[i+1] ? 
                                            <ProductCardComponent p={fruitProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {fruitProducts[i+2] ? 
                                            <ProductCardComponent p={fruitProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        Légumes
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        {vegetableProducts.length === 0 ? 
                            <h5>Aucun produit disponible dans cette section.
                            Veuillez modifier vos critères de recherche.</h5> : 
                            vegetableProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {vegetableProducts[i+1] ? 
                                            <ProductCardComponent p={vegetableProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {vegetableProducts[i+2] ? 
                                            <ProductCardComponent p={vegetableProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        Collations
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body>
                        {snackProducts.length === 0 ? 
                            <h5>Aucun produit disponible dans cette section.
                            Veuillez modifier vos critères de recherche.</h5> : 
                            snackProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                            if (i % 3 === 0) {
                                return (
                                    <Row className="my-3">
                                        <Col>
                                            <ProductCardComponent p={p} cart={cart} />
                                        </Col>
                                        <Col>
                                        {snackProducts[i+1] ? 
                                            <ProductCardComponent p={snackProducts[i + 1]} cart={cart} />
                                        : null}
                                        </Col>
                                        <Col>
                                        {snackProducts[i+2] ? 
                                            <ProductCardComponent p={snackProducts[i + 2]} cart={cart} />
                                        : null}
                                        </Col>
                                    </Row>
                                )
                            } else {
                                return <></>
                            }
                            
                        })}
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Col>
    );
}

export default ProductsComponent;