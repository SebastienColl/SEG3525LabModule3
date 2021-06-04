import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ClientInformationComponent from './components/ClientInformation';
import ProductsComponent from './components/Products';
import Cart from './components/Cart';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaOpencart } from "react-icons/fa"
import { BsFillPersonFill } from "react-icons/bs"
import { BiCartAlt } from "react-icons/bi"
import { GiFruitBowl } from "react-icons/gi"
import { Link } from 'react-router-dom';

interface AppProps {
}

export interface Product {
  id: number;
  name: string;
  price: number;
  containsNuts: boolean;
  containsLactose: boolean;
  organic: boolean;
  section: string;
}



const App: React.FC<AppProps> = () => {

  const [products, setProducts] = useState<Product[]>([
    {
        id: 0,
        name: "Yaourt",
        price: 5.79,
        containsNuts: false,
        containsLactose: true,
        organic: true,
        section: "dairy"
    },
    {
        id: 1,
        name: "Boeuf haché",
        price: 7.29,
        containsNuts: false,
        containsLactose: false,
        organic: false,
        section: "meat"
    },
    {
        id: 2,
        name: "Saumon",
        price: 12.99,
        containsNuts: false,
        containsLactose: false,
        organic: true,
        section: "seafood"
    },
    {
        id: 3,
        name: "Pomme",
        price: 1.05,
        containsNuts: false,
        containsLactose: false,
        organic: true,
        section: "fruit"
    },
    {
        id: 4,
        name: "Banane",
        price: 2.19,
        containsNuts: false,
        containsLactose: false,
        organic: true,
        section: "fruit"
    },
    {
        id: 5,
        name: "Lait",
        price: 3.99,
        containsNuts: false,
        containsLactose: true,
        organic: true,
        section: "dairy"
    },
    {
        id: 6,
        name: "Barre de chocolat",
        price: 3.05,
        containsNuts: true,
        containsLactose: true,
        organic: false,
        section: "snack"
    },
    {
        id: 7,
        name: "Biscuit aux pépites de chocolat",
        price: 7.99,
        containsNuts: true,
        containsLactose: true,
        organic: false,
        section: "snack"
    },
    {
        id: 8,
        name: "Mélange de noix",
        price: 5.99,
        containsNuts: true,
        containsLactose: false,
        organic: true,
        section: "snack"
    },
    {
        id: 9,
        name: "Smoothie",
        price: 3.99,
        containsNuts: false,
        containsLactose: true,
        organic: false,
        section: "dairy"
    },
    {
      id: 10,
      name: "Crevettes",
      price: 13.99,
      containsNuts: false,
      containsLactose: false,
      organic: true,
      section: "seafood"
    },
    {
      id: 11,
      name: "Crabe",
      price: 17.99,
      containsNuts: false,
      containsLactose: false,
      organic: true,
      section: "seafood"
    },
    {
      id: 12,
      name: "Poulet entier",
      price: 11.99,
      containsNuts: false,
      containsLactose: false,
      organic: false,
      section: "meat"
    },
    {
      id: 13,
      name: "Brocoli",
      price: 5.99,
      containsNuts: false,
      containsLactose: false,
      organic: true,
      section: "vegetable"
    },
    {
      id: 14,
      name: "Piment vert",
      price: 3.99,
      containsNuts: false,
      containsLactose: false,
      organic: true,
      section: "vegetable"
    },
    {
      id: 15,
      name: "Oignon",
      price: 2.99,
      containsNuts: false,
      containsLactose: false,
      organic: true,
      section: "vegetable"
    }
  ])
  
  const [cart, setCart] = useState<Product[]>([]);
  const [filters, setFilters] = useState<string[]>([] as string[]);
  const [organicPreference, setOrganicPreference] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>
          <FaOpencart/>{' '}
          Épicerie Express
        </Navbar.Brand>
        <BsFillPersonFill color="white" size={24}/>
        <NavDropdown title="Informations personnelles" id="foodPreferences">
          <NavDropdown.Item><Link className="dropdown-link" to="/SEG3525LabModule3/personalInfo/foodPreferences" >Préférences alimentaires</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Information de livraison</NavDropdown.Item>
          <NavDropdown.Item>Information de paiement</NavDropdown.Item>
        </NavDropdown>
        <GiFruitBowl color="white" size={24} />
        <NavDropdown title="Épicerie en ligne" id="onlineStore">
          <NavDropdown.Item><Link className="dropdown-link" to="/SEG3525LabModule3/onlineStore/products" >Produits</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Livraison à domicile</NavDropdown.Item>
          <NavDropdown.Item>Nous joindre</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link><BiCartAlt color="white" size={24}/><Link className="cart-link" to="/SEG3525LabModule3/cart">Panier</Link></Nav.Link>
      </Navbar>
      <Switch>
        <Route path="/SEG3525LabModule3/personalInfo/foodPreferences">
          <ClientInformationComponent organicPreference={organicPreference} filters={filters} setFilters={setFilters} setOrganicPreference={setOrganicPreference} />
        </Route>
        <Route path="/SEG3525LabModule3/onlineStore/products">
          <ProductsComponent organicPreference={organicPreference} products={products} cart={cart} filters={filters}/>
        </Route>
        <Route path="/SEG3525LabModule3/cart">
          <Cart cart={cart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
