// Single source of truth for company identity. Edit here to update every page.
export const company = {
  name: "Saleshub",
  address: "Lot 0912 C 185 MANODIDINA NY GARA, ANTSIRABE I, MADAGASCAR",
  addressLines: ["Lot 0912 C 185 MANODIDINA NY GARA", "ANTSIRABE I", "MADAGASCAR"],
  nif: "1019212209",
  stat: "78 200 12 2024 0 01330",
  phoneMadagascar: "+261 32 03 682 18",
  phoneMadagascarHref: "tel:+261320368218",
  phoneFranceEurope: "+33 6 15 83 75 61",
  phoneFranceEuropeHref: "tel:+33615837561",
  email: "contact@saleshub.business",
  emailHref: "mailto:contact@saleshub.business",
  // Fields awaiting validation by Saleshub — leave null until confirmed.
  host: null as null | { name: string; address: string; contact: string },
  applicableLaw: null as null | string,
};

export const LEGAL_PENDING = "Texte juridique à valider par Saleshub / conseil juridique avant publication définitive.";
