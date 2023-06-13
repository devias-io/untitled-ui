import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BankNote02 = (
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
      d="M6.6 9.5v3.6m10.8-3.6v3.6M3 7.88v6.84c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 16.2321 21 15.7281 21 14.72V7.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 5 19.1281 5 18.12 5H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 6.3678 3 6.872 3 7.88Zm11.25 3.42c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25S10.7574 9.05 12 9.05s2.25 1.0074 2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(BankNote02);
const Memo = memo(ForwardRef);
export default Memo;
