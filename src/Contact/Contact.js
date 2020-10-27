import React from 'react';
import './Contact.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

function Contact() {
  return (
    <section className="Contact" id="contact_section">
      <SectionHeader topLine="Contact" />
      <div className="Contact__text-container">
        <p className="Contact__text">
          Please find my latest contact details in my resume below.
        </p>
        <div className="button-container">
          <a className="button" href="Matt_Critelli_Resume_10.27.20.pdf" download>Download Resume</a>
        </div>
      </div>
    </section>
  );
}

export default Contact;