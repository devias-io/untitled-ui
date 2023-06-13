import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SpacingHeight02 = (
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
      d="M21 3H3m18 18H3m9-3.5v-11m3.0001 0H9m6.0001 11H9"
    />
  </svg>
);
const ForwardRef = forwardRef(SpacingHeight02);
const Memo = memo(ForwardRef);
export default Memo;
