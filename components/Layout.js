import Head from "next/head";

export default function Layout({ title, keywords, description, children, className = "" }) {
  return (
    <div className="font-poppins overflow-x-hidden">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="text-dark">
        <div className={`${className}`}>{children}</div>
      </div>
    </div>
  );
}

Layout.defaultProps = {
  title: "Buy me a coffee",
  description: "This is a Web3 app to buy Tomster a coffee",
  keywords: "web3, alchemy, blockchain",
};
