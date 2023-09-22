// What are Components?
// Simple functions that that return HTML(JSX).

// fix length of array called Tupples

import { useState } from "react";
import Link from "next/link";

export default function Home(props) {

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

  const { title } = props;

  return (
    <>
      <h1>{title}</h1>
      <h2>Our Customers</h2>
      <Link href="/customers">Go to Customers</Link>
      {/* <h2>Next JS APP</h2>
      <Greet />
      <List arr={arr} />
      <Button click={clickHandler}>Add</Button> */}
    </>
  )
}


export async function getStaticProps() {
  return {
    props: {
      title: "Hello Page"
    }
  };
}
