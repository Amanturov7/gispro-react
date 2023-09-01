import React, { useEffect, useState } from "react";
import "./form.css";
import { useForm } from "react-hook-form";

const CalloutSection = ({ display, setDisplay }) => {
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="contact" className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5">What are you waiting for?</h2>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            setDisplay(!display);
            scrollToContact();
          }}
        >
          Contact Me
        </button>
      </div>
    </section>
  );
};

const SeeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <section className="callout contact-form" id="contact">
      <div className="container">
        {/* Form code remains the same */}
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    console.log(display);
  }, [display]);

  return display ? (
    <CalloutSection setDisplay={setDisplay} display={display} />
  ) : (
    <SeeForm />
  );
};

export default ContactForm;
