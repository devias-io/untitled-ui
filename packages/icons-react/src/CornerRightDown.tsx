import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CornerRightDown = (
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
      d="M3 4h3.4c3.3603 0 5.0405 0 6.3239.654a5.9996 5.9996 0 0 1 2.6221 2.622C16 8.5596 16 10.2398 16 13.6V20m0 0-5-5m5 5 5-5"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerRightDown);
const Memo = memo(ForwardRef);
export default Memo;
