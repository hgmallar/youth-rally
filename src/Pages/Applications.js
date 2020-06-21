import React, { Fragment } from "react";

import { Header } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Applications" />

    <div id="content ">
      <div className="row">
        <div className="col-md-10 mx-auto text-center pt-2 pb-1">
          <p>Applications for the 2020 Rally are now closed! </p>
          <p>
            Mark your calendars for July 12th-17th (10th-17th for our
            volunteers) as the 2021 Youth Rally is scheduled to take place at
            the University of Colorado at Boulder on those dates!! Check back in
            January of 2021 to complete your applciation.
          </p>

          {/* <p>The 2020 Youth Rally will take place virtually July 20th-25th.</p>
          <p>
            Participants do not have to commit to attending they entire week,
            rather you can participate as your schedule allows. For our Nurses
            and Returning Counselors – will be reaching out to you in advance of
            the week to seek your availability throughout the week.
          </p>
          <p>
            For ALL PARTICIPANTS, additional details to follow with notification
            of acceptance.
          </p>
          <h3 className="font-weight-bold">
            Click on the button below to complete your 2020 application TODAY!
          </h3>
          <a
            href="http://app.campdoc.com/register/youthrally"
            className="btn btn-primary green-btn mb-2"
            id="campers-btn"
            target="_blank"
            rel="noreferrer noopener"
          >
            START 2020 APPLICATIONS
          </a>

          <p>
            <span className="font-weight-bold">APPLICATION PROCESS </span>Click
            on the button above. Begin the application process by selecting your
            intended REGISTRATION (Camper, Counselor, or Medical Team). Work to
            complete the HEALTH PROFILE within. Not required in 2020:
            Medications, Allergies, Insurance, or Medical Clearance sections.
          </p>
          <p>
            Notification of acceptance will be sent via email to the email(s)
            listed as “Users” of the participant’s profile. Additional
            information, including scheduling details, will also be sent via
            email.
          </p>
          <p>
            <span className="font-weight-bold">SPONSORSHIP </span>for
            registration is available for all campers in need.
          </p>

          <p className="font-weight-bold">IMPORTANT DATES: </p>
          <p>
            <span className="font-weight-bold">June 1st</span> – Applications
            for Campers, Medical Team, and Returning Counselors are due
          </p> */}
        </div>
      </div>
    </div>
  </Fragment>
);
