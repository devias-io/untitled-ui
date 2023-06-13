import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hurricane03 = (
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
      d="M21 4H3m17 4H6m12 4H9m6 4H8m9 4h-5"
    />
  </svg>
);
const ForwardRef = forwardRef(Hurricane03);
const Memo = memo(ForwardRef);
export default Memo;
