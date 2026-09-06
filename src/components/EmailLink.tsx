import type { AnchorHTMLAttributes, ReactNode } from "react";
import { site } from "../content/site";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Enlace mailto. El href nativo permite abrir en pestaña nueva y copiar la dirección. */
export default function EmailLink({ children, ...rest }: Props) {
  return (
    <a {...rest} href={site.links.email}>
      {children}
    </a>
  );
}
