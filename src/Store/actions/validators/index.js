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


export const UnitsValidator = ({ name = "", coords = "", zone_type = "" }) => {
  const errors = {};

  if (Validator.isEmpty(name)) errors.name = "Name is required";

  if (Validator.isEmpty(coords)) errors.coords = "Coords is required";

  if (Validator.isEmpty(zone_type)) errors.zone_type = "Zone type is required";

  if (!isValid(errors)) throw new ValidationError("Zone error", errors);
};

