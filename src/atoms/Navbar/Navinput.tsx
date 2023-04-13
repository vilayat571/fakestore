import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/store/store";
import { getSearcedData } from "../../redux/reducers/searchProductsReducer";

interface INavInput {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  query: string;
}

export default function Navinput() {
  const [query, setQuery] = useState<INavInput["query"]>("");

  const handleChange: INavInput["handleChange"] = (e) => {
    setQuery(e.target.value);
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit: INavInput["handleSubmit"] = (e) => {
    e.preventDefault();
    dispatch(getSearcedData(query));
    navigate("/results");
  };

  return (
    <form className=" w-[46%]" onSubmit={(e) => handleSubmit(e)}>
      <input
        className="py-[10px] text-sm w-full border px-4
       bg-[#fafafa] focus:bg-[#fff]
       placeholder:font-extralight
       placeholder:text-[#5c5c5c]
       outline-none"
        type="text"
        placeholder="Axtarış"
        value={query}
        required={true}
        onChange={(e) => handleChange(e)}
      />
    </form>
  );
}
