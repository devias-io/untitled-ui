import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ScissorsCut02 = (
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
      d="M4.5 8.6 21 17m0-10L4.5 15.4m13-3.4h.01M22 12h.01M6 3c1.6569 0 3 1.3431 3 3S7.6569 9 6 9 3 7.6569 3 6s1.3431-3 3-3Zm0 12c1.6569 0 3 1.3431 3 3s-1.3431 3-3 3-3-1.3431-3-3 1.3431-3 3-3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ScissorsCut02);
const Memo = memo(ForwardRef);
export default Memo;
