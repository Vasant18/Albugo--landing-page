"use client";
import { motion } from "framer-motion";
import acmeLogo from "../../public/assets/logo-acme.png";
import apexLogo from "../../public/assets/logo-apex.png";
import celestialLogo from "../../public/assets/logo-celestial.png";
import echoLogo from "../../public/assets/logo-echo.png";
import pulseLogo from "../../public/assets/logo-pulse.png";
import quantumLogo from "../../public/assets/logo-quantum.png";

export const LogoTicker = () => {
  return (
    <section className="py-20 ">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2>Trusted by top innovative teams</h2>
          </div>
          <div className=" flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{
                translateX: "0"
              }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
              className="flex flex-none gap-14  pr-14 -translate-x-1/2"
            >
              {[
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
                acmeLogo,
                pulseLogo,
                echoLogo,
                celestialLogo,
                apexLogo,
                quantumLogo,
              ].map((logo) => (
                <img src={logo.src} key={logo.src} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
