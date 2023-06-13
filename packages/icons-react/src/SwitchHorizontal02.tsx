import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SwitchHorizontal02 = (
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
      d="M4 17h16m0 0-4-4m4 4-4 4m4-14H4m0 0 4-4M4 7l4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SwitchHorizontal02);
const Memo = memo(ForwardRef);
export default Memo;
