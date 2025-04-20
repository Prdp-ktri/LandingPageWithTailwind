import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center border-t-2 py-4">
        <div className="flex space-x-6 mb-2">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener norefererror"
            aria-label="Visit our Facebook Page"
          >
            <RiFacebookBoxFill />
          </a>

          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener norefererror"
            aria-label="Visit our Twitter Page"
          >
            <RiTwitterFill />
          </a>

          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener norefererror"
            aria-label="Visit our Instagram Page"
          >
            <RiFacebookBoxFill />
          </a>
        </div>

        <p className="text-sm">&copy; 2024 ADANI Real Estate. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer