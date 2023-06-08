import office from "../images/spaces-lounge.jpg";
import { Container } from "react-bootstrap";

export default function SingleProduct() {
  return (
    <Container>
      <div className="mt-5">
        <div className="row">
          <div className="col-md-6">
            <div>
              <h2>Contact</h2>

              <p>
                I am always open for new opportunities, please do not hesitate
                to contact me.
              </p>

              <div className="mt-5">
                <div>
                  <a
                    className=" button-pointer-color"
                    href="mailto:gonlonge@icloud.com"
                  >
                    gonlonge@icloud.com
                  </a>
                </div>
                <div className="mt-4">
                  <a className=" button-pointer-color" href="tel:+97679808">
                    Phone: 976 79 808
                  </a>
                </div>
                <div className="mt-4 button-pointer-color">
                  <a
                    className=" button-pointer-color"
                    href="https://www.google.com/maps/place/Regus+-+Stavanger,+2020+Forus,+Forusparken+2,+Ground+floor,+4031+Stavanger/@58.890748,5.7382606,17z/data=!4m6!3m5!1s0x463a35d6d5841b73:0x7dc29788af15f0d4!8m2!3d58.890748!4d5.7382606!16s%2Fg%2F11c2j1b_1b"
                  >
                    Regus - Stavanger
                  </a>
                </div>
                <div className="my-4 button-pointer-color">
                  <a
                    className=" button-pointer-color"
                    href="https://goo.gl/maps/ZLWVZmw7SscnDHJ78"
                  >
                    Spaces - Oslo Nydalen
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <img src={office} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
