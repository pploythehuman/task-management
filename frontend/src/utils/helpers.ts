const validateInput = (value: string, message: string) => {
  if (value.trim() !== "") return;
  alert(message);
};

export {
  validateInput
}
