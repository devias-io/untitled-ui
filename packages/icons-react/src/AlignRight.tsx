import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignRight = (
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
      d="M21 10H8m13-4H4m17 8H4m17 4H8"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignRight);
const Memo = memo(ForwardRef);
export default Memo;
