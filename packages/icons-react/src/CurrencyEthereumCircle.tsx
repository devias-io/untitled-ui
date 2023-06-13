import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyEthereumCircle = (
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
      d="m7.05 14.15 4.9502 2.25 4.9498-2.25M21 11c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9 4.0294-9 9-9 9 4.0294 9 9Zm-13.95-.45 4.9502 2.25 4.9498-2.25-4.9498-5.85L7.05 10.55Z"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyEthereumCircle);
const Memo = memo(ForwardRef);
export default Memo;
