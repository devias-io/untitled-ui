import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SlashDivider = (
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
      d="m7 21 9-18"
    />
  </svg>
);
const ForwardRef = forwardRef(SlashDivider);
const Memo = memo(ForwardRef);
export default Memo;
