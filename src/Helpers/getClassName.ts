import shortId from 'shortid';
import { GenerateId } from 'jss';
import { createGenerateClassName } from '@material-ui/core/styles';

type GetClassName = (productionPrefix: string) => GenerateId;

const getClassName: GetClassName = productionPrefix =>
  createGenerateClassName({
    productionPrefix,
    seed: shortId(),
  });

export default getClassName;
