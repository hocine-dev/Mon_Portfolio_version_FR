import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import heartIcon from "../../public/images/Footer/red-heart-icon.svg";
import Image from "next/image";
import HomeStyle from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Reviews from "./Reviews"; 
const Footer = () => {
  const [IsMobile, setIsMobile] = useState(false);
  const router = useRouter();
  const isContactPage = router.asPath === "/contact";

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.navigator.userAgentData &&
        window.navigator.userAgentData.mobile
      ) {
        setIsMobile(window.navigator.userAgentData.mobile);
      } else {
        setIsMobile(window.innerWidth <= 768);
      }
    }
  }, []);

  return (
    <footer className="w-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700">
      {/* Main Footer Content */}
      <Layout className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="flex flex-col space-y-8">
          {/* CTA Section - hidden on contact page */}
          {!isContactPage && (
            <div className="flex flex-col items-center text-center space-y-6">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed px-4">
                Prêt à démarrer votre projet ou vous souhaitez simplement un devis ?
              </h2>
              <Link
                href={
                  "/contact"
                   
                }
                className="max-md:w-[80vw]  md:w-auto mobile-padding-inline group relative xs:!text-sm xs:px-1 flex items-center justify-center px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 overflow-hidden bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 xs:mb-2"
              >
                <span className="relative z-10 flex items-center">
                  Contactez Moi
                  <motion.span
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="ml-2 text-xl"
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </Link>
            </div>
          )}
        </div>

        {/* Reviews Section */}
        {router.asPath === "/" && <Reviews />}

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-6">
          <div className="flex flex-col space-y-6">
            {/* Copyright - Mobile Centered */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <span>© 2025 Créé avec</span>
                <Image
                  src={heartIcon}
                  alt="love"
                  className={`w-3 h-3 sm:w-4 sm:h-4 ${HomeStyle.rotate}`}
                />
                <span>par</span>
              </div>
              <Link
                href="https://www.linkedin.com/in/hocinedev/"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
              >
                Hocine HAMAMA
              </Link>
            </div>
            <div className="flex flex-row items-center justify-center gap-4 mt-2">
              <Link href="/mentions-legales" className="underline hover:text-blue-700 text-xs">Mentions légales</Link>
              <span className="text-gray-400">|</span>
              <Link href="/politique-confidentialite" className="underline hover:text-blue-700 text-xs">Politique de confidentialité</Link>
            </div>
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;