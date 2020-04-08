import Validator from 'validatorjs';

type GetValidator = (data, rules) => any;

const getValidator: GetValidator = (data, rules) => {
  // Add custom validator rules
  // regex from https://www.etl-tools.com/regular-expressions/is-australian-phone-number.html
  Validator.register(
    'telephone',
    function(value, requirement, attribute) {
      return value.match(
        /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/,
      );
    },
    'The :attribute phone number is invalid.',
  );
  // Return the validator instance
  return new Validator(data, rules);
};

export default getValidator;
