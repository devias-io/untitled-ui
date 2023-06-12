import * as React from 'react';
import { SVGProps } from 'react';
const ChartBreakoutCircle = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14.15 4.35V3m3.5454 2.3046L18.65 4.35m.0092 4.5h1.35m-.0536 4.05C19.504 17.448 15.6668 21 11 21c-4.9706 0-9-4.0294-9-9 0-4.6668 3.552-8.504 8.1-8.9556M11 8.4h3.6V12m-.3423-3.6c-2.1189 2.9948-5.61 4.95-9.5577 4.95-.9026 0-1.7814-.1022-2.6253-.2957"
    />
  </svg>
);
export default ChartBreakoutCircle;
