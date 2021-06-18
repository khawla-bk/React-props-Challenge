import React from "react";
import "../App.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBRow,
  MDBCol
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBRow id="projects" className="project-container">
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj1.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj2.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <h3>Project 2</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj3.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <h3>Project 3</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol className="project-card">
        <MDBCard>
          <MDBCardImage
            className="CardImage"
            src="https://github.com/mohamedhan/template-portfolio-challenge/blob/main/images/proj4.jpg?raw=true"
            alt="..."
            position="top"
          />
          <MDBCardBody>
            <h3>Project 4</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
              aliquam.
            </p>
            <p>
              <a href="#">Github Link</a>
            </p>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}
