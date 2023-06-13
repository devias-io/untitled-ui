import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CornerLeftUp = (
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
      d="M21 20h-3.4c-3.3603 0-5.0405 0-6.3239-.654a5.9996 5.9996 0 0 1-2.6221-2.6221C8 15.4405 8 13.7603 8 10.4V4m0 0 5 5M8 4 3 9"
    />
  </svg>
);
const ForwardRef = forwardRef(CornerLeftUp);
const Memo = memo(ForwardRef);
export default Memo;
