import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Command = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    ref={ref}
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
const ForwardRef = forwardRef(Command);
const Memo = memo(ForwardRef);
export default Memo;
