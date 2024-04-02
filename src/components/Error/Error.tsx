import { FunctionComponent, JSX } from 'react';

export const Error: FunctionComponent<{ message: string }> = (
  props
): JSX.Element => {
  return (
    <div style={{ alignSelf: 'center', fontSize: 20 }}>{props.message}</div>
  );
};
