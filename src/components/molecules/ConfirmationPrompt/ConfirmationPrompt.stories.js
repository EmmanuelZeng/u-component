import React from "react";
import ConfirmationPrompt from "./ConfirmationPrompt";

export default {
  title: "COMPONENTS/molecules/ConfirmationPrompt",
  component: ConfirmationPrompt,
};

const Template = (args) => (
  <div className="flex min-h-[320px] items-center justify-center bg-gray1 p-8">
    <ConfirmationPrompt {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  description: "Confirmer la soumission de votre formulaire.",
};

export const WithAsyncConfirm = Template.bind({});
WithAsyncConfirm.args = {
  description: "Confirmer la soumission de votre formulaire.",
  successMessage: "Votre formulaire a été soumis avec succès.",
  onConfirm: () =>
    new Promise((resolve) => {
      setTimeout(resolve, 1500);
    }),
};

export const Loading = Template.bind({});
Loading.args = {
  description: "Confirmer la soumission de votre formulaire.",
  loading: true,
};
