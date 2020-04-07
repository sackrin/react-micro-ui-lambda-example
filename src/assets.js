import loadable from '@loadable/component';
import { hydrate, render } from "react-dom";
import { renderComponent, hydrateComponent, childComponent } from '@sackrin/react-micro-ui/lib/Helpers';

// Enable code splitting by returning with loadable
const ProfileProgress = loadable(() => import('./Components/ProfileProgress'));
const ProfileRegister = loadable(() => import('./Components/ProfileRegister'));

export const Components = {
  ProfileProgress,
  ProfileRegister,
};

export const Hydrate = hydrateComponent(hydrate, Components);
export const Render = renderComponent(render, Components);
export const Child = childComponent(Components);
