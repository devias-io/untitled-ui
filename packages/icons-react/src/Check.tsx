import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Check = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20 6 9 17l-5-5"
    />
  </svg>
);
const ForwardRef = forwardRef(Check);
const Memo = memo(ForwardRef);
export default Memo;
