import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import Container from "../ContainerWrapper";

const Footer = () => {
  return (
    <footer className="dark:bg-neutral-900 bg-zinc-100">
      <Container>
        <div className="dark:text-gray-400 py-5">
          <div className="md:space-y-0 space-y-10 md:flex justify-between items-center">
            <div className="md:w-1/4 space-y-3">
              <h2 className="text-2xl font-semibold ">Crypto World</h2>
              <p className="text-sm text-left font-light dark:text-gray-400">
                Crypto World is your one-stop destination for up-to-date
                cryptocurrency prices and the latest news and information.
              </p>
            </div>
            <div className=" flex flex-col-reverse gap-5 justify-between items-center">
              <div className="flex gap-2 justify-center dark:text-gray-400 ">
                <small>&copy; {new Date().getFullYear()}</small>
                <small>Build by Mohammad Raiyyan</small>
              </div>
              <div className="flex gap-5 items-center justify-center dark:text-gray-400">
                <a
                  className="hover:text-violet-700"
                  href="https://www.linkedin.com/mwlite/in/mohammad-raiyyan-735a71152"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin size={25} />
                </a>
                <a
                  className="hover:text-violet-700"
                  href="https://github.com/2raiyyan1khan"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
