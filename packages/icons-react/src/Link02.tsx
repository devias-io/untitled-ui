import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Link02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M9.3 16H7.5C5.0147 16 3 13.9853 3 11.5S5.0147 7 7.5 7h1.8m5.4 9h1.8c2.4853 0 4.5-2.0147 4.5-4.5S18.9853 7 16.5 7h-1.8m-7.2 4.5h9"
    />
  </svg>
);
const ForwardRef = forwardRef(Link02);
const Memo = memo(ForwardRef);
export default Memo;
