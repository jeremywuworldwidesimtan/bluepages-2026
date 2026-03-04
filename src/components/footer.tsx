import {
  SiGithub,
  SiInstagram,
  SiYoutube,
} from "@icons-pack/react-simple-icons";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col gap-2 lg:flex-row justify-between items-center px-4 py-6 mt-6">
        <div className="text-center text-sm lg:text-lg lg:text-left">
          <p>&copy; 2021-{new Date().getFullYear()} bluepages. All rights reserved. </p>
          <p>Made with 💙 by Alan & Emily.</p>
        </div>
        <div className="flex gap-4 items-center">
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">
            <SiGithub />
          </a>
          <a href="">
            <SiYoutube />
          </a>
          <a href="">
            <SiInstagram />
          </a>
        </div>
      </div>
    </>
  );
}
