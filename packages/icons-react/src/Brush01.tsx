import * as React from 'react';
import { SVGProps } from 'react';
const Brush01 = (props: SVGProps<SVGSVGElement>) => (
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
      d="m9 11.2224 3.7778 3.7778m-4.803 5.9748C6.608 22.3419 4 22.0002 2 22.0002c1.0251-2-.3417-4.6081 1.0251-5.9749 1.3668-1.3668 3.583-1.3668 4.9497 0 1.3669 1.3668 1.3669 3.5829 0 4.9497Zm3.9468-5.0502 9.1371-9.868c.8048-.8693.7788-2.219-.0588-3.0566-.8375-.8376-2.1873-.8636-3.0565-.0588l-9.868 9.1371c-.51.4722-.765.7083-.9137.96a2 2 0 0 0-.0378 1.9672c.139.2574.3846.5031.876.9945.4915.4914.7372.7371.9945.876a2 2 0 0 0 1.9672-.0378c.2518-.1487.4878-.4037.96-.9136Z"
    />
  </svg>
);
export default Brush01;
