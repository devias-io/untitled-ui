import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyEuro = (
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
      d="M19 5.519C17.5176 4.2597 15.5975 3.5 13.5 3.5 8.8056 3.5 5 7.3056 5 12s3.8056 8.5 8.5 8.5c2.0975 0 4.0176-.7597 5.5-2.019M3 14h10M3 10h10"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEuro);
const Memo = memo(ForwardRef);
export default Memo;
