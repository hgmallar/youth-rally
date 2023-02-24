import React, { Fragment } from "react";

import { Header, TwoColImgText } from "./../Elements";

export default () => (
  <Fragment>
    <Header title="Our Leadership" />

    <div id="content">
      <div className="col-md-10 mx-auto pt-2 pb-1">
        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={
            "ANNIE CARVER - Committee Chair, Diversity Equity and Inclusion"
          }
          content={[
            {
              class: "font-italic",
              text: "Annie first joined the Youth Rally as a camper in 2013 and as a counselor in 2017. In her time as a counselor she has helped to include LGBTQIA+ as a program offering at Youth Rally for those who choose to participate. Annie was born with cloacal malformation and had a kidney transplant at 18. Annie lives in Baltimore with her partner and dog where she works as a special education attorney at a local hospital.",
            },
          ]}
          src="/assets/images/leaders/anna.png"
          alt="Annie Carver"
        />

        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={"PAUL HASTINGS – Chairman of the Board of Directors"}
          content={[
            {
              class: "font-italic",
              text: "Paul has been a volunteer with the Youth Rally since first joining the team as a counselor in 1987. He has served the organization in many roles since, including current Chair of the Board of Directors and past President and CEO. A passionate patient advocate, Paul has been in the pharmaceutical industry since 1984. He is currently President and CEO of Nkarta Therapeutics and Chair of the Biotechnology Industry Association where he also chairs the Patient Advocacy Committee of the Board. Paul lives an active life traveling the globe. He was born with Crohn’s Disease and has had an ileostomy since 1979.",
            },
          ]}
          src="/assets/images/leaders/paul.png"
          alt="Paul Hastings"
        />

        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={"EMILY MALLAR – President and Chief Executive Officer"}
          content={[
            {
              class: "font-italic",
              text: "Emily first joined the Youth Rally as a counselor in 2003 and has played a number of roles in program, recruitment, marketing, and fundraising since. She currently serves as the President and CEO of the organization and Chair of the Fundraising Committee. Emily was born with a rare form of fistulizing Crohn's Disease and has lived a vibrant life with an ileostomy since the age of 20. Emily lives in Ithaca, NY with her husband, son, and various 4-legged friends where she serves as a nursing administrator for the local health care system.",
            },
          ]}
          src="/assets/images/leaders/emily.png"
          alt="Emily Mallar"
        />

        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={
            "MARY BETH AKERS – Vice President and Chief Financial Officer"
          }
          content={[
            {
              class: "font-italic",
              text: "Mary Beth was diagnosed with Ulcerative Colitis at the age of 14 and at 17 required ileostomy surgery. Almost 25 years later she was diagnosed with Crohn’s Disease. Mary Beth learned about the Youth Rally 5 years later after joining her local ostomy support group in St. Louis, MO. She has played a number of roles at the Youth Rally since her first year as a counselor in 1990 including registrar, travel coordinator, treasurer, and Chief Financial Officer. In her day job, Mary Beth is a middle school math teacher.",
            },
          ]}
          src="/assets/images/leaders/marybeth.png"
          alt="Mary Beth Akersr"
        />

        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={"ERIC ENG – Board Member; Committee Chair, Recruitment"}
          content={[
            {
              class: "font-italic",
              text: "Eric first joined the Youth Rally as a camper in 1995. In 2004 he joined the volunteer team as a counselor and has since played a number of additional roles in support of the program and administration teams. Eric currently serves as the Chair of the Recruitment Committee. Eric was born with VACTERL and Imperforate Anus and has lived with a continent diversion since the age of 13. Eric lives in St. Louis, MO where he serves as an IT Product Manager in the aerospace industry and remains active in his local ostomy support group.",
            },
          ]}
          src="/assets/images/leaders/eric.png"
          alt="Eric Eng"
        />

        <TwoColImgText
          colSize1={8}
          colSize2={4}
          header={"MICHAEL GERALD"}
          content={[
            {
              class: "font-italic",
              text: "Michael first found his Youth Rally family in 1999 as a camper and later in 2006 as a counselor. For many years Michael has had the opportunity to utilize his unique skillset in social services as one of two Resource Counselors on site during rally. Michael currently resides in Providence, UT, where he serves on the Youth Rally Board of Directors while acting as Assistant Professor of Rehabilitation Counseling as a licensed clinical mental health counselor (LCMHC).",
            },
          ]}
          src="/assets/images/leaders/michael.png"
          alt="Michael Gerald"
        />

<TwoColImgText
          colSize1={8}
          colSize2={4}
          header={"APRIL GIMLEN"}
          content={[
            {
              class: "font-italic",
              text: "April lives in Alameda, CA and started volunteering at the Youth Rally in 1986 shortly after the birth of her daughter who was born with cloacal exstrophy requiring both a urostomy and colostomy at birth.  April has served as a counselor, program chairperson, fundraiser and speaker on behalf of the Youth Rally. She also was the founder of Parents of Ostomy Children and the South Bay Support Group for High Risk Infants.  These groups provided support for families dealing with long term health conditions of their children.  She previously worked in high school student activities and now spends her free time enjoying her grandchildren and travel.",
            },
          ]}
          src="/assets/images/leaders/april.png"
          alt="April Gimlen"
        />
      </div>
    </div>
  </Fragment>
);
