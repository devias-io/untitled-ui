import * as React from 'react';
import { SVGProps } from 'react';
const Snowflake01 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path fill="#fff" fillOpacity={0.01} d="M10.984 12v-.0001V12Z" />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.4399 8.85-10.912 6.3m10.912-6.3.9883-3.6883M16.4399 8.85l3.6883.9883M5.528 15.15l-3.6883-.9883m3.6883.9883-.9883 3.6883m11.9001-3.6884-10.9119-6.3m10.9119 6.3 3.6884-.9883m-3.6884.9883.9884 3.6883M5.5279 8.8499l-.988-3.688m.988 3.688-3.688.9885M10.984 5.7v12.6m0-12.6L8.284 3m2.7 2.7 2.7-2.7m-2.7 15.3-2.7 2.7m2.7-2.7 2.7 2.7"
    />
  </svg>
);
export default Snowflake01;
