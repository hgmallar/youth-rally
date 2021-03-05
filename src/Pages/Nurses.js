import React, { Fragment } from "react";

import { Header, TwoColTextPhoto } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Nurses" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <div className="row">
          <h2>Who are the Youth Rally Nurses/Medical Team?</h2>
          <TwoColTextPhoto
            content={[
              {
                list: [],
                text:
                  "Each year the Youth Rally has a dedicated team of Licensed Medical Professionals who have experience with wound, ostomy and continence nursing (WOCN). Additional members of the Youth Rally Medical Team might have experience in pediatrics, trauma, medical, or surgical nursing. Some even have ostomies or other bowel/bladder diversions themselves!",
              },
              {
                list: [],
                text:
                  "Members of the Youth Rally Medical Team recognize the importance of skin health, ostomy care, continence, and medication management and volunteer their time to support the campers as needed both physically and psychosocially. They are very much an extension of our counselor team. As such, they also have a number of responsibilities throughout the week including:",
              },
              {
                list: [
                  "Facilitation of medical diagnosis groups",
                  "Enforcement of all Youth Rally Policies and Camper Code of Conduct",
                  "Assistance with medical/education activities",
                  "Providing nursing care and assistance to assigned campers",
                  "Assisting peers with medical care – knowledge sharing",
                  "Ambassadors of FUN! and HYGIENE!!",
                ],
                text: "",
              },
            ]}
            src="/assets/images/nurses.jpg"
            alt="nurses"
          />
        </div>
      </div>
    </div>
  </Fragment>
);
