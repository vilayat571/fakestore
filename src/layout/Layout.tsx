import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}
export default function Layout(props: IChildren) {
  return <>{props.children}</>;
}
