import * as React from 'react';
import { SVGProps } from 'react';
const Loading01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="M12 2.25v2.5M12 18v4M5.75 12h-3.5m19 0h-1.5m-1.2929 6.4571L17.75 17.75m.9142-12.3342L17.25 6.83M4.9216 19.0784 7.75 16.25M5.1287 5.2087 7.25 7.33"
    />
  </svg>
);
export default Loading01;
