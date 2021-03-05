import React, { Fragment } from "react";

import { Header, ImageWithText, TwoColTextImg } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Campers" />

    <div id="content">
      <div className="row pt-2 pb-1">
        <div className="col-md-10 mx-auto">
          <ImageWithText
            className="col-md-8 mx-auto"
            imageSource="/assets/images/2017camps.png"
            imageAlt="2017 campers"
            imageText="Each year the Youth Rally hosts roughly 150 campers ages 11-17
                from all over the United States and beyond! Many of our campers
                grow up to become Youth Rally Counselors and/or find alternative
                means to support their Rally Community."
          />
          <TwoColTextImg
            colSize1={8}
            colSize2={4}
            content={[
              {
                head: "A CAMPER’S perspective:",
                class: "font-italic",
                text:
                  " I had no idea what to expect when I flew from Hawaii to San Diego to attend my first Youth Rally; would I like it?, would they like me?? Four years later, the friends I have made at Rally have become a second family to me. Each year at Rally has been a fun adventure, but also an important part of me learning about my illness and how to take care of myself. This second family has become a vital part of my support system that I know I can always turn to when I need a lift. Did I mention how much fun it is? Every year I look forward to getting together with the friends I’ve made at the Youth Rally and just being me….not the sick kid, or the tired kid, but me. And the same goes for everyone else who attends. This is a place where we can relax and enjoy life with others just like ourselves.",
              },
              {
                head: "",
                class: "font-italic",
                text:
                  "Now that I’ve “graduated” (from Rally) I couldn’t think of anything else I’d rather do than to return and train to be a counselor. This is the least I can do for a community of people that has helped me so much. This past year I’ve had the opportunity to represent Youth Rally at some conferences and talk about the impact it has had on me. Not many kids my age get to speak to Doctors and Nurses about something like this; not only have I learned to better take care of my Crohn’s but I’ve also learned how to be a better person.",
              },
              {
                head: "",
                class: "font-italic text-right",
                text: "—Cody Mitchem",
              },
            ]}
            src="/assets/images/Cody-graduation.2014.jpg"
            alt="Cody's graduation"
            text="Cody Mitchem, pictured here with members of Youth Rally
            Leadership at his 2014 Rally graduation ceremony, joined the YR
            Counselor Team in 2015!"
          />
        </div>
      </div>
    </div>
  </Fragment>
);
