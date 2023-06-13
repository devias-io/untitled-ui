import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SwitchHorizontal01 = (
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
      d="M20 17H4m0 0 4-4m-4 4 4 4M4 7h16m0 0-4-4m4 4-4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(SwitchHorizontal01);
const Memo = memo(ForwardRef);
export default Memo;
