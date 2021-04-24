import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  width: 260px;
  height: 330px;
  //   border: 1px solid black;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  border-radius: 10px;
  transition: 432ms;
  cursor: pointer;
  background-color: whitesmoke;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.5);

  &:hover {
    transform: scale(1.1);
  }
`;
export const Header = styled.div``;

export const Img = styled.img`
  width: 260px;
  height: 200px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const Title = styled.div``;
export const Price = styled.div``;

export const Body = styled.div`
  margin-top: 10px;
  padding: 10px;
`;

export const Button = styled.button`
  margin-top: 10px;
  outline: none;
  border: none;
  color: white;
  background-color: black;
  padding: 10px;
  margin-right: 10px;
  border-radius: 10px;
  font-weight: bold;
  border: 1px solid white;
  cursor: pointer;
  transition: 234ms;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const Nav = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

export const Item = styled.div`
  background-color: white;
  color: black;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export const Sidebar = styled.div`
  width: 330px;
  height: 100vh;
  background-color: black;
  position: fixed;
  top: 0;
  //   right: -30%;
  z-index: 1;
  transition: 1s;
  overflow-y: scroll;
`;

export const Close = styled.button`
  margin-top: 50px;
  margin-left: 10px;
  font-size: 40px;
  color: white;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const Items = styled.div`
  margin-top: 30px;
`;

export const CartItem = styled.div`
  background-color: white;
  //   padding: 10px;
  display: flex;
  border: 1px solid white;
  margin: 10px;
  cursor: pointer;
`;
export const CartImg = styled.img`
  width: 100px;
  height: 120px;
  margin-right: 20px;
`;

export const CartDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const CartTitle = styled.div``;
export const CartBtn = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 14s0px;
`;
export const CartRemove = styled.button`
  width: 100px;
  padding: 5px;
  background-color: red;
  color: white;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`;

export const Form = styled.div`
  margin: 50px;
  width: 500px;
  height: 600px;
  background-color: whitesmoke;
  border-radius: 15px;
  box-shadow: 0px 0px 3px 0px rgb(0, 0, 0, 0.5);
  display: flex;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const FormTitle = styled.div`
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 8px;
  border: 1px solid rgb(0, 0, 0, 0.5);
  color: black;
  border-radius: 5px;
  margin: 10px 0px;
  &:focus {
    outline: none;
  }
`;

export const FormButton = styled.button`
  margin-top: 20px;
  background-color: black;
  color: white;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: white;
    color: black;
  }
`;
