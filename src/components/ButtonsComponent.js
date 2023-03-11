import React from "react";
import {MdEmail} from 'react-icons/md'
import {SiLinkedin} from 'react-icons/si'

export default function Buttons() {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button type="button" class="btn btn-light d-flex justify-content-center align-items-center border border-dark m-2 col-4 rounded-3">
          <MdEmail className="m-1" />
            <a className="text-decoration-none text-dark" href="mailto: contact.johnseth@gmail.com">
              <span>Email</span>
            </a>
        </button>

        <button type="button" class="btn btn-primary d-flex justify-content-center align-items-center m-2 col-4 rounded-3">
          <SiLinkedin className="m-1"/>
            <a className="text-decoration-none text-light" href="https://www.linkedin.com/in/john-seth-salazar-028728149/" target="_blank">
              <span>LinkedIn</span>
            </a>
        </button>
      </div>
    </>
  );
}
