import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowNarrowDownLeft = (
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
      d="M18 6 6 18m0 0h8m-8 0v-8"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowNarrowDownLeft);
const Memo = memo(ForwardRef);
export default Memo;
