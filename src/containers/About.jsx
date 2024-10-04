import React from "react";
import Header from "../components/Header";
import "../style/AboutStyle.css";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="aboutPage">
      <Header />
      <div className="aboutContainer">
        <h1 className="aboutTitle">À propos</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          recusandae. Ducimus, odio quo? Ab expedita, molestiae nam ratione
          quibusdam consectetur assumenda dolore animi quam distinctio quae
          harum iusto ullam placeat! Illo ab impedit assumenda officiis eum
          aliquam eveniet itaque, libero saepe totam laboriosam sequi explicabo
          veritatis reprehenderit debitis nobis. Commodi voluptatem corrupti
          praesentium eos vero cum saepe pariatur incidunt accusantium?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eum
          quisquam, officiis nam at hic qui tenetur quo beatae doloribus modi
          perspiciatis reprehenderit ut explicabo exercitationem. Tempore
          voluptates et voluptatibus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
          recusandae. Ducimus, odio quo? Ab expedita, molestiae nam ratione
          quibusdam consectetur assumenda dolore animi quam distinctio quae
          harum iusto ullam placeat!
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
