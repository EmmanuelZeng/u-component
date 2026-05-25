import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne des classes Tailwind en résolvant les conflits.
 * @param {...import('clsx').ClassValue} inputs
 * @returns {string}
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** Classes de focus accessibles partagées entre les atoms interactifs. */
export const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

/** Classes d'état disabled partagées. */
export const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

/** Classes d'état error partagées pour les champs de formulaire. */
export const errorRing =
  "border-danger focus-visible:ring-danger aria-invalid:border-danger aria-invalid:ring-danger";
