import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CreditCardRefresh = (
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
      d="M21 9.3H3m8.1 8.1h7.02c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 16.0321 21 15.5281 21 14.52V7.68c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 4.8 19.1281 4.8 18.12 4.8H16.5m-5.4 12.6 1.8 1.8m-1.8-1.8 1.8-1.8m-5.4 1.8H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 16.0321 3 15.5281 3 14.52V7.68c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 4.8 4.872 4.8 5.88 4.8h7.02m0 0-1.8 1.8m1.8-1.8L11.1 3"
    />
  </svg>
);
const ForwardRef = forwardRef(CreditCardRefresh);
const Memo = memo(ForwardRef);
export default Memo;
