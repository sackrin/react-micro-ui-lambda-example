import { RegisterAddress } from '../Types/RegisterAddress';

export type SetRegisterAddress = { type: 'SET_REGISTER_ADDRESS'; address: RegisterAddress };

export type SetRegisterAddressAction = (address: RegisterAddress) => SetRegisterAddress;

const setRegisterAddressAction: SetRegisterAddressAction = address => ({ type: 'SET_REGISTER_ADDRESS', address });

export default setRegisterAddressAction;
