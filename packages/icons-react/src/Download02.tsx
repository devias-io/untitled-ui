import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Download02 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M21 21H3m15-10-6 6m0 0-6-6m6 6V3"
    />
  </svg>
);
const ForwardRef = forwardRef(Download02);
const Memo = memo(ForwardRef);
export default Memo;
