import loadable from '@loadable/component';
import { hydrate, render } from "react-dom";
import { renderComponent, hydrateComponent, childComponent } from '@sackrin/react-micro-ui/lib/Helpers';

const ProfileProgress = loadable(() => import('./Components/ProfileProgress'));
const ProfilePersonal = loadable(() => import('./Components/ProfilePersonal'));
const ProfileAddress = loadable(() => import('./Components/ProfileAddress'));

export const Components = {
  ProfileProgress,
  ProfilePersonal,
  ProfileAddress
};

export const Helpers = {
  TestHelper: () => { console.log('Hello World!'); }
};

export const Hydrate = hydrateComponent(hydrate, Components);
export const Render = renderComponent(render, Components);
export const Child = childComponent(Components);
