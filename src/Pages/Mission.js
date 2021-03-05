import React, { Fragment } from "react";

import { Header, Photograph, TwoColList } from "./../Elements";

export default () => (
  <Fragment>
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
        <TwoColList
          list1={[
            "Ulcerative colitis",
            "Neuronal intestinal dysplasia",
            "Necrotizing enterocolitis",
            "Renal agenesis",
            "Short gut/bowel syndrome",
            "Hallow visceral myopathy",
            "Hirschsprung's disease",
            "Cancer",
          ]}
          list2={[
            "Bladder exstrophy",
            "Cloacal exstrophy",
            "Spina bifida",
            "VATER Syndrome",
            "Imperforate anus",
            "Crohn's Disease",
            "Bowel exstrophy",
            "Hypospadias",
            "Epispadias",
          ]}
        />
        <p>
          Just like Youth Rally camper and volunteer diagnoses vary, so do their
          management techniques. Some campers and volunteers are able to manage
          their condition(s) without medical/surgical intervention. The
          following is an example of some of the additional management methods
          shared by campers and counselors:
        </p>
        <TwoColList
          list1={[
            "Koch pouch",
            "J-pouch",
            "IV medication",
            "Continuous tube feeding",
            "Ileostomy",
            "Colostomy",
            "Dialysis",
            "Bowel management programs",
            "BCIR (Barnett Continent Intestinal Reservoir)",
          ]}
          list2={[
            "Intermittent catheterization",
            "Urostomy",
            "Ace Malone",
            "Pull-thru",
            "Mitrofanoff",
            "Total parenteral nutrition (TPN)",
            "Enemas",
            "Indwelling catheter",
            "Irrigation",
          ]}
        />
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
  </Fragment>
);
