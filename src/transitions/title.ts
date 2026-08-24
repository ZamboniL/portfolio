import type { TransitionDirectionalAnimations } from "astro";

const DURATION = "0.4s",
  EASING = "cubic-bezier(0.76, 0, 0.24, 1)";

function titleAnimation(outgoing: string, incoming: string): TransitionDirectionalAnimations {
  const animations = {
    new: { duration: DURATION, easing: EASING, fillMode: "both", name: incoming },
    old: { duration: DURATION, easing: EASING, fillMode: "both", name: outgoing },
  };

  return { backwards: animations, forwards: animations };
}

export const titleGrow = titleAnimation("title-grow-old", "title-grow-new");

export const titleShrink = titleAnimation("title-shrink-old", "title-shrink-new");
