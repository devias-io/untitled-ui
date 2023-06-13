import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Phone01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.3 16.95h.009M7.88 21h6.84c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C16.2321 3 15.7281 3 14.72 3H7.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C5 4.3678 5 4.872 5 5.88v12.24c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C6.3678 21 6.872 21 7.88 21Zm3.87-4.05a.45.45 0 1 1-.9 0 .45.45 0 0 1 .9 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Phone01);
const Memo = memo(ForwardRef);
export default Memo;
