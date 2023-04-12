import Navinput from "../../atoms/Navbar/Navinput";
import VAULOGO from "../../atoms/Navbar/Vaulogo";

export default function Navbar() {
  return (
    <div className="border w-full h-auto px-10 flex items-center">
      <VAULOGO />
      <Navinput />
    </div>
  );
}
