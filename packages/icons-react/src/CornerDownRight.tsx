import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CornerDownRight = (
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
      d="M4 4v1.4c0 3.3603 0 5.0405.654 6.3239a5.9996 5.9996 0 0 0 2.622 2.6221C8.5596 15 10.2398 15 13.6 15H20m0 0-5-5m5 5-5 5"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerDownRight);
const Memo = memo(ForwardRef);
export default Memo;
