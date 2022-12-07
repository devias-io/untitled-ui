import * as React from 'react';
import { SVGProps } from 'react';
const BluetoothOff = (props: SVGProps<SVGSVGElement>) => (
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
      d="m5.7 16.5 5.4-4.5v9l4.8958-4.0799M11.1 7.5V3l5.4 4.5-2.6265 2.1888M19.2 20.1 3 3.9"
    />
  </svg>
);
export default BluetoothOff;
