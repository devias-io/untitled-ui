import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BluetoothOn = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 7.5 10.8 9-5.4 4.5V3l5.4 4.5-10.8 9"
    />
  </svg>
);
const ForwardRef = forwardRef(BluetoothOn);
const Memo = memo(ForwardRef);
export default Memo;
