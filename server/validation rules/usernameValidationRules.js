const { body } = require('express-validator');

const usernameValidationRules = () => [
  body('username')
    .notEmpty().withMessage('Username is required')
    .isLength({ min: 3, max: 32}).withMessage('Username can be at least 3 and at most 32 characters long')
    .isAlphanumeric().withMessage('Username can only contain letters of the alphabet and numbers'),
];

module.exports = usernameValidationRules;