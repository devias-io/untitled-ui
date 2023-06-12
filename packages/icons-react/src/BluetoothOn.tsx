import * as React from 'react';
import { SVGProps } from 'react';
const BluetoothOn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
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
export default BluetoothOn;
