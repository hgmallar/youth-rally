import React from "react"

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />
        
    <Header title="Applications" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto text-center">
          <p>
            The 2019 Youth Rally will take place in Seattle, WA, July 8
            <sup>th</sup> - 13<sup>th</sup>. ALL VOLUNTEERS will need to arrive
            by July 6th for mandatory on-site orientation. The 2019 Youth Rally
            will be hosted at the University of Washington – all participants
            will be roomed at one of the newer, fully accessible, dorms on
            campus.
          </p>

          <h2>
            Click on the button below to start your 2019 application TODAY!
          </h2>

          <a
            href="https://app.campdoc.com/!/home/auth/login?r=youthrally"
            className="btn btn-primary text-white mb-2"
            id="campers-btn"
          >
            Start 2019 Applications
          </a>

          <p>
            <span className="font-weight-bold">APPLICATION PROCESS</span> – Click on
            the button above. Begin the application process by selecting your
            intended REGISTRATION (Camper, Counselor, or Nurse). Work to
            complete the HEALTH PROFILE within. Applications will not be
            considered for approval until the HEALTH PROFILE is 100% complete.
            Once completed, you’re registration will go into an internal review
            process (we are 100% staffed by volunteers so this can take time).
            You may request a rushed approval by contacting
            <span className="greenText font-weight-bold">
              <a href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>
            – we will do our best to accommodate these requests.
          </p>

          <p>
            Notification of acceptance will be sent via email to the email(s)
            listed as “Users” of the participant’s profile. Additional
            information, including travel details, will be added for completion
            to the HEALTH PROFILE upon acceptance. Additional information,
            including suggested packing list, travel agent contact information,
            and tentative schedule will also be sent via email upon application
            approval.
          </p>

          <p>
            <span className="font-weight-bold">ADDITIONAL CAMPER INSTRUCTIONS</span>{" "}
            Camper applications will require an additional form to be completed
            by a current health care provider. Camper registrations cannot be
            completed until the 2019 Medical Clearance form has been uploaded to
            their HEALTH PROFILE.{" "}
            <span className="greenText font-weight-bold">
              <a
                href="/assets/documents/2019 Medical Clearance.pdf"
                target="_blank"
              >
                Click here
              </a>
            </span>{" "}
            to download/print the 2019 Medical Clearance form for completion.
            For assistance uploading the form to the HEALTH PROFILE, contact
            <span className="greenText font-weight-bold">
              <a href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>
            .
          </p>

          <p>
            <span className="font-weight-bold">SPONSORSHIP</span> for assistance
            with registration and/or travel costs is available for all campers
            in need. There is a specific page within the application that
            addresses this. We do ask for a $100 upfront hold (refundable if the
            participant is unable to attend related to medical or other
            emergency) due at the time the application is started that will be
            put towards the registration balance. All participants are
            encouraged to fundraise to support personal registration and/or
            travel costs. Many campers and volunteers alike have found success
            using{" "}
            <span className="greenText font-weight-bold">
              <a href="https://www.firstgiving.com/organization/26064">
                FirstGiving
              </a>
            </span>
            .
          </p>

          <p>
            <span className="font-weight-bold">BOOKING AIR TRAVEL</span> – We do not
            advise participants to book airfare until notification of
            application acceptance is approved. All accepted Youth Rally
            participants are welcome to utilize our travel agent to book their
            airfare – contact information will be provided with notification of
            application acceptance.
          </p>

          <p>
            <span className="font-weight-bold">IMPORTANT DATES:</span>
          </p>
          <p>
            <span className="font-weight-bold">
              April 15<sup>th</sup>
            </span>{" "}
            – COUNSELOR Applications due
          </p>

          <p>
            <span className="font-weight-bold">
              May 31<sup>st</sup>
            </span>{" "}
            – Order &amp; Payment deadline for “Add-On” 2019 Youth Rally Gear
          </p>

          <p>
            <span className="font-weight-bold">
              June 1<sup>st</sup>
            </span>{" "}
            – CAMPER Applications due
          </p>
          <p>
            <span className="font-weight-bold">
              June 1<sup>st</sup>
            </span>{" "}
            – NURSE Applications due
          </p>

          <p>
            <span className="font-weight-bold">
              June 15<sup>th</sup>
            </span>{" "}
            – Online Health Profile Lock-out (and changes beyond this date
            should be sent to
            <span className="greenText font-weight-bold">
              <a href="mailto:registrar@youthrally.org">
                registrar@youthrally.org
              </a>
            </span>
            )
          </p>

          <p>
            <span className="font-weight-bold">
              June 15<sup>th</sup>
            </span>{" "}
            – Any Youth Rally sponsored airfare must be booked
          </p>

          <p>
            <span className="font-weight-bold">
              July 1<sup>st</sup>
            </span>{" "}
            – ALL Registration balances due
          </p>
        </div>
      </div>
    </div>
  </div>
)
