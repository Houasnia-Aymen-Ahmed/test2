export function getErrorMessages(key) {
  const field = this.$v[key];

  if (!field.$pending && field.$error) {
    return Object.keys(field.$params)
      .filter((param) => !field[param])
      .map((param) => {
        switch (param) {
          case "required":
            return "This field is required.";
          case "email":
            return "Please enter a valid email address.";
          default:
            return "Invalid value.";
        }
      });
  }

  return [];
}
