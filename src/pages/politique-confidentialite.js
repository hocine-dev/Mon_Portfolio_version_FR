import Head from "next/head";
import Layout from "@/components/Layout";

export default function PolitiqueConfidentialite() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité | Hocine HAMAMA</title>
        <meta name="robots" content="noindex,follow" />
      </Head>
      <Layout className="py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>
        <p>
          Ce site ne collecte pas de donn&eacute;es personnelles via un formulaire int&eacute;gr&eacute;.<br /><br />
          Si vous choisissez de me contacter par email, WhatsApp ou via un service externe (ex : Calendly), vos donn&eacute;es (nom, email, message) sont utilis&eacute;es uniquement pour r&eacute;pondre &agrave; votre demande et ne sont jamais transmises &agrave; des tiers.<br />
          La base l&eacute;gale de ce traitement est l&rsquo;article 6(1)(b) du RGPD (n&eacute;cessaire pour r&eacute;pondre &agrave; votre demande).<br /><br />
          Vos donn&eacute;es sont conserv&eacute;es uniquement le temps n&eacute;cessaire au traitement de votre demande, puis supprim&eacute;es.<br /><br />
          Vous disposez d&rsquo;un droit d&rsquo;acc&egrave;s, de rectification et de suppression de vos donn&eacute;es. Pour l&rsquo;exercer, vous pouvez &eacute;crire &agrave; : <a href="mailto:hocinedev4@gmail.com" className="underline text-blue-700">hocinedev4@gmail.com</a>.<br /><br />
          L&rsquo;h&eacute;bergement du site est assur&eacute; par Vercel Inc. (Etats-Unis), ce qui peut entra&icirc;ner un transfert de donn&eacute;es hors de l&rsquo;Union Europ&eacute;enne.<br /><br />
          Ce site n&apos;utilise pas de cookies de suivi ou d&apos;analyse. Seuls des cookies techniques n&eacute;cessaires &agrave; son fonctionnement peuvent &ecirc;tre d&eacute;pos&eacute;s.
        </p>
      </Layout>
    </>
  );
}
