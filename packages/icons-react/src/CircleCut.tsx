import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CircleCut = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.5 18.796C10.1901 17.2398 12 14.3313 12 11c0-3.3313-1.8099-6.2398-4.5-7.796M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CircleCut);
const Memo = memo(ForwardRef);
export default Memo;
