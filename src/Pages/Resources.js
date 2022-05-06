import React, { Fragment } from "react";

import { Header } from "./../Elements";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";

export default () => (
  <Fragment>
    <Header title="Resources" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1">
          <h2 className="greenText">
            Use these tools to raise Youth Rally awareness:
          </h2>
          <h2 className="purpleText text-center">
            The 2022 Youth Rally Brochure:
          </h2>
          <p className="purpleText text-center">
            <a href="/assets/documents/YRC2022.pdf" target="_blank" rel="noopener noreferrer" className="links">
              Click here to open the 2022 BROCHURE
            </a>
            </p>
            <p className="purpleText text-center">
           <a href="/assets/documents/YRC2022.pdf" download className="links"> <FontAwesomeIcon
                className="my-auto"
                icon={faFileDownload}
              />
              {' '}Click here to download the 2022 BROCHURE{' '}
              <FontAwesomeIcon
                className="my-auto"
                icon={faFileDownload}
              />
            </a>
          </p>
          <h2 className="purpleText text-center">
            Youth Rally Promotional Video:
          </h2>
          <p className="purpleText text-center">
            <a
              href="https://youthrallyphotos.smugmug.com/YouthRallyPhotos/AdditionalMaterials/OtherRallyInformation/i-mDm8qF3/A"
              className="links"
            >
              Youth Rally Promotional Video
            </a>
          </p>

          <h2 className="greenText">Links to Other Great Sites And Pages:</h2>
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
                10 Crohn’s Disease Symptoms, From Diarrhea to Beyond
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
              <a href="https://www.ccfa.org/">
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
              <a href="https://theacpa.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/ACPA.png"
                  alt="ACPA"
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
              <a href="https://growingpains.org/">
                <img
                  className="resource-img rounded mx-auto d-block mb-md-1"
                  src="/assets/images/resources/GP.png"
                  alt="GP"
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
