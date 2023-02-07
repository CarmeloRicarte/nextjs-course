import { notFound } from "next/navigation";

function NotFoundComponent() {
  notFound(); // this will render the not-found.tsx page
  return <>Esto no se va a ver</>;
}

export default NotFoundComponent;
