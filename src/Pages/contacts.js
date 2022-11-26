import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {
  faTwitter,
  faSquareGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contacts = () => (
  <div className="text-white flex flex-col items-center gap-8 bg-cornflower-blue h-full pt-10">
    <h2 className="font-bold text-2xl text-center">
      Recillah Khamala Contact Information
    </h2>
    <div className="max-w-3xl flex flex-col items-center gap-8">
      <p className="">
        Do you have any questions or do you want to say Hello?
        <br />
        Please reach out;
      </p>
      <ul className="gap-5">
        <li>
          <span className="font-black">Email: </span>
          <span className="">recillahk@gmail.com</span>
        </li>
        <li>
          <span className="font-black">Phone No.: </span>
          <span className="">+254 (0) 728 108 451</span>
        </li>
        <li>
          <span className="font-black">Box Address: </span>
          <span className="">P.O BOX 105219 - 00101, Nairobi, Kenya</span>
        </li>
        <li>
          <span className="font-black">Address: </span>
          <span className="">
            Belmont Court, Argwings Kodheck Road, Nairobi
          </span>
        </li>
      </ul>
      <div className="social-card flex flex-wrap justify-center py-8 gap-4 ">
        <a
          className="px-2 py-1 flex gap-1 items-center text-xl font-bold bg-black hover:scale-110"
          href="https://github.com/Recillah-Khamala"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon
            className="social-icon github"
            icon={faSquareGithub}
          />
          <span>GitHub</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-xl font-bold bg-[#de5246] hover:scale-110"
          href="mailto:recillahk@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="email" icon={faEnvelope} />
          <span>Email</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-xl font-bold bg-orange-500 hover:scale-110"
          href="https://www.linkedin.com/in/recillah-Khamala/"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="linkedin" icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        <a
          className="px-2 py-1 flex gap-1 items-center text-xl font-bold bg-yellow-500 hover:scale-110"
          href="https://twitter.com/recillahk"
          target="_blank"
          rel="noreferrer"
        >
          <FontAwesomeIcon className="social-icon twitter" icon={faTwitter} />
          <span>Twitter</span>
        </a>
      </div>
    </div>
  </div>
);

export default Contacts;
