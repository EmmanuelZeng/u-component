import React, { useState } from "react";
import Overlay from "./Overlay";
import CardSurface from "../CardSurface/CardSurface";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/atoms/Overlay",
  component: Overlay,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "light", "dark", "transparent"],
    },
    blur: { control: "boolean" },
  },
};

const ModalContent = ({ onClose }) => (
  <CardSurface variant="elevated" padding="lg" rounded="lg" className="max-w-sm">
    <Heading level={4}>Confirmation</Heading>
    <p className="text-sm text-gray3 mt-2">
      Voulez-vous vraiment continuer cette action ?
    </p>
    <div className="flex gap-2 mt-4 justify-end">
      <Button variant="ghost" size="sm" onClick={onClose}>
        Annuler
      </Button>
      <Button variant="primary" size="sm" onClick={onClose}>
        Confirmer
      </Button>
    </div>
  </CardSurface>
);

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Button variant="primary" onClick={() => setOpen(true)}>
        Ouvrir l&apos;overlay
      </Button>
      <Overlay open={open} onClose={() => setOpen(false)}>
        <ModalContent onClose={() => setOpen(false)} />
      </Overlay>
    </>
  );
};

export const Light = () => {
  const [open, setOpen] = useState(true);
  return (
    <Overlay open={open} variant="light" blur onClose={() => setOpen(false)}>
      <ModalContent onClose={() => setOpen(false)} />
    </Overlay>
  );
};

export const Dark = () => {
  const [open, setOpen] = useState(true);
  return (
    <Overlay open={open} variant="dark" onClose={() => setOpen(false)}>
      <ModalContent onClose={() => setOpen(false)} />
    </Overlay>
  );
};
