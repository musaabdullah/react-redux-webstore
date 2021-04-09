import React from "react";
import { Container, Form, FormTitle, Input, FormButton } from "./style";
import { useSelector } from "react-redux";
import Cart from "./Cart";
function Shipping() {
  const state = useSelector((state) => state.product);
  return (
    <Container>
      <Form>
        <FormTitle>Shipping information</FormTitle>
        <Input placeholder="Full Name" />
        <Input placeholder="Email" />
        <Input placeholder="Phone Number" />
        <Input placeholder="City" />
        <Input placeholder="Street Address" />
        <FormButton>Shipping to address</FormButton>
      </Form>
      <div>
        {state.carts.map((item) => {
          return <Cart item={item} />;
        })}
      </div>
    </Container>
  );
}

export default Shipping;
