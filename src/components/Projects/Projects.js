import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";

import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hand Pose Estimation"
              description="Detected hand landmarks are then visualized by drawing landmarks and connections on the frames. The code also includes the functionality to save the processed frames as image files in the Output Images directory using unique identifiers. The loop continues until the user presses 'q' to quit. This code snippet demonstrates a basic implementation of hand pose estimation and tracking, which can be further extended for applications such as gesture recognition or augmented reality interactions."
              ghLink="https://github.com/saipriyaan/Hand-pose-estimation"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="VirtualEye - Life Guard for Swimming Pools to Detect Active Drowning"
              description="  1. Swimming is one of the best exercises that helps people to reduce stress in this urban lifestyle. Swimming pools are found larger in number in hotels.

2. Applying the CNN algorithm to the dataset.Beginners, especially, often feel it difficult to breathe underwater which causes breathing trouble which in turn causes a drowning accident.

3.To overcome this conflict, a meticulous system is to be implemented along the swimming pools to save human life."
              ghLink="https://github.com/IBM-EPBL/IBM-Project-24477-1659943372"
              demoLink="https://github.com/IBM-EPBL/IBM-Project-24477-1659943372"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Facematch"
              description="The Face Match Algorithm is an advanced system designed to search and count faces in live camera feeds. Leveraging cutting-edge computer vision techniques, this algorithm provides real-time face detection and recognition capabilities, enabling accurate and efficient face analysis.

"
              ghLink="https://github.com/saipriyaan/facematch"
                      
            />
          </Col>



          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/saipriyaan/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
