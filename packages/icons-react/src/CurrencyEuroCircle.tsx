import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyEuroCircle = (
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
      d="M15 7.6458C14.2039 6.9333 13.1525 6.5 12 6.5c-2.4853 0-4.5 2.0147-4.5 4.5s2.0147 4.5 4.5 4.5c1.1525 0 2.2039-.4333 3-1.1458M6.6 12.35h4.5m-4.5-2.7h4.5M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEuroCircle);
const Memo = memo(ForwardRef);
export default Memo;
