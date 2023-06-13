import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CurrencyBitcoin = (
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
      d="M9.1 3v1.8m0 14.4V21m3.6-18v1.8m0 14.4V21M7.3 4.8h5.85c1.9882 0 3.6 1.6118 3.6 3.6 0 1.9882-1.6118 3.6-3.6 3.6H7.3h6.75c1.9882 0 3.6 1.6118 3.6 3.6 0 1.9882-1.6118 3.6-3.6 3.6H7.3m0-14.4H5.5m1.8 0v14.4m0 0H5.5"
    />
  </svg>
);
const ForwardRef = forwardRef(CurrencyBitcoin);
const Memo = memo(ForwardRef);
export default Memo;
