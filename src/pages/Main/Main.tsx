import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";

export default function Main() {


  return (
    <Layout>
      <Helmet>
        <title>Əsas səhifə</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <div >
      
      </div>
    </Layout>
  );
}
