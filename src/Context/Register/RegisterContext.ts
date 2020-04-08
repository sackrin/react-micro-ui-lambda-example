import { createContext } from 'react';
import { getDefaultRegisterState } from "./Helpers";
import type { RegisterContextValue } from './Types/RegisterContextValue';

const RegisterContext = createContext<RegisterContextValue>({
  ...getDefaultRegisterState(),
  doSubmit: () => {},
  dispatch: (action) => {}
});

export default RegisterContext;
