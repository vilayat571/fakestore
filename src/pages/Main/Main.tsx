import { Helmet } from "react-helmet-async";

export default function Main() {
  return (
    <div>
      <Helmet>
        <title>Products page</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
      </Helmet>
      <h1 className="text-red-600 font-semibold text-3xl">
        Main page of project
      </h1>
    </div>
  );
}
