import React from "react";
import AppointmentFeature from "../../components/AppointmentFeature/AppointmentFeature";

import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Feature from "../../components/Feature/Feature";
import Info from "../../components/Info/Info";
import Service from "../../components/Service/Service";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <div>
        <section>
          <Banner></Banner>
        </section>
        <section className="max-w-screen-xl px-10 lg:px-0 mx-auto">
          <Info></Info>
        </section>
        <section className="max-w-screen-xl px-10 lg:px-0 mx-auto">
          <Service></Service>
        </section>
        <section className="max-w-screen-xl mx-auto">
          <Feature></Feature>
        </section>
        <section>
          <AppointmentFeature></AppointmentFeature>
        </section>
        <section className="max-w-screen-xl px-10 lg:px-0 mx-auto">
          <Testimonial></Testimonial>
        </section>
        <section>
          <ContactForm></ContactForm>
        </section>
      </div>
    </>
  );
};

export default Home;
