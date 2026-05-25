import React, { useState } from "react";
import Backdrop from "./Backdrop";
import CardSurface from "../CardSurface/CardSurface";
import Button from "../Button/Button";

export default {
  title: "COMPONENTS/atoms/Backdrop",
  component: Backdrop,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "light", "dark", "blur"],
    },
  },
};

export const Default = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-48">
      <Button variant="primary" onClick={() => setOpen(true)}>
        Afficher le backdrop
      </Button>
      <Backdrop open={open} onClick={() => setOpen(false)} />
      {open && (
        <CardSurface
          variant="elevated"
          padding="md"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40"
        >
          <p className="text-sm">Cliquez sur le fond pour fermer</p>
        </CardSurface>
      )}
    </div>
  );
};

export const Blur = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="relative h-48">
      <p className="text-sm mb-4">Contenu derrière le backdrop flou</p>
      <Backdrop open={open} variant="blur" onClick={() => setOpen(false)} />
    </div>
  );
};

export const AllVariants = () => (
  <div className="grid grid-cols-2 gap-4 h-64 relative">
    {["default", "light", "dark", "blur"].map((variant) => (
      <div key={variant} className="relative h-28 rounded-lg overflow-hidden border border-gray1">
        <span className="absolute inset-0 flex items-center justify-center text-sm z-10">
          {variant}
        </span>
        <Backdrop open variant={variant} />
      </div>
    ))}
  </div>
);
