import React from "react";

function ContactForm () {
    return (
        <div id="ContactForm" className="contact">
          <h2 className="section"><span className="section-text">CONTACT</span></h2>
          <p className="footerText">Want to get in touch about an opportunity you think I would be a good fit for?</p>
          <a href="mailto:marie.strand00@gmail.com"><i className="footerIcon selected fa-solid fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/brooke-strand-89883418b/"><i className="footerIcon fa-brands fa-linkedin-in"></i></a>
          <a href="https://github.com/m-strand"><i className="footerIcon fa-brands fa-github"></i></a>
        </div>
    )
}

export default ContactForm;