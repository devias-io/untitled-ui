import * as React from 'react';
import { SVGProps } from 'react';
const BluetoothSignal = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="transparent"
      fillOpacity={0.01}
      d="m2 7.5 10.8 9L7.4 21V3l5.4 4.5-10.8 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 7.5 10.8 9L7.4 21V3l5.4 4.5-10.8 9m16.3301-9.45c1.0022 1.3932 1.5925 3.1027 1.5925 4.95 0 1.8473-.5903 3.5568-1.5925 4.95M15.5 9.1715a4.927 4.927 0 0 1 .8872 2.8286 4.927 4.927 0 0 1-.8872 2.8286"
    />
  </svg>
);
export default BluetoothSignal;
