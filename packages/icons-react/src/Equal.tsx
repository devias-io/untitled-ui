import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Equal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M5 9h14M5 15h14"
    />
  </svg>
);
const ForwardRef = forwardRef(Equal);
const Memo = memo(ForwardRef);
export default Memo;
