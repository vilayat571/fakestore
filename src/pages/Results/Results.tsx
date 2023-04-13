import Layout from "../../layout/Layout";
import { RootState, useAppSelector } from "../../redux/store/store";

export default function Results() {
  const searhcedData = useAppSelector(
    (state: RootState) => state.searchProductsReducer.data
  );

  return (
    <Layout>
      <div>
        <h1 className="text-red-500">Result page</h1>
      </div>
    </Layout>
  );
}
