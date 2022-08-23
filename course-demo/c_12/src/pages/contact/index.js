import { useEffect, useRef } from "react";
import { Button, Layout } from "./../../components/index.js";

export const Contact = () => {
  const inputRef = useRef();

  const clickHandler = () => {
    inputRef.current.focus();
  }
  console.log(inputRef);
  
  return (
    <Layout>
      <h1>Contact</h1>
      <label htmlFor="">
        Name:
        <input type="text" ref={inputRef} />
      </label>

      <Button onClick={clickHandler}>Focus</Button>
      <p>My previous name is {""}</p>
    </Layout>
  )
}