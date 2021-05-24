import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>Ninja Zone | About</title>
      </Head>
      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iusto laborum ullam harum distinctio earum incidunt
          eius quas. Vel, dolores temporibus corporis numquam amet repellendus
          cumque illum itaque saepe quia.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem iusto laborum ullam harum distinctio earum incidunt
          eius quas. Vel, dolores temporibus corporis numquam amet repellendus
          cumque illum itaque saepe quia.
        </p>
      </div>
    </>
  );
};

export default about;
