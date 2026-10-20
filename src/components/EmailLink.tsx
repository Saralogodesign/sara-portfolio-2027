import type { AnchorHTMLAttributes, ReactNode } from "react";
import { getSite } from "../content/site";
import { useLocale } from "../i18n/LocaleContext";

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
};

/** Enlace mailto. El href nativo permite abrir en pestaña nueva y copiar la dirección. */
export default function EmailLink({ children, ...rest }: Props) {
  const { locale } = useLocale();
  const site = getSite(locale);

  return (
    <a {...rest} href={site.links.email}>
      {children}
    </a>
  );
}
