import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleDown = (
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
      d="m8.4 11 3.6 3.6m0 0 3.6-3.6M12 14.6V7.4m9 3.6c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleDown);
const Memo = memo(ForwardRef);
export default Memo;
