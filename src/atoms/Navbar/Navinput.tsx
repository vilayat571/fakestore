import { useState } from "react";

interface IofNavInput {
  handleSubmit(e: React.FormEvent<HTMLFormElement>): void;
  handleChange(e: React.ChangeEvent<HTMLInputElement>): void;
  query: string;
}

export default function Navinput() {
  const [query, setQuery] = useState<IofNavInput["query"]>("");

  const handleChange: IofNavInput["handleChange"] = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit: IofNavInput["handleSubmit"] = (e) => {
    e.preventDefault();
    console.log("Query", query);
    /* ... */
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
