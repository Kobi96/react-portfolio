import React, { useRef, useEffect } from "react";
import { Highlight, themes } from "prism-react-renderer";
import { contactData } from "../assets/lib/data.tsx";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import { motion, useScroll, useTransform } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const Contact: React.FC = () => {
  const { ref } = useSectionInView("Contact");
  const { language } = useLanguage();

  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {}, 400);

    return () => {
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <React.Fragment>
      <section
        className="contact-container w-full min-[1921px]:px-[55rem] mt-16"
        id="contact"
      >
        <div
          className="title-container flex flex-col gap-6 justify-center items-center py-16  max-lg:p-16"
          ref={ref}
        >
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "center",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-[--orange]">&lt;</span>
              {language === "ESP"
                ? contactData.title.esp
                : contactData.title.en}
              <span className="text-[--orange]">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center">
              {language === "ESP"
                ? contactData.description.esp
                : contactData.description.en}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center items-center px-10 pt-32 mb-32 max-lg:flex-col max-lg:p-10">
          <div className="w-full bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-4 rounded-2xl p-8 border-solid border-[0.4rem] border-[--lightblue] hover:border-orange duration-500 transition-all  quote-outer-container text-left max-lg:hidden cursor-progress">
            <Highlight
              code={`
console.log("Contact Me:");
console.log("Email: tobiasolveira@outlook.com");
console.log("LinkedIn: https://www.linkedin.com/in/tobias-olveira-52a0311b7/");
console.log("GitHub: https://github.com/Kobi96");
              `}
              language="javascript"
              theme={themes.nightOwl}
            >
              {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={`${className} text-2xl`} style={style}>
                  {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  ))}
                </pre>
              )}
            </Highlight>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
