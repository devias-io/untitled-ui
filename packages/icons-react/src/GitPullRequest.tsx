import * as React from 'react';
import { SVGProps } from 'react';
const GitPullRequest = (props: SVGProps<SVGSVGElement>) => (
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
      d="M18 21c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3ZM6 9c1.6569 0 3-1.3431 3-3S7.6569 3 6 3 3 4.3431 3 6s1.3431 3 3 3Zm7-3h3a2 2 0 0 1 2 2v7"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 15c-1.6569 0-3 1.3431-3 3s1.3431 3 3 3 3-1.3431 3-3-1.3431-3-3-3Zm0 0V8a1.9999 1.9999 0 0 0-2-2h-3M6 9c1.6569 0 3-1.3431 3-3S7.6569 3 6 3 3 4.3431 3 6s1.3431 3 3 3Zm0 0v12"
    />
  </svg>
);
export default GitPullRequest;
