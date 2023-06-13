import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bold02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 4v16M9.5 4h6c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4h-6 7c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4h-7m0-16v16m0-16H4m5.5 16H4"
    />
  </svg>
);
const ForwardRef = forwardRef(Bold02);
const Memo = memo(ForwardRef);
export default Memo;
