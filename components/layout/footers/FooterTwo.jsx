import React from "react";
import FooterLinks from "../components/FooterLinks";
import Socials from "../components/Socials";
import Image from "next/image";

export default function FooterTwo() {
  return (
    <footer className="footer -type-1 -dark" style={{ backgroundColor: '#054920', color: 'white' }}>
      <div className="footer__main">
        <div className="footer__bg">
          <Image
            width="1800"
            height="627"
            src="/img/footer/1/bg.svg"
            alt="image"
          />
        </div>

        <div className="container">
          <div className="footer__info">
            <div className="row y-gap-20 justify-between">
              <div className="col-auto">
                <div className="row y-gap-20 items-center">
                  <div className="col-auto">
                    <i className="icon-headphone text-50"></i>
                  </div>

                  <div className="col-auto">
                    <div className="text-20 fw-500">
                      Hubungi Kami 
                    </div>
                    <div className="text-20 fw-500">
                      <span className="">
                        <a href="https://wa.me/6285163537020?text=halo%20admin%20saya%20ingin%20booking%20tour%2C%20mohon%20informasinya." style={{ color: 'white' }}>
                          +62-851-6353-7020
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div className="footerSocials">
                  <div className="footerSocials__title">Follow Us</div>

                  <div className="footerSocials__icons">
                    <Socials />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer__content">
            <div className="row y-gap-40 justify-between">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-20 fw-500">Contact</h4>

                <div className="y-gap-10 mt-20">
                  <a className="d-block" href="#">
                    Permata Savira Regency Blok D No 4, Malang, Jawa Timur.
                  </a>
                  <a className="d-block" href="#">
                    hello@sobatbermain.id
                  </a>
                </div>
              </div>

              <FooterLinks />

              <div className="col-lg-3 col-md-6">
                <h4 className="text-20 fw-500">Newsletter</h4>
                <p className="mt-20">
                  Subscribe to the free newsletter and stay up to date
                </p>

                <div className="footer__newsletter">
                  <input type="Email" placeholder="Your email address" />
                  <button>Send</button>
                </div>

                <h4 className="text-20 fw-500 mt-30">Mobile Apps</h4>

                <div className="mt-10">
                  <a className="d-flex items-center" href="#">
                    <i className="icon-apple text-16 mr-10"></i>
                    iOS App
                  </a>

                  <a className="d-flex items-center mt-10" href="#">
                    <i className="icon-android text-16 mr-10"></i>
                    Android App
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__bottom">
          <div className="row y-gap-5 justify-between items-center">
            <div className="col-auto">
              <div>© Copyright CV. INDO DINAR NUSANTARA {new Date().getFullYear()}</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
