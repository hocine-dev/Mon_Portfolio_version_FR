import React from "react";
import Layout from "./Layout";
import Link from "next/link";
import heartIcon from "../../public/images/Footer/red-heart-icon.svg";
import Image from "next/image";
import HomeStyle from "../styles/Home.module.css";
import { useState, useEffect } from "react";

const Footer = () => {
  const [IsMobile, setIsMobile] = useState(false);

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
         
          {/* CTA Section - Mobile First */}
          <div className="flex flex-col items-center text-center space-y-6">
            <h4 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 leading-relaxed px-4">
              Prêt à démarrer votre projet ou vous souhaitez simplement un devis ?
            </h4>
            <Link
              href={
                IsMobile
                  ? "https://wa.me/33651859944"
                  : "https://web.whatsapp.com/send?phone=33651859944"
              }
              target="blank"
              className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden w-full max-w-xs sm:max-w-sm"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Contacter Moi</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

         

         
        </div>

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
          </div>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
