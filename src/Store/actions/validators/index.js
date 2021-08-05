import Validator from "validator";

export class ValidationError extends Error {
  constructor(message, errors) {
    super(message);
    this.response = { data: errors };
  }
}

export const isValid = (errors) =>
  Object.keys(errors)
    .map((key) => errors[key])
    .every((error) => !error);


export const UnitsValidator = ({ unit_name = "", coords = "", unit_type = "" , unit_shape=""}) => {
  const errors = {};

  if (Validator.isEmpty(unit_name)) errors.unit_name = "Name is required";

  if (Validator.isEmpty(coords)) errors.coords = "Coords is required";

  if (Validator.isEmpty(unit_type)) errors.unit_type = "Unit type is required";
  
  if (Validator.isEmpty(unit_shape)) errors.unit_shape = "Unit Shape is required";

  if (!isValid(errors)) throw new ValidationError("Uint error", errors);
};


