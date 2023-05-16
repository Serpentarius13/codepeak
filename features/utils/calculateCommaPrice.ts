export default function calculateCommaPrice(
  price: string | number,
  discount: string | number
) {
  price = String(price);
  discount = String(discount);

  console.log(price, discount);
  const total = String(+price.replace(",", "") - +discount.replace(",", ""));

  console.log(total);

  const numAsString = total.toString();
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
