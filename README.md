# Simple Micro Frontend Registration Form

This project contains a lambda driven micro frontend example using the context of a simple user registration form. The components are displayed within storybook and cypress is used to conduct functional browser testing.

### Local Setup

In order to run this project locally you will need to clone down this repository and run ```npm i```

### Using Locally

- to run locally ```npx nps local```
- to run code standards ```npx nps standards``` after running previous step
- to build for deployment ```npx nps build```

### Deployment

To deploy this project to AWS please follow the instructions within the following documentation

https://sackrin.github.io/react-micro-ui-lambda/

## Embedding via raw HTML and JS

Micro frontend components can be embedded within a simple HTML document. The snippet below demonstrates how to embed the ProfileRegister component

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <!-- Include this in the HEAD or in the BODY -->
  <script async type="application/javascript" src="http://localhost:9000/bootstrap.js"></script>
</head>
<body>
<!-- Provide a container div for the react component to render into -->
<div data-microui-component="ProfileRegister"></div>
<!-- Ensure this is placed under the container element or wrap in document ready -->
<script type="application/javascript">
  // @param n = UMD library name ie soarExampleMicroUI
  // @param c = component name ie Foo
  // @param p = props to be passed to mounted component
  (function(n, c, p) {
    var w = window, m = function(e){ if (e.detail.name === n)
      w[n].Render(document.querySelector(`div[data-microui-component="${c}"]`),c,p); };
    if (w[n]) { m(); } else { w.addEventListener('microUILoaded', m); }
  })('exampleProfileMicroFrontend', 'ProfileRegister', {});
</script>
</body>
</html>
```

## Embedding via React Micro UI Hooks

To help embedding micro frontend applications the react-micro-ui-hooks library provides hooks and components to access individual micro frontend components. To install within your macro frontend run the following npm command.

```npm i --save @sackrin/react-micro-ui-hooks```

### Progress Bar Component

The following react snippet can be used to embed the progress bar component within a macro frontend

```
import React, { useCallback, useState } from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileProgress = ({ current, stages }) => (
  <MicroUIComponent
    microUi={{
      url: 'http://localhost:9000',
      library: 'exampleProfileMicroFrontend',
      name: 'ProfileProgress',
    }}
    current={current}
    stages={stages}
  />
);

export default ProfileProgress;
```

### Register Form Component

The following react snippet can be used to embed the register form component within a macro frontend

```
import React, { useCallback, useState } from 'react';
import { MicroUIComponent } from '@sackrin/react-micro-ui-hooks/lib/Components';

const ProfileRegister = ({ onStages, onRegister }) => (
  <MicroUIComponent
    microUi={{
      url: 'http://localhost:9000',
      library: 'exampleProfileMicroFrontend',
      name: 'ProfileRegister',
    }}
    onStages={onStages}
    onRegister={onRegister}
  />
);

export default ProfileRegister;
```

## Embedding via Server Side Rendering

Micro frontend components can be embedded into server rendered applications (ie PHP or nodeJS) to improve SEO and accessibility. Components will be returned as static HTML along with JS to load in bootstrap.js and hydrate the component after page load with any client-side functionality. There is no need for the macro frontend to include bootstrap or any other dependencies for components to be successfully rendered.

It is safe to import multiple SSR components within a single page at one time as assets such as bootstrap.js will only be detected and loaded only once.

### Embedding via GET request

To embed using a GET request add the component name to the end of the micro frontend URL and add your props as GET variables

```GET http://localhost:9000/ProfileRegister```

### Embedding via POST request

To embed using a POST request add the component name to the end of the micro frontend URL and provide your props within the request body as raw JSON

```POST http://localhost:9000/ProfileRegister```
