import React, { useEffect } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

interface ClientInformationComponentProps {
    setFilters: Function;
    setOrganicPreference: Function;
    filters: string[];
    organicPreference: boolean;
}

const ClientInformationComponent: React.FC<ClientInformationComponentProps> = ({filters, setFilters, setOrganicPreference, organicPreference}) => {

    const addToFilters = (filter: string) => {
        if (!filters.includes(filter)) {
            setFilters([...filters, filter])
        } else {
            setFilters(filters.filter((f) => f !== filter));
        }
    }
    return (
    <Col className="mt-3 ml-3">
        <Row>
            <h3>Informations Personelles</h3>
        </Row>
        <br/>
        <Row>
            <h4>Votre information est requise pour améliorer votre expérience sur <b>ÉpicerieExpress.com</b>.</h4>
        </Row>
        <br/>
        <Row>
            <h5 className="mt-1">Intolérances/Allergies alimentaires:</h5>
        </Row>
        <Row>
            <Form.Group controlId="lactoseIntolerance">
                <Form.Check defaultChecked={filters.includes("lactoseIntolerance")} onClick={() => addToFilters("lactoseIntolerance")} type="checkbox" label="Intolérance au lactose" />
            </Form.Group>
        </Row>
        <Row>
            <Form.Group controlId="nutsAllergy">
                <Form.Check defaultChecked={filters.includes("nutsAllergy")} onClick={(evt: any) => addToFilters("nutsAllergy")} type="checkbox" label="Allergique aux noix" />
            </Form.Group>
        </Row>
        <Row>
            <h5 className="mt-1">Je préfère les produits:</h5>
        </Row>
        <Row>
            <Form.Group controlId="organic">
                <Form.Check
                type="radio"
                label="Produits Organiques"
                name="organicPreference"
                defaultChecked={organicPreference}
                onClick={() => setOrganicPreference(true)}
                />
                <Form.Check
                type="radio"
                label="Pas de préférence"
                name="organicPreference"
                defaultChecked={!organicPreference}
                onClick={() => setOrganicPreference(false)}
                />
            </Form.Group>
        </Row>
    </Col>
  );
}

export default ClientInformationComponent;