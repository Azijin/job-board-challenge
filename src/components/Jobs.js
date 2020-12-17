import React from "react";
import Job from "./Job";

const Jobs = (props) => {
  return (
    <section className={props.className}>
      <Job
        className="job"
        title="Full Time Sales Associates - Sydney Boutique"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="job"
        title="Agent de sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
      <Job
        className="job"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="job"
        title="Chef de Projet"
        contractType="CDD"
        country="France"
        city="Paris"
      />
      <Job
        className="job"
        title="Développeur Réact.js"
        contractType="CDI"
        country="France"
        city="Paris"
      />
      <Job
        className="job"
        title="Sales Associates Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      />
      <Job
        className="job"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans Montana"
      />
      <Job
        className="job"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      />
      <Job
        className="job"
        title="Infirmier"
        contractType="CDI"
        country="France"
        city="Pantin"
      />
    </section>
  );
};
export default Jobs;
