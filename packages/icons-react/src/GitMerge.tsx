import * as React from 'react';
import { SVGProps } from 'react';
const GitMerge = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 21c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3ZM6 9c1.6569 0 3-1.3431 3-3S7.6569 3 6 3 3 4.3431 3 6s1.3431 3 3 3Zm0 12V9a9.0003 9.0003 0 0 0 9 9"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 18c0 1.6569 1.3431 3 3 3s3-1.3431 3-3-1.3431-3-3-3-3 1.3431-3 3Zm0 0a9.0002 9.0002 0 0 1-9-9m0 0c1.6569 0 3-1.3431 3-3S7.6569 3 6 3 3 4.3431 3 6s1.3431 3 3 3Zm0 0v12"
    />
  </svg>
);
export default GitMerge;
