import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bold01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 12h8c2.2091 0 4-1.7909 4-4 0-2.2091-1.7909-4-4-4H6v8Zm0 0h9c2.2091 0 4 1.7909 4 4 0 2.2091-1.7909 4-4 4H6v-8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bold01);
const Memo = memo(ForwardRef);
export default Memo;
