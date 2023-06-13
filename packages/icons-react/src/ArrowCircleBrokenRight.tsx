import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleBrokenRight = (
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
      d="M3.2041 7.5C4.7602 4.8099 7.6688 3 11.0001 3c4.9705 0 9 4.0294 9 9s-4.0295 9-9 9c-3.3313 0-6.2399-1.8099-7.796-4.5M11 15.6l3.6-3.6m0 0L11 8.4m3.6 3.6H2"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleBrokenRight);
const Memo = memo(ForwardRef);
export default Memo;
