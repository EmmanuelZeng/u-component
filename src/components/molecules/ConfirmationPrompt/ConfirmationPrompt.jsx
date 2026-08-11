import React, { useState } from "react";
import PropTypes from "prop-types";
import CardSurface from "../../atoms/CardSurface/CardSurface.jsx";
import Spinner from "../../atoms/Spinner/Spinner.jsx";
import { cn } from "../../../lib/utils";

/** Bleu système EduFlow */
const EDUFLOW_BLUE = "#085ED7";

function WarningIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="44"
        cy="44"
        r="40"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M44 24v28"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <circle cx="44" cy="64" r="2.75" fill="currentColor" />
    </svg>
  );
}

function SuccessIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 88 88"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle
        cx="44"
        cy="44"
        r="40"
        stroke="currentColor"
        strokeWidth="3.5"
      />
      <path
        d="M28 45.5 39 56.5 60 33.5"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * Prompt de confirmation (design EduFlow).
 * - Icone warning centrée + message centré
 * - Actions alignées à droite (Annuler gris / Confirmer bleu EduFlow)
 * - Pas de hover sur les boutons
 * - Pendant une requête async : loader circulaire avant le message de succès
 */
const ConfirmationPrompt = ({
  title,
  description,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  loading: loadingProp,
  successMessage,
  successTitle,
  successConfirmLabel,
  className,
}) => {
  const [internalLoading, setInternalLoading] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const loading = Boolean(loadingProp) || internalLoading;

  const handleConfirm = async () => {
    if (loading || succeeded) return;

    const result = onConfirm?.();
    if (result != null && typeof result.then === "function") {
      setInternalLoading(true);
      try {
        await result;
        if (successMessage) {
          setSucceeded(true);
        }
      } finally {
        setInternalLoading(false);
      }
      return;
    }

    if (successMessage) {
      setSucceeded(true);
    }
  };

  const handleSuccessClose = () => {
    setSucceeded(false);
    onCancel?.();
  };

  if (loading) {
    return (
      <CardSurface
        variant="elevated"
        rounded="lg"
        padding="xl"
        className={cn(
          "confirmation-prompt-in w-full max-w-[420px] border-0 shadow-lg",
          className
        )}
      >
        <div
          key="loading"
          className="confirmation-prompt-content-in flex flex-col items-center justify-center gap-4 py-6"
        >
          <span style={{ color: EDUFLOW_BLUE }}>
            <Spinner size="xl" intent="primary" label="Traitement en cours…" />
          </span>
          <p className="text-center text-sm text-gray4">
            Traitement en cours…
          </p>
        </div>
      </CardSurface>
    );
  }

  if (succeeded) {
    return (
      <CardSurface
        variant="elevated"
        rounded="lg"
        padding="xl"
        className={cn(
          "confirmation-prompt-in w-full max-w-[420px] border-0 shadow-lg",
          className
        )}
      >
        <div
          key="success"
          className="confirmation-prompt-content-in flex flex-col items-center gap-5"
        >
          <SuccessIcon className="h-20 w-20 text-success" />
          <div className="space-y-1 text-center">
            {successTitle ? (
              <h2 className="text-base font-semibold text-dark">
                {successTitle}
              </h2>
            ) : null}
            <p className="text-sm leading-6 text-gray4">{successMessage}</p>
          </div>
          <div className="flex w-full justify-end pt-2">
            <button
              type="button"
              onClick={handleSuccessClose}
              className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm outline outline-1 outline-offset-2"
              style={{
                backgroundColor: EDUFLOW_BLUE,
                outlineColor: EDUFLOW_BLUE,
              }}
            >
              {successConfirmLabel}
            </button>
          </div>
        </div>
      </CardSurface>
    );
  }

  return (
    <CardSurface
      variant="elevated"
      rounded="lg"
      padding="xl"
      className={cn(
        "confirmation-prompt-in w-full max-w-[420px] border-0 shadow-lg",
        className
      )}
      role="alertdialog"
      aria-modal="true"
      aria-labelledby={title ? "confirmation-prompt-title" : undefined}
      aria-describedby="confirmation-prompt-desc"
    >
      <div
        key="confirm"
        className="confirmation-prompt-content-in flex flex-col items-center gap-5"
      >
        <WarningIcon className="h-20 w-20 text-warning" />

        <div className="space-y-1 text-center">
          {title ? (
            <h2
              id="confirmation-prompt-title"
              className="text-base font-semibold text-dark"
            >
              {title}
            </h2>
          ) : null}
          <p
            id="confirmation-prompt-desc"
            className="text-sm leading-6 text-gray4"
          >
            {description}
          </p>
        </div>

        <div className="flex w-full justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onCancel}
            className="rounded-md bg-gray1 px-4 py-2 text-sm font-semibold text-dark"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm outline outline-1 outline-offset-2"
            style={{
              backgroundColor: EDUFLOW_BLUE,
              outlineColor: EDUFLOW_BLUE,
            }}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </CardSurface>
  );
};

ConfirmationPrompt.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  /** Force l’affichage du loader circulaire (requête en cours). */
  loading: PropTypes.bool,
  /** Affiché après validation réussie (si onConfirm résout ou immédiatement). */
  successMessage: PropTypes.string,
  successTitle: PropTypes.string,
  successConfirmLabel: PropTypes.string,
  className: PropTypes.string,
};

ConfirmationPrompt.defaultProps = {
  title: "",
  description: "Confirmer la soumission de votre formulaire.",
  confirmLabel: "Confirmer",
  cancelLabel: "Annuler",
  onConfirm: () => {},
  onCancel: () => {},
  loading: false,
  successMessage: "",
  successTitle: "Opération réussie",
  successConfirmLabel: "OK",
  className: "",
};

export default ConfirmationPrompt;
