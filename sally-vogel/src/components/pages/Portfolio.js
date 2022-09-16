import React from 'react';
import Row from 'react-bootstrap/Row';
import portfolio from '../../portfolio.json'
import ProjectCard from './projectCard';
import "../../style.css";

export default function Portfolio() {
  return (
    <div class="portfolio">
      <h1>Portfolio</h1>
      <hr></hr>
      <Row xs={1} md={2} className="g-4">
      {portfolio.map((project, index) => (
        <ProjectCard key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} tech={project.tech} description={project.description}/>
      ))}
    </Row>
  


    </div>
  );
}