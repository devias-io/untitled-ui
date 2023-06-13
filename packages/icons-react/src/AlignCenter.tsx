import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignCenter = (
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
      d="M18 10H6m15-4H3m18 8H3m15 4H6"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignCenter);
const Memo = memo(ForwardRef);
export default Memo;
