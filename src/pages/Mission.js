import React from "react";

import Header from "./../components/Header";
import Photograph from "./../components/Photograph";

export default () => (
  <div>
    <Header title="The Mission" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <h2 className="text-center">
          {" "}
          To provide an environment for adolescents living with conditions of
          the bowel and bladder that encourages self-confidence and independent
          living.
        </h2>

        <p>
          More than 30 years after inception, the Youth Rally remains a
          community for young people to meet others who live with similar
          medical conditions.  Lasting friendships are formed, in a short 5
          nights, in an atmosphere that promotes self-confidence and
          independence. Our campers and counselors alike live with an array of
          conditions affecting their bowel and/or bladder systems, some of which
          include:
        </p>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Familial adenomatous polyposis</li>
              <li>Ulcerative colitis</li>
              <li>Neuronal intestinal dysplasia</li>
              <li>Necrotizing enterocolitis</li>
              <li>Renal agenesis</li>
              <li>Short gut/bowel syndrome</li>
              <li>Hallow visceral myopathy</li>
              <li>Hirschsprung's disease</li>
              <li>Cancer</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Bladder exstrophy</li>
              <li>Cloacal exstrophy</li>
              <li>Spina bifida</li>
              <li>VATER Syndrome</li>
              <li>Imperforate anus</li>
              <li>Crohn's Disease</li>
              <li>Bowel exstrophy</li>
              <li>Hypospadias</li>
              <li>Epispadias</li>
            </ul>
          </div>
        </div>
        <p>
          Just like Youth Rally camper and volunteer diagnoses vary, so do their
          management techniques. Some campers and volunteers are able to manage
          their condition(s) without medical/surgical intervention. The
          following is an example of some of the additional management methods
          shared by campers and counselors:
        </p>
        <div className="row">
          <div className="col-md-6">
            <ul>
              <li>Koch pouch</li>
              <li>J-pouch</li>
              <li>IV medication</li>
              <li>Continuous tube feeding</li>
              <li>Ileostomy</li>
              <li>Colostomy</li>
              <li>Dialysis</li>
              <li>Bowel management programs</li>
              <li>BCIR (Barnett Continent Intestinal Reservoir)</li>
            </ul>
          </div>
          <div className="col-md-6">
            <ul>
              <li>Intermittent catheterization</li>
              <li>Urostomy</li>
              <li>Ace Malone</li>
              <li>Pull-thru</li>
              <li>Mitrofanoff</li>
              <li>Total parenteral nutrition (TPN)</li>
              <li>Enemas</li>
              <li>Indwelling catheter</li>
              <li>Irrigation</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>
              In addition to recreational programming, the Youth Rally provides
              educational sessions addressing topics that are common among all
              adolescents as well as those unique to individuals living with
              medical and/or physical challenges:
            </p>
            <ul>
              <li>Motivational sessions</li>
              <li>Living independently - going to college</li>
              <li>Body image and personal Hygiene</li>
              <li>Medical diagnosis groups</li>
              <li>Peer discussion groups</li>
              <li>Diversion/procedure-specific groups</li>
            </ul>
          </div>
          <div className="col-md-6">
            <Photograph
              imageSource="/assets/images/camper_counselor.jpg"
              imageAlt="camper/counselor"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
