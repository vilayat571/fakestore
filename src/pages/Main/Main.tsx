import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "../../layout/Layout";

export default function Main() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/21")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

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
