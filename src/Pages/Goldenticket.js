import React, { Fragment } from "react";

import { Header, TwoColTextPhoto, Photograph } from "./../Elements/";

export default () => (
  <Fragment>
    <Header title="Golden Ticket Fundraiser" />

    <div id="content">
      <div className="row">
        <div className="col-md-10 mx-auto pt-2 pb-1">
          <p>How it works - Choose which prize you want your tickets for and make your donation accordingly. Limited tickets are available for each prize.
          </p>
          <ul>
            <li><span className="purpleText font-weight-bold">$5 Golden Ticket</span> - For $5 donation at this ticket price you will be entered to win a pair of hand-painted wooden skateboards promoting the message of Youth Rally. <span className="font-weight-bold">100 tickets available</span>. Board were designed and donated by former Youth Rally camper, now counselor, Isabella Prescott.
            </li>
            <Photograph
              imageSource={"/assets/images/goldenticket/skateboards.png"}
              imageAlt={"skateboards"}
            />
            <li><span className="purpleText font-weight-bold">$35 Golden Ticket</span> - For every $35 donation at this ticket price you will be entered to win one of 2 hand-signed Taylor Swift collectible items. The first donor selected will have their choice of a display acoustic guitar signed by Taylor Swift or a Taylor Swift Hand Signed and Framed CD Album Display. The second winner selected will receive the item not chosen by the first. All items include a certificate of authenticity or a hologram. <span className="font-weight-bold">200 tickets available</span>.
            </li>
            <Photograph
              imageSource={"/assets/images/goldenticket/taylorswift.png"}
              imageAlt={"taylorswift"}
            />
            <li><span className="purpleText font-weight-bold">$100 Golden Ticket</span> - For every $100 donation at this ticket price you will be entered to win 1 of 4 unique vacation packages. <span className="font-weight-bold">100 tickets available</span>.
              <Photograph
                imageSource={"/assets/images/goldenticket/vacation.png"}
                imageAlt={"vacations"}
              />
              <ul>
                <li><span className="font-weight-bold">All-Inclusive Paradise in Cabo</span> - Escape to the sun-kissed shores of Cabo with our exclusive 5-night all-inclusive retreat for 2. Immerse yourself in the vibrant culture, relax on pristine beaches, and indulge in delectable cuisine without a worry in the world. This unforgettable journey promises endless moments of romance, adventure, and rejuvenation, making it the perfect escape for you and your loved one.{" "}
                  <span className="greenText font-weight-bold">
                    <a className="links" target="_blank" href="https://www.hgavacations.com/cabo-all-inclusive.html">
                      More information here
                    </a>
                  </span>
                </li>
                <li><span className="font-weight-bold">Tuscan Retreat</span> - Savor the flavors of Tuscany with a 6-night escape for 2, featuring a cooking show experience. Immerse yourself in the rich cultural tapestry of Italy, explore historic landscapes, and master the art of Tuscan cuisine. This culinary adventure promises to be a feast for the senses, blending food, culture, and romance. Not only will you get to experience Tuscany in person, but we'll also ship 6 bottles of premier Tuscan wine to your doorstep!{" "}
                  <span className="greenText font-weight-bold">
                    <a className="links" target="_blank" href="https://www.hgavacations.com/tuscany-for-2-with-wine.html">
                      More information here
                    </a>
                  </span>
                </li>
                <li><span className="font-weight-bold">Enchanting Sedona Getaway</span> - Indulge in a tranquil escape amid the red rock wonders of Sedona with our exclusive 3-night retreat for 2 at the luxurious Wilde Resort and Spa. Nestled in the heart of Arizona's mesmerizing landscape, this intimate getaway promises relaxation and rejuvenation. Immerse yourselves in the breathtaking beauty of Sedona, explore the mystical energy of its vortex sites, and unwind in style at the resort's spa facilities. This enchanting escape is designed for those seeking a perfect blend of nature's wonders and the ultimate in luxury hospitality, ensuring a memorable and revitalizing experience for you and your companion.{" "}
                  <span className="greenText font-weight-bold">
                    <a className="links" target="_blank" href="https://www.hgavacations.com/sedona-arizona.html">
                      More information here
                    </a>
                  </span>
                </li>
                <li><span className="font-weight-bold">Bourbon Bliss in Kentucky</span> - Embark on a spirited adventure with our 3-night getaway for 2 in Lexington, Kentucky, where the heart of bourbon country awaits. Revel in the artistry of Kentucky's finest distilleries with an exclusive guided tour, immersing yourselves in the rich heritage of this iconic American spirit. As the sun sets, indulge in a culinary delight with a dinner at the renowned Jeff Ruby Steakhouse, offering a perfect blend of exceptional cuisine and warm hospitality. This trip promises a harmonious fusion of bourbon exploration, culinary excellence, and the charming ambiance of Lexington, creating an unforgettable experience for you and your companion.{" "}
                  <span className="greenText font-weight-bold">
                    <a className="links" target="_blank" href="https://www.hgavacations.com/kentucky-bourbon-bliss.html">
                      More information here
                    </a>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
          <p>Proceeds from this raffle support the Youth Rally, a 100% volunteer-run 501(c)(3) organization.</p>
          <p>Winning tickets will be drawn on December 5th!</p>
          <div className="row justify-content-center">
            <a
              href="https://youthrally.harnessgiving.org/events/3443"
              className="btn btn-primary gold-btn mb-2 mt-1"
              id="campers-btn"
              target="_blank"
              rel="noreferrer noopener"
            >
              CLICK HERE TO PURCHASE YOUR GOLDEN TICKETS TODAY
            </a>
          </div>
        </div>
      </div>
    </div >
  </Fragment >
);
