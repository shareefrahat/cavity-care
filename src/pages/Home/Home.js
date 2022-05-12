import React from "react";
import Banner from "../../components/Banner/Banner";
import Info from "../../components/Info/Info";

const Home = () => {
  return (
    <>
      <div className="mx-20">
        <section>
          <Banner></Banner>
        </section>
        <section>
          <Info></Info>
        </section>
      </div>
    </>
  );
};

export default Home;
