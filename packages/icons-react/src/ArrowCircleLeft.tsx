import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleLeft = (
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
      d="M12 7.4 8.4 11m0 0 3.6 3.6M8.4 11h7.2m5.4 0c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleLeft);
const Memo = memo(ForwardRef);
export default Memo;
