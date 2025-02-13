import React, { useState, Fragment } from "react";

import { Form, Button } from "react-bootstrap";

import { Header, TwoColList } from "./../Elements";

import Fuse from "fuse.js";

const FaqSearch = () => {

  const [questionNumbers, setQuestionNumbers] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const [inputValue, setInputValue] = useState('');
  const [results, setResults] = useState([]);

  const questions = ["expect to gain from their experience", "have to have an ostomy to attend", "I have never had surgery", "cost price", "sponsorship scholarship financial aid", "fundraise", "sponsor a camper", "Where do I send a check", "other resources"]

  const content = {
    0: <div>
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
    </div>,
    1: <div>
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
    </div>,
    2: <div>
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
    </div>,
    3: <div>
      <h2>How much does camp cost?</h2>
      <p>There are two costs associated with Youth Rally Participation:</p>
      <ol>
        <li>
          <span className="font-weight-bold">Registration.</span>{" "}
          Registration cost for all campers is $600 and $250 for our
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
    </div>,
    4: <div>
      <h2>Is sponsorship available?</h2>
      <p>Yes! SPONSORSHIP is available for ALL CAMPERS in need!</p>
      <p>
        Thanks to the generous efforts of Youth Rally volunteers, donors,
        and partners, in over 40 years of existence no child has ever been
        turned away due to lack of financial resources. The sponsorship
        application form is embedded in the camper application. Simply
        complete the application and state your need as prompted for
        registration ($600) and/or travel (variable) assistance. No coupon
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
    </div>,
    5: <div>
      <h2>How do I fundraise on my own?</h2>
      <p>
        The Youth Rally encourages all participants to do some
        fundraising to support sponsorship for themselves or others. Often local/regional clubs and charitable organizations
        (Kiwanis, Rotary, church groups, Nursing organizations, Hospitals,{" "}
        <a
          href="https://www.ostomy.org/ASGs_with_Websites.html/"
          className="links"
        >
          UOAA affilliates
        </a>
        , etc.) are willing to partner to support this type of effort.
      </p>
      <p>
        Many Youth Rally participants will create Facebook fundraisers, or utilize
        other online tools. There are many ways to raise funds - creativity is
        encouraged! Host a dinner, have a yard sale, partner with a local
        business, or simply ask friends and family for a
        small donation to support an amazing cause!
      </p>
    </div>,
    6: <div>
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
            DONATE USING YOUR CREDIT CARD OR BANK ACCOUNT{" "}
          </span>
          Credit Card and Babk Account donations can be made via the link below.
          If sponsoring a child or volunteer, please add a donation note/comment and indicate the person.
          <div className="row justify-content-center mx-auto text-center">
            <a
              href="#donate"
              className="btn btn-primary green-btn mb-2 mt-1"
              id="campers-btn"
              rel="noreferrer noopener"
            >DONATE</a>
          </div>
        </li>
      </ol>
    </div>,
    7: <div>
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
    </div>,
    8: <div>
      <h2>What are some other great resources?</h2>
      <div className="text-center">
        <p className="font-weight-bold">
          Official Youth Rally (public) FaceBook page:
        </p>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.facebook.com/YouthRallyInc/" target="_blank">
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
          <a href="https://www.ostomy.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/uoaa.jpg"
              alt="uoaa"
            />
          </a>
        </div>
        <p className="purpleText text-center">
          <a
            href="https://www.self.com/story/crohns-disease-symptoms-to-know/" target="_blank"
            className="links"
          >
            13 Crohn’s Disease Symptoms, From Diarrhea to Beyond
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.crohnsandcolitis.com/find-a-gastroenterologist" target="_blank"
            className="links"
          >
            Find a Gastroenterologist
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.medicareadvantage.com/resources/health-care-cost-assistance-resource-guide" target="_blank"
            className="links"
          >
            Health Care Cost Assistance Guide
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.verywellhealth.com/crohns-disease-treatment-options-1943057" target="_blank"
            className="links"
          >
            How Crohn's Disease Is Treated
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.crohnscolitisfoundation.org/what-is-ibd/medication/complementary-alternative-medicine" target="_blank"
            className="links"
          >
            Complementary Medicine
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.homeadvisor.com/r/how-to-create-a-healthy-home-for-autoimmune-disease-symptoms/" target="_blank"
            className="links"
          >
            How to Create a Healthy Home Environment that Will Soothe
            Autoimmune Disease Symptoms
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.ucsfhealth.org/education/nutrition-tips-for-inflammatory-bowel-disease" target="_blank"
            className="links"
          >
            Nutrition Tips for Inflammatory Bowel Disease
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.ibdrelief.com/learn/complications-of-ibd/complications-of-crohns-disease" target="_blank"
            className="links"
          >
            Complications of Crohn's disease
          </a>
        </p>
        <p className="purpleText text-center">
          <a
            href="https://www.drugwatch.com/health/digestive-health/" target="_blank"
            className="links"
          >
            Digestive Health
          </a>
        </p>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.mitrofanoffsupport.org.uk/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/mitrofanoff.png"
              alt="Mitrofanoff Support"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.spinabifidaassociation.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/SBA.png"
              alt="SBA"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.wocn.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/WOC.png"
              alt="WOC"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.bladderexstrophy.com/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/ABE.png"
              alt="ABE"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.crohnscolitisfoundation.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/CCFA.png"
              alt="CCFA"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.j-pouch.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/JPG.png"
              alt="JPG"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.ostogroup.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/OG.png"
              alt="OG"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.pullthrunetwork.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/PTN1.png"
              alt="PTN"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://globalgenes.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/GG.png"
              alt="GG"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.acscan.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/ACSAN.png"
              alt="ACSAN"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://rarediseases.org/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/NORD.png"
              alt="NORD"
            />
          </a>
        </div>
        <div className="partner-img-sm mx-auto">
          <a href="https://www.stomabags.com/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/stoma.png"
              alt="stoma"
            />
          </a>
        </div>

        <div className="partner-img-sm mx-auto">
          <a href="https://www.simplymedical.com/" target="_blank">
            <img
              className="resource-img rounded mx-auto d-block mb-md-1"
              src="/assets/images/resources/simpmed.png"
              alt="simplymed"
            />
          </a>
        </div>
      </div>
    </div>
  };

  // Initialize Fuse.js
  const fuse = new Fuse(questions, {
    findAllMatches: true,
    threshold: 0.6, // Adjust this value for fuzziness (0.0 - exact, 1.0 - very fuzzy)
    distance: 100
  });

  const handleReorder = (smallArray) => {
    // Example: Shuffle the order array
    const filteredArray = questionNumbers.filter(item => !smallArray.includes(item));
    const concatenatedArray = smallArray.concat(filteredArray);
    setQuestionNumbers(concatenatedArray);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent the default action if necessary (like form submission)
      handleSearch();
    }
  }

  // Function to handle search
  const handleSearch = () => {
    // Perform search
    const result = fuse.search(inputValue);
    const resultArray = result.map(result => result.refIndex);
    setResults(resultArray);
    handleReorder(resultArray);
  };

  return (

    <Fragment>
      <Header title="FAQs" />
      <div id="content">
        <div className="row pt-2 justify-content-center">
          <Form.Control
            className="ml-3 mr-1 pr-1 col-9"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)} // Update state on input change
            onKeyDown={handleKeyDown}
          />
          <Button className="ml-1 mr-3" id="donate" type="submit" name="submit" onClick={handleSearch}>
            Search
          </Button>
        </div>
        <div className="row pt-2">
          <div className="col-md-10 mx-auto">
            {questionNumbers.map(id => (
              <div key={id} id={`div-${id}`}>
                {content[id]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FaqSearch;