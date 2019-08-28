import React from "react";

import Navbar from "./../components/Navbar";
import Header from "./../components/Header";

export default () => (
  <div>
    <Navbar />

    <Header title="Resources" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <h2 className="greenText">
            Use these tools to raise Youth Rally awareness:
          </h2>
          <h2 className="purpleText text-center">
            The 2019 Youth Rally Brochure:
          </h2>
          <p className="purpleText text-center">
            <a href="/assets/documents/2019-BROCHURE_1.jpg">
              2019 BROCHURE - front/back
            </a>
          </p>
          <p className="purpleText text-center">
            <a href="/assets/documents/2019-BROCHURE_2.jpg">
              2019 BROCHURE - center content
            </a>
          </p>
          <h2 className="purpleText text-center">
            Youth Rally Promotional Video:
          </h2>
          <p className="purpleText text-center">
            <a href="https://youthrallyphotos.smugmug.com/YouthRallyPhotos/AdditionalMaterials/OtherRallyInformation/i-mDm8qF3/A ">
              Youth Rally Promotional Video
            </a>
          </p>

          <h2 className="greenText">Links to Other Great Sites And Pages:</h2>
          <div className="text-center">
            <p className="font-weight-bold">
              Official Youth Rally (public) FaceBook page:
            </p>
            <a href="https://www.facebook.com/YouthRallyInc/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/youth_rallyrounded-1.png"
                alt="youth_rally_logo"
              />
            </a>
            <p className="font-weight-bold">
              Other great resources for information:
            </p>
            <a href="https://www.ostomy.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/uoaa.jpg"
                alt="uoaa"
              />
            </a>

            <a href="https://www.spinabifidaassociation.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/SBA.png"
                alt="SBA"
              />
            </a>

            <a href="https://www.wocn.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/WOC.png"
                alt="WOC"
              />
            </a>

            <a href="https://www.bladderexstrophy.com/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/ABE.png"
                alt="ABE"
              />
            </a>

            <a href="https://www.ccfa.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/CCFA.png"
                alt="CCFA"
              />
            </a>

            <a href="https://www.j-pouch.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/JPG.png"
                alt="JPG"
              />
            </a>

            <a href="https://www.ostogroup.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/OG.png"
                alt="OG"
              />
            </a>

            <a href="https://pullthrough.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/PTN.png"
                alt="PTN"
              />
            </a>

            <a href="https://theacpa.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/ACPA.png"
                alt="ACPA"
              />
            </a>
            <a href="https://globalgenes.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/GG.png"
                alt="GG"
              />
            </a>

            <a href="https://www.acscan.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/ACSAN.png"
                alt="ACSAN"
              />
            </a>

            <a href="https://rarediseases.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/NORD.png"
                alt="NORD"
              />
            </a>

            <a href="https://growingpains.org/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/GP.png"
                alt="GP"
              />
            </a>

            <a href="https://www.stomabags.com/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/stoma.png"
                alt="stoma"
              />
            </a>

            <a href="https://www.simplymedical.com/">
              <img
                className="resource-img mx-auto d-block mb-md-1"
                src="/assets/images/resources/simplymedical.png"
                alt="simplymed"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
