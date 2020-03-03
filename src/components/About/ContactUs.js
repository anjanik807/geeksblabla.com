import React from "react"

import Contact from "assets/contact.svg"
import Send from "assets/send.svg"

export default () => {
  return (
    <div className="notification">
      <Contact className="notif" />
      <div className="content ">
        <h1> Contact us</h1>
        <p> We love to hear from you, reach out to us </p>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          data-netlify-honeypot="bot-field"
          action="/thanks"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />
          <input placeholder="Name" type="text" name="name" required />
          <input placeholder="Email" type="email" name="email" required />
          <textarea
            placeholder="Your Message"
            rows="5"
            name="message"
            required
          ></textarea>
          <div className="actions">
            <button type="submit" className="button">
              <Send width="20" /> Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
