// What are Components?
// Simple functions that that return HTML(JSX).

// fix length of array called Tupples

import { useState } from "react";
import Button from "@/components/button/Button"
import Greet from "@/components/greet/Greet"
import List from "@/components/list/List"

export default function Home() {

  const [arr, setArr] = useState(
    [
      "This is an Item",
      "This is second Item",
      "This is Third Item",
      "This is Fourth Item",
    ]
  );

  const clickHandler = () => {
    setArr([...arr, "This is Fifth Item"]);
  }

  return (
    <>
      <h2>Next JS APP</h2>
      <Greet />
      <List arr={arr} />
      <Button click={clickHandler}>Add</Button>
    </>
  )
}
