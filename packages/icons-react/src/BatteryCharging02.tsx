import * as React from 'react';
import { SVGProps } from 'react';
const BatteryCharging02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="m9.75 16.8 3.6-5.4h-5.4l3.6-5.4" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.75 16.8 3.6-5.4h-5.4l3.6-5.4M21 12.3v-1.8m-7.2 6.3h.18c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V9.6c0-.837 0-1.2555-.092-1.5988a2.7 2.7 0 0 0-1.9092-1.9092C15.9555 6 15.537 6 14.7 6M7.5 6h-.18c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 8.0517 3 8.8078 3 10.32v2.88c0 .837 0 1.2555.092 1.5988a2.7 2.7 0 0 0 1.9092 1.9092c.3433.092.7618.092 1.5988.092"
    />
  </svg>
);
export default BatteryCharging02;
