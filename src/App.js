import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import { fetchData, addToCart, loadCurrentItem } from "./actions/product";
import * as AI from "react-icons/ai";
import "./App.css";
import {
  Container,
  Card,
  Img,
  Body,
  Button,
  Header,
  Title,
  Price,
  Nav,
  Logo,
  Item,
  Sidebar,
  Close,
  Items,
} from "./style";
import Cart from "./Cart";
import Shipping from "./Shipping";
import ProductDetails from "./ProductDetails";
function App() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(0);
  const [price, setPrice] = useState(0);
  const handleShow = () => {
    setShow(!show);
    console.log(show);
  };
  const state = useSelector((state) => state.product);

  // console.log(state.products);
  useEffect(() => {
    dispatch(fetchData());
    let count = 0;
    let priceCount = 0;
    state.carts.forEach((item) => {
      count += item.qty;
      priceCount = item.qty * item.price;
    });
    setCart(count);
    setPrice(priceCount);

    console.log(price);
  }, [state.carts, cart, price, dispatch]);
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Container>
              <Nav>
                <Logo>Webstore</Logo>
                <Item onClick={handleShow}>Cart: {cart}</Item>
              </Nav>
              <Sidebar className={`${show ? "active" : "disabled"}`}>
                <Close onClick={handleShow}>
                  <AI.AiFillCloseCircle />
                </Close>
                <Link
                  style={{
                    background: "white",
                    color: "black",
                    marginLeft: "150px",
                    padding: 10,
                    textDecoration: "none",
                    borderRadius: 10,
                    fontWeight: "bold",
                  }}
                  to="/shipping"
                >
                  Check out
                </Link>
                <Items>
                  {state.carts.map((item) => {
                    return <Cart item={item} />;
                  })}
                </Items>
              </Sidebar>
              {state.products.map((item) => {
                return (
                  <Card>
                    <Header>
                      <Img src={item.image} />
                    </Header>
                    <Body>
                      <Title>{item.title.slice(0, 20)}</Title>
                      <Price>{item.price}</Price>
                      <Button onClick={() => dispatch(addToCart(item.id))}>
                        Add to cart
                      </Button>
                      <Button onClick={() => dispatch(loadCurrentItem(item))}>
                        <Link
                          style={{ color: "white", textDecoration: "none" }}
                          to="/productdetails"
                        >
                          View item
                        </Link>
                      </Button>
                    </Body>
                  </Card>
                );
              })}
            </Container>
          </Route>
          <Route path="/shipping">
            <Shipping />
          </Route>
          <Route path="/productdetails">
            <ProductDetails />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
