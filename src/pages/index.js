import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import mainImg from "../../public/images/home/mainimg.png";
import circularImg from "../../public/images/home/circular.png";
import LightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import HomeStyle from "../styles/Home.module.css";
import TransitionEffect from "@/components/TransitionEffect";
import BackToTop from "@/components/BackToTop";
import { useState, useEffect } from "react";

export default function Home() {
  const [IsMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check if userAgentData is available (for browsers like Chrome)
      if (
        window.navigator.userAgentData &&
        window.navigator.userAgentData.mobile
      ) {
        setIsMobile(window.navigator.userAgentData.mobile);
      } else {
        // Fallback to checking screen width for mobile detection
        setIsMobile(window.innerWidth <= 768); // You can adjust the width as needed
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Hocine HAMAMA | Développeur Web Full Stack</title>
        <meta
          name="description"
          content="
          Développeur Web Full-Stack freelance à Paris, expert en Next.js, React et SEO. Créez votre site web performant et optimisé pour les moteurs de recherche. Contactez-moi pour vos projets à Paris et Île-de-France."
        />
      </Head>

      <TransitionEffect></TransitionEffect>

      <main className="flex items-center text-dark w-full min-h-screen xs:min-h-[90vh] dark:text-light lg:mt-3">
        <Layout className={"pt-0 md:pt-16 sm:mt-8 xs:px-16 xs:py-0 "}>
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div style={{ width: "48%" }} className="md:!w-full xs:!w-[90vw]">
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                src={mainImg}
                alt="Hocine Dev"
                className="w-full h-auto lg:hidden md:!inline-block md:w-full md:mb-10 md:-mt-10"
                style={{ borderRadius: "25%" }}
              ></Image>
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:min-w-[100vw] lg:text-center">
              <AnimatedText
                text="Bonjour, je m'appelle Hocine"
                className=" xs:!text-3xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl lg:p-1"
              />

              <p className="my-4 text-base font-medium !text-left xs:px-3">
                Je suis un <strong>développeur web Full Stack freelance basé à Paris</strong>, j&apos;ai plus de 5 ans d&apos;experience dans le domaine de web, je suis spécialisé dans la création de <strong>sites web performants avec Next.js et React js</strong>. Mon expertise inclut l&apos;<strong>optimisation SEO</strong> pour garantir une visibilité maximale. Que vous soyez une entreprise ou un particulier en <strong>Île-de-France</strong>, n&apos;hésitez pas à me contacter pour concrétiser vos projets web et attirer de nouveaux clients.
              </p>
              <div className="flex items-center  mt-2 w-full justify-evenly  lg:self-center xs:mt-5">
                <Link
                  href="/CV%20Hocine%20HAMAMA.pdf"
                  target="blank"
                  download={true}
                  className={`xs:!text-sm xs:px-1 hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:bg-light dark:text-dark flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark xs:mb-2`}
                >
                  Télécharger Mon CV
                  <span style={{ fontSize: 30, paddingLeft: 5 }}>&#8595;</span>
                </Link>
                <Link
                  href={
                    IsMobile
                      ? "https://wa.me/33651859944"
                      : "https://web.whatsapp.com/send?phone=33651859944"
                  }
                  target="blank"
                  className={`xs:!text-sm xs:px-1 hover:dark:border-light hover:dark:bg-dark hover:dark:text-light flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                  hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark xs:mb-2`}
                >
                  Contactez Moi
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <div
          className={`  left-4 bottom-4 flex items-center justify-center overflow-hidden ${HomeStyle.spin}`}
        >
          <div className="w-48 h-auto flex items-center justify-center relative">
            <Image
              src={circularImg}
              alt="circular Img"
              className="opacity-0"
            ></Image>

            <div
              className={`hover:dark:border-light hover:dark:bg-dark hover:dark:text-light dark:bg-light dark:text-dark flex flex-col items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-solid border-dark w-24 h-24 rounded-full font-semibold   hover:border-dark hover:border-solid hover:border-2 transition-all duration-300
              `}
            >
              <div className="flex text-yellow-400 text-sm mb-1">
                {"★★★★★"}
              </div>
              <span className="text-xs text-center leading-tight">
                Service De
                <br />
                Qualité
              </span>
            </div>
          </div>
        </div>

        <div className="absolute right-8 bottom-8 inline-block w-24 scale-150 lg:hidden">
          <Image src={LightBulb} alt="light bulb "></Image>
        </div>
      </main>
      <BackToTop />
    </>
  );
}
