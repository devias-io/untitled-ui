import * as React from 'react';
import { SVGProps } from 'react';
const ChartBreakoutSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h8.4c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V13m-9-5h4v4m-.5-8.5V2m3.9393 2.5607L20.5 3.5m.0103 5h1.5M3 13.3471c.652.1007 1.3199.1529 2 .1529 4.3864 0 8.2653-2.1724 10.6197-5.5"
    />
  </svg>
);
export default ChartBreakoutSquare;
