export function formatCurrency(
  number: number,
  locale: string = "pt-BR",
  currency: string = "BRL"
): string {
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(
    number
  );
}
