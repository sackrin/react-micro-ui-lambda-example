import { RegisterContextState } from '../Types/RegisterContextState';

type GetDefaultRegisterState = () => RegisterContextState;

const getDefaultRegisterState: GetDefaultRegisterState = () => ({
  isValid: false,
  profile: {
    isValid: false,
    isDirty: false,
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    },
    errors: null,
  },
  address: {
    isValid: false,
    isDirty: false,
    data: {
      streetNumber: '',
      streetName: '',
      streetType: '',
      suburb: '',
      postcode: '',
    },
    errors: null,
  },
});

export default getDefaultRegisterState;
