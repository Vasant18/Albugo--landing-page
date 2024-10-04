import Logo from "../../public/assets/logo.svg";
import Instasocial from "../../public/assets/social-instagram.svg";
import Xsocial from "../../public/assets/social-x.svg";
import YTsocial from "../../public/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="border-t border-white/15">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center justify-between text-center md:text-left">
          <div className="flex gap-2 items-center  justify-center sm:py-5">
            <Logo className="h-6 w-6" />
            <div className="font-medium">Albugo AI</div>
          </div>

          <nav className="flex flex-col md:flex-row gap-5 md:gap-7  justify-center sm:py-5">
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Developers
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Blog
            </a>
            <a
              href="#"
              className="text-white/70 hover:text-white text-xs md:text-sm transition"
            >
              Changelog
            </a>
          </nav>

          <div className="flex gap-5  justify-center sm:py-5">
            <Xsocial className="text-white/40 hover:text-white transition" />
            <Instasocial className="text-white/40 hover:text-white transition" />
            <YTsocial className="text-white/40 hover:text-white transition" />
          </div>
        </div>
      </div>
    </footer>
  );
};
