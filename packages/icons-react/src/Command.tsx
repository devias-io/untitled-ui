import * as React from 'react';
import { SVGProps } from 'react';
const Command = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9 9V6c0-1.6569-1.3431-3-3-3S3 4.3431 3 6s1.3431 3 3 3h3Zm0 0v6m0-6h6m-6 6v3c0 1.6569-1.3431 3-3 3s-3-1.3431-3-3 1.3431-3 3-3h3Zm0 0h6m0 0h3c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3v-3Zm0 0V9m0 0V6c0-1.6569 1.3431-3 3-3s3 1.3431 3 3-1.3431 3-3 3h-3Z"
    />
  </svg>
);
export default Command;
