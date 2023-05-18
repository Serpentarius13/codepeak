import anime from "animejs";

export function animateRotate(target: HTMLElement | null | undefined) {
  if (!target) return;
  anime({
    targets: target,
    rotate: target?.style.transform == "rotate(360deg)" ? 0 : 360,
    duration: 2000,
    easing: "spring",
  });
}
