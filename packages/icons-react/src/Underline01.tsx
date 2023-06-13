import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Underline01 = (
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
      d="M18 4v7c0 3.3137-2.6863 6-6 6s-6-2.6863-6-6V4M4 21h16"
    />
  </svg>
);
const ForwardRef = forwardRef(Underline01);
const Memo = memo(ForwardRef);
export default Memo;
