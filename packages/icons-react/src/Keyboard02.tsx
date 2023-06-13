import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Keyboard02 = (
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
      d="M7.5 13.65h9M6.6 9.6h.009m3.591 0h.009m3.591 0h.009m3.591 0h.009M5.88 16.8h12.24c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866C21 15.4321 21 14.9281 21 13.92V8.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C19.6321 6 19.1281 6 18.12 6H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 7.3678 3 7.872 3 8.88v5.04c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Keyboard02);
const Memo = memo(ForwardRef);
export default Memo;
