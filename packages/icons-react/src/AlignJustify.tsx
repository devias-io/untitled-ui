import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlignJustify = (
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
      d="M21 10H3m18 8H3M21 6H3m18 8H3"
    />
  </svg>
);
const ForwardRef = forwardRef(AlignJustify);
const Memo = memo(ForwardRef);
export default Memo;
