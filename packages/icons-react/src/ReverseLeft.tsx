import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ReverseLeft = (
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
      d="M4 7h10c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6H4M4 7l4-4M4 7l4 4"
    />
  </svg>
);
const ForwardRef = forwardRef(ReverseLeft);
const Memo = memo(ForwardRef);
export default Memo;
