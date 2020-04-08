# Compare the market form

```js
import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string,
};

const Example = ({ className = '' }: Props) => <div className={classnames('test-example', className)}>Example</div>;

export default Example;
```
