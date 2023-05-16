export default function calculateCommaPrice(
  price: string | number,
  discount: string | number
) {
  price = String(price);
  discount = String(discount);


  const total = +price.replace(",", "") - +discount.replace(",", "");

  return appendCommas(total);
}

export function appendCommas(total: number | string) {
  const numAsString = String(total);
  const characters = numAsString.split("").reverse();
  let parts = [];
  for (let i = 0; i < characters.length; i += 3) {
    let part = characters
      .slice(i, i + 3)
      .reverse()
      .join("");

    parts.unshift(part);
  }

  return parts.join(",");
}

