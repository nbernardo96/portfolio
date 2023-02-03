import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="contact-info">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <h3>Stay Connected!</h3>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}
              >
                <p>
                  Feel free to send me an{" "}
                  <a href="mailto:nicolebernardo96@gmail.com">email</a>. 👋
                </p>
              </ScrollAnimation>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Contact;
