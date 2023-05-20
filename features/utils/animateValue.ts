import anime from "animejs";
import { appendCommas } from "./calculateCommaPrice";

export function animateValue(
  element: HTMLElement | null | undefined,
  starting: string | number = 1000,
  duration: number = 0.8
) {
  if (!element) return;
  console.log(starting);

  starting = parseFloat(String(starting).replaceAll(",", ""));

  console.log(starting);

  anime({
    targets: element,
    innerText: [0, starting],
    easing: "linear",
    round: true,
    update(a) {
      const value = a.animations[0].currentValue;
      element!.innerHTML = appendCommas(value);
    },
  });
}
