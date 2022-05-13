import React from "react";
import Banner from "../../components/Banner/Banner";
import Feature from "../../components/Feature/Feature";
import Info from "../../components/Info/Info";
import Service from "../../components/Service/Service";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <Banner></Banner>
        </section>
        <section>
          <Info></Info>
        </section>
        <section>
          <Service></Service>
        </section>
        <section>
          <Feature></Feature>
        </section>
      </div>
    </>
  );
};

export default Home;
