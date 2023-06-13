import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Ticket01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M10.2 7.6v-.9m0 4.95v-.9m0 4.95v-.9M5.88 4h12.24c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866C21 5.3678 21 5.872 21 6.88v1.17c-1.7397 0-3.15 1.4103-3.15 3.15 0 1.7397 1.4103 3.15 3.15 3.15v1.17c0 1.0081 0 1.5121-.1962 1.8972a1.8 1.8 0 0 1-.7866.7866c-.3851.1962-.8891.1962-1.8972.1962H5.88c-1.008 0-1.5121 0-1.8972-.1962a1.8 1.8 0 0 1-.7866-.7866C3 17.0321 3 16.5281 3 15.52v-1.17c1.7397 0 3.15-1.4103 3.15-3.15 0-1.7397-1.4103-3.15-3.15-3.15V6.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C4.3678 4 4.872 4 5.88 4Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Ticket01);
const Memo = memo(ForwardRef);
export default Memo;
