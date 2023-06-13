import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SwitchVertical02 = (
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
      d="M7 4v16m0 0-4-4m4 4 4-4m6 4V4m0 0-4 4m4-4 4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SwitchVertical02);
const Memo = memo(ForwardRef);
export default Memo;
