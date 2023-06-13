import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FlipForward = (
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
      d="M21 9H7.5C5.0147 9 3 11.0147 3 13.5S5.0147 18 7.5 18H12m9-9-4-4m4 4-4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(FlipForward);
const Memo = memo(ForwardRef);
export default Memo;
