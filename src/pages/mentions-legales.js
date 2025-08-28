import Head from "next/head";
import Layout from "@/components/Layout";

export default function MentionsLegales() {
  return (
    <>
      <Head>
        <title>Mentions légales | Hocine HAMAMA</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Layout className="py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        <h2 className="text-xl font-semibold mt-6 mb-2">Éditeur du site</h2>
        <p>
          Ce site est &eacute;dit&eacute; &agrave; titre personnel par&nbsp;:<br />
          <strong>Hocine HAMAMA</strong><br />
          Email de contact&nbsp;: <a href="mailto:hocinedev4@gmail.com" className="underline text-blue-700">hocinedev4@gmail.com</a>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Portage salarial</h2>
        <p>
          Activit&eacute; exerc&eacute;e en portage salarial aupr&egrave;s de&nbsp;:<br />
          <strong>FreedomPortage SARL</strong><br />
          Adresse&nbsp;: BT D – Les Terrasses d&rsquo;agr&eacute;ment, Impasse Charning Charp, 97150 Saint Martin<br />
          SIRET&nbsp;: 81013182100086
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Hébergeur</h2>
        <p>
          Vercel Inc.<br />
          440 N Barranca Ave #4133<br />
          Covina, CA 91723, &Eacute;tats-Unis<br />
          Site : <a href="https://vercel.com/" className="underline text-blue-700" target="_blank" rel="noopener noreferrer">vercel.com</a>
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Responsabilité</h2>
        <p>
          L&rsquo;&eacute;diteur du site ne saurait &ecirc;tre tenu responsable des erreurs, interruptions ou indisponibilit&eacute;s &eacute;ventuelles du service.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Propriété intellectuelle</h2>
        <p>
          Le contenu du site (textes, code, images, graphismes) est prot&eacute;g&eacute; par le droit de la propri&eacute;t&eacute; intellectuelle. Toute reproduction, diffusion ou modification sans autorisation pr&eacute;alable est interdite.
        </p>
      </Layout>
    </>
  );
}
