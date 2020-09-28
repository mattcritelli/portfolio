import React from 'react';
import './Contact.scss';
import SectionHeader from '../SectionHeader/SectionHeader';

function Contact() {
  return (
    <section className="Contact" id="contact_section">
      <SectionHeader
        topLine="Contact"
        // bottomLine=" Story"
      />
    </section>
  );
}

export default Contact;