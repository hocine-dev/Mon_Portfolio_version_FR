import React from "react";
import Image from "next/image";

const reviews = [
  {
    avatar: "/images/reviews/r1.jpg",
    name: "Eden L.",
    date: "01 nov. 2024",
    rating: 5,
    comment:
      "J'ai eu l'occasion de travailler avec Hocine pour la création de mon site web, et je ne peux que le recommander. Il a non seulement respecté les délais de livraison, mais il m'a aussi livré un travail d'une qualité irréprochable. Chaque détail a été pris en compte, et le site correspond parfaitement à ce que j'avais imaginé. En plus, son tarif est très compétitif pour le niveau de service offert. Merci encore, Hocine, pour ton professionnalisme et ton efficacité !",
  },
  {
    avatar: "/images/reviews/r2.jpg",
    name: "Gari M.",
    date: "10 juin 2025",
    rating: 5,
    comment:
      "Excellent service de création de site e-commerce par Hocine. Très réactif et professionnel, il a su répondre à toutes mes attentes. Le devis était clair, détaillé et sans surprise. Le résultat final est très satisfaisant et correspond parfaitement à mes besoins. Je recommande vivement ses services !",
  },
  {
    avatar: "/images/reviews/r3.png",
    name: "Sandie B.",
    date: "07 aout 2025",
    rating: 5,
    comment:
      "Hocine est très professionnelle gentil et à l’écoute. Le devis était clair et la prestation à la hauteur. Il a travaillé sur mon site internet qui est sublime et d’une qualité exceptionnelle ! Je recommande 👑",
  },
];

const Reviews = () => {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-100  dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          Les avis de Mes Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                    {review.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Posté le {review.date}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-500 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
