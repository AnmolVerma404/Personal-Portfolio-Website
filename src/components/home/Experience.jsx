import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import {
  Container,
  Row,
} from "react-bootstrap";

const Experience = ({ experiences }) => {
  return (
    <section className="section experience" id='experiences'>
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center experience__heading">
            {experiences.heading}
          </h2>
          <Row className='experience__row'>
            {
              experiences.data.map((data, index) => {
                return <ExperienceCard key={index} data={data} />
              })
            }
          </Row>
        </Jumbotron>
      </Container>
    </section>
  );
}

export default Experience;