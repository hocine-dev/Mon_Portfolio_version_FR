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
          <strong>RH SOLUTION SAS</strong><br />
          SIREN&nbsp;: 907 835 508<br />
          SIRET&nbsp;: 907 835 508 00017<br />
          Adresse&nbsp;: 13 RUE SAINTE URSULE, 31000 TOULOUSE<br />
          Forme juridique&nbsp;: SAS, soci&eacute;t&eacute; par actions simplifi&eacute;e<br />
          Activit&eacute; principale&nbsp;: Autre mise &agrave; disposition de ressources humaines (NAF/APE 78.30Z)<br />
          Capital social&nbsp;: 1&nbsp;000&nbsp;&euro;<br />
          Date de cr&eacute;ation&nbsp;: 15/11/2021
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
