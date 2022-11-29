import React, { Fragment } from "react";

import { Header, TwoColList } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="FAQs" />

    <div id="content">
      <div className="row pt-2">
        <div className="col-md-10 mx-auto">
          <h2>What might one expect to gain from their experience?</h2>
          <p>
            More than 40 years after inception, the Youth Rally remains a
            community for young people to meet others who live with similar
            medical conditions.  Lasting friendships are formed, in a short 5
            nights, in an atmosphere that promotes self-confidence and
            independence.
          </p>
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
          <h2>Do I have to have an ostomy to attend this camp?</h2>
          <p>
            No. Our campers and counselors alike live with an array of
            conditions affecting their bowel and/or bladder systems, some of
            which include:
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
          <h2>Can I still attend the camp if I have never had surgery?</h2>
          <p>
            Yes. Just like Youth Rally camper and volunteer diagnoses vary, so
            do their management techniques. Some campers and volunteers are able
            to manage their condition(s) without medical/surgical intervention.
            The following is an example of some of the additional management
            methods shared by campers and counselors:
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
          <h2>How much does camp cost?</h2>
          <p>There are two costs associated with Youth Rally Participation:</p>
          <ol>
            <li>
              <span className="font-weight-bold">Registration.</span>{" "}
               Registration cost for all campers is $500 and $350 for our
              volunteers.  We ask for $100 upfront with all applications to hold
              your spot, but also to help us with early costs associated with
              planning such a grand event.  Registration costs cover all
              room/board, meals, activities, and transportation throughout the
              week.  The Youth Rally encourages individual fundraising to
              support both registration and travel costs. Sponsorship is
              available for ALL campers who need it (there is a page within the
              application that addresses sponsorship needs/requests)!
            </li>
            <li>
              <span className="font-weight-bold">Travel.</span>  This refers to
              the cost it takes to get the participant to our location each year
              - that varies for everyone!  Again, the Youth Rally encourages
              individual fundraising and sponsorship is available for ALL
              campers who need it!
            </li>
          </ol>
          <h2>Is sponsorship available?</h2>
          <p>Yes! SPONSORSHIP is available for ALL CAMPERS in need!</p>
          <p>
            Thanks to the generous efforts of Youth Rally volunteers, donors,
            and partners, in over 40 years of existence no child has ever been
            turned away due to lack of financial resources. The sponsorship
            application form is embedded in the camper application. Simply
            complete the application and state your need as prompted for
            registration ($500) and/or travel (variable) assistance. No coupon
            code required.
          </p>
          <p>
            Those requesting sponsorship for travel costs should complete their
            application as soon as possible to avoid costly, last-minute flight
            arrangements. Those who receive sponsorship for travel costs will be
            required to book airfare through the Youth Rally travel agent -
            contact information to be provided with notification of application
            acceptance.
          </p>
          <p>
            <span className="font-weight-bold">Note:</span> all applicants are
            subject to a $100 application fee. This helps the Youth Rally better
            plan for program and housing purposes.  If for some reason you
            absolutely cannot afford this payment please contact{" "}
            <a
              href="mailto:info@youthrally.org"
              target="_blank"
              rel="noopener noreferrer"
              className="links"
            >
              <span className="purpleText">Emily Mallar</span>
            </a>
            .
          </p>
          <h2>How do I fundraise on my own?</h2>
          <p>
            The Youth Rally strongly encourages all participants to do some bit
            of fundraising on their own. There are many local/regional charities
            (Kiwanis, Rotary, church groups, WOCN affiliates, Hospitals,{" "}
            <a
              href="https://www.ostomy.org/ASGs_with_Websites.html/"
              className="links"
            >
              UOAA affilliates
            </a>
            , etc.) that set aside funds for this very thing.
          </p>
          <p>
            Many campers and volunteers have additional success through personal
            fundraising sites. The Youth Rally is already establised with{" "}
            <span className="font-weight-bold">FirstGiving</span>.{" "}
            <span className="font-weight-bold greenText">
              <a
                href="http://info.firstgiving.com/individuals/create-a-page/"
                className="links"
              >
                Click here
              </a>
            </span>
             to create your own grassroots fundraising page with FirstGiving
            today! Just set up your page, tell your story, and share it with
            family and friends. Funds raised will be put towards your
            registration/travel balance. Any funds raised above your own
            registration/travel costs will go to support another camper in need.
          </p>
          <h2>How do I sponsor a camper?</h2>
          <p>There are two ways to sponsor a camper and/or volunteer:</p>
          <ol className="mb-0">
            <li>
              <span className="font-weight-bold greenText">SEND A CHECK </span>
              Please indicate in a memo if you intend to sponsor a specific
              camper, volunteer, or program activity. Checks should be made out
              to the "
              <span className="font-weight-bold font-italic">
                Youth Rally Committee, Inc.
              </span>
              " and mailed to:
              <p className="text-center purpleText">
                Youth Rally Committee, Inc
              </p>
              <p className="text-center purpleText">C/O Mary Beth Akers</p>
              <p className="text-center purpleText">949 Chestnut Oak Dr</p>
              <p className="text-center purpleText">St. Charles, MO 63303</p>
            </li>
            <li>
              <span className="font-weight-bold greenText">
                DONATE USING YOUR CREDIT CARD OR PAYPAL ACCOUNT{" "}
              </span>
              Credit Card and PayPal donations can be made via the link below.
              If sponsoring a child or volunteer, please indicate who upon
              "checkout".
              <div className="row justify-content-center">
                <form
                  action="https://www.paypal.com/cgi-bin/webscr"
                  method="post"
                  target="_top"
                >
                  <input type="hidden" name="cmd" value="_s-xclick" />
                  <input
                    type="hidden"
                    name="hosted_button_id"
                    value="PWWKYKVHHVD7E"
                  />
                  <input
                    type="image"
                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                    name="submit"
                    alt="PayPal - The safer, easier way to pay online!"
                  />
                  <img
                    alt="paypal"
                    className="mx-auto d-block"
                    src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                  />
                </form>
              </div>
            </li>
          </ol>
          <h2>Where do I send a check?</h2>
          <p>
            Please indicate in a memo if you intend to sponsor a specific
            camper, volunteer, or program activity. Checks should be made out to
            the "
            <span className="font-weight-bold font-italic">
              Youth Rally Committee, Inc.
            </span>
            " and mailed to:
          </p>
          <p className="text-center purpleText">Youth Rally Committee, Inc</p>
          <p className="text-center purpleText">C/O Mary Beth Akers</p>
          <p className="text-center purpleText">949 Chestnut Oak Dr</p>
          <p className="text-center purpleText">St. Charles, MO 63303</p>
          <h2>What are some other great resources?</h2>
          <div className="text-center">
            <p className="font-weight-bold">
              Official Youth Rally (public) FaceBook page:
            </p>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.facebook.com/YouthRallyInc/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/youth_rallyrounded-1.png"
                  alt="youth_rally_logo"
                />
              </a>
            </div>
            <p className="font-weight-bold">
              Other great resources for information:
            </p>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.ostomy.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/uoaa.jpg"
                  alt="uoaa"
                />
              </a>
            </div>
            <p className="purpleText text-center">
              <a
                href="https://www.self.com/story/crohns-disease-symptoms-to-know/"
                className="links"
              >
                13 Crohn’s Disease Symptoms, From Diarrhea to Beyond
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.crohnsandcolitis.com/find-a-gastroenterologist"
                className="links"
              >
                Find a Gastroenterologist
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.medicareadvantage.com/resources/health-care-cost-assistance-resource-guide"
                className="links"
              >
                Health Care Cost Assistance Guide
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.verywellhealth.com/crohns-disease-treatment-options-1943057"
                className="links"
              >
                How Crohn's Disease Is Treated
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.crohnscolitisfoundation.org/what-is-ibd/medication/complementary-alternative-medicine"
                className="links"
              >
                Complementary Medicine
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.homeadvisor.com/r/how-to-create-a-healthy-home-for-autoimmune-disease-symptoms/"
                className="links"
              >
                How to Create a Healthy Home Environment that Will Soothe
                Autoimmune Disease Symptoms
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.ucsfhealth.org/education/nutrition-tips-for-inflammatory-bowel-disease"
                className="links"
              >
                Nutrition Tips for Inflammatory Bowel Disease
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.ibdrelief.com/learn/complications-of-ibd/complications-of-crohns-disease"
                className="links"
              >
                Complications of Crohn's disease
              </a>
            </p>
            <p className="purpleText text-center">
              <a
                href="https://www.drugwatch.com/health/digestive-health/"
                className="links"
              >
                Digestive Health
              </a>
            </p>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.spinabifidaassociation.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/SBA.png"
                  alt="SBA"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.wocn.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/WOC.png"
                  alt="WOC"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.bladderexstrophy.com/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/ABE.png"
                  alt="ABE"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.crohnscolitisfoundation.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/CCFA.png"
                  alt="CCFA"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.j-pouch.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/JPG.png"
                  alt="JPG"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.ostogroup.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/OG.png"
                  alt="OG"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://pullthrough.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/PTN.png"
                  alt="PTN"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://globalgenes.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/GG.png"
                  alt="GG"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.acscan.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/ACSAN.png"
                  alt="ACSAN"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://rarediseases.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/NORD.png"
                  alt="NORD"
                />
              </a>
            </div>
            <div className="partner-img-sm mx-auto">
              <a href="https://www.stomabags.com/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/stoma.png"
                  alt="stoma"
                />
              </a>
            </div>

            <div className="partner-img-sm mx-auto">
              <a href="https://www.simplymedical.com/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/simpmed.png"
                  alt="simplymed"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);
