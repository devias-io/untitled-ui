import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowNarrowLeft = (
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
      d="M20 12H4m0 0 6 6m-6-6 6-6"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowNarrowLeft);
const Memo = memo(ForwardRef);
export default Memo;
