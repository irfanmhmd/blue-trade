function badRequest(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function requireFields(fields) {
  return (req, res, next) => {
    for (const field of fields) {
      const value = req.body[field];
      if (value === undefined || value === null || String(value).trim() === "") {
        return next(badRequest(`Missing required field: ${field}`));
      }
    }
    return next();
  };
}

function validateEnum(field, allowed) {
  return (req, res, next) => {
    const value = req.body[field];
    if (value === undefined || value === null || value === "") return next();
    if (!allowed.includes(value)) {
      return next(badRequest(`Invalid ${field}. Allowed: ${allowed.join(", ")}`));
    }
    return next();
  };
}

function validatePositiveNumber(field) {
  return (req, res, next) => {
    const value = Number(req.body[field]);
    if (Number.isNaN(value) || value <= 0) {
      return next(badRequest(`${field} must be a positive number`));
    }
    return next();
  };
}

module.exports = { requireFields, validateEnum, validatePositiveNumber };
function badRequest(message) {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
}

function requireFields(fields) {
  return (req, res, next) => {
    for (const field of fields) {
      const value = req.body[field];
      if (value === undefined || value === null || String(value).trim() === "") {
        return next(badRequest(`Missing required field: ${field}`));
      }
    }
    return next();
  };
}

function validateEnum(field, allowed) {
  return (req, res, next) => {
    const value = req.body[field];
    if (value === undefined || value === null || value === "") return next();
    if (!allowed.includes(value)) {
      return next(badRequest(`Invalid ${field}. Allowed: ${allowed.join(", ")}`));
    }
    return next();
  };
}

function validatePositiveNumber(field) {
  return (req, res, next) => {
    const value = Number(req.body[field]);
    if (Number.isNaN(value) || value <= 0) {
      return next(badRequest(`${field} must be a positive number`));
    }
    return next();
  };
}

module.exports = { requireFields, validateEnum, validatePositiveNumber };
