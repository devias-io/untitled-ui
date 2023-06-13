import * as React from 'react';
import { SVGProps } from 'react';
const GitCommit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M12 16c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4 0 2.2091 1.7909 4 4 4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 12c0 2.2091-1.7909 4-4 4-2.2091 0-4-1.7909-4-4m8 0c0-2.2091-1.7909-4-4-4-2.2091 0-4 1.7909-4 4m8 0h6M8 12H2.0002"
    />
  </svg>
);
export default GitCommit;
