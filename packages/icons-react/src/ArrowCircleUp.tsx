import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ArrowCircleUp = (
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
      d="M15.6 11 12 7.4m0 0L8.4 11M12 7.4v7.2m9-3.6c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ArrowCircleUp);
const Memo = memo(ForwardRef);
export default Memo;
