/** @format */
import { memo, forwardRef } from 'react';

type Props = {
  label: string;
  type?: string;
  value?: string;
  onChange?: (value: string, type: string) => void; //
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, type = 'text', value = '', onChange = () => {} }, ref) => {
    console.log('render ', label);
    return (
      <div>
        <label htmlFor={label}>{label}</label>
        <input
          ref={ref}
          id={label}
          type={type}
          defaultValue={''} // ref - uncontrolled component
          // value={value} // controlled component
          // onChange={(event) => onChange(event.target.value, type)}
        />
      </div>
    );
  }
);

export default Input; // PureComponent
