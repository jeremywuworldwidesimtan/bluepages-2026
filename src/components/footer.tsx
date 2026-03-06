import {
  SiGithub,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row justify-between items-center px-4 py-6 mt-6">
        <div className="text-center text-sm lg:text-lg lg:text-left">
          <p>&copy; 2021-{new Date().getFullYear()} bluepages. All rights reserved. </p>
          <p>Made with 💙 by Alan & Emily.</p>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="">Terms</Link>
          <Link to="">Privacy</Link>
          <Link to="https://github.com/jeremywuworldwidesimtan" target="_blank">
            <SiGithub />
          </Link>
          <Link to="https://www.youtube.com/@alantan1008" target="_blank">
            <SiYoutube />
          </Link>
          <Link to="https://www.instagram.com/fabriziorom" target="_blank">
            <SiInstagram />
          </Link>
        </div>
      </div>
    </>
  );
}
