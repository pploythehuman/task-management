export const validateInput = (value: string, message: string) => {
  if (value.trim() !== "") return;
  alert(message);
};
