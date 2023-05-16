export function makeEnding(count: number | string): string {
  count = String(count);

  count = Number(count[count.length - 1]);

  if (count === 1) return "";
  else if (count >= 2 && count <= 4) return "а";
  else return 'ов'
}
