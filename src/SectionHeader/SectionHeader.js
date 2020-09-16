import React from 'react';
import './SectionHeader.scss';

function SectionHeader ({
  topLine,
  bottomLine
}) {
  return (
    <section className="SectionHeader">
      <h2 className="SectionHeader">
        <span>{topLine}</span>
        <span>{bottomLine}</span>
      </h2>
    </section>
  );
}

export default SectionHeader ;
