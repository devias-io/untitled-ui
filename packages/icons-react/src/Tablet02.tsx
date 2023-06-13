import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Tablet02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.9 3v1.26c0 .504 0 .756-.0981.9486a.9003.9003 0 0 1-.3933.3933C13.2161 5.7 12.964 5.7 12.46 5.7H9.94c-.504 0-.756 0-.9486-.098a.9.9 0 0 1-.3933-.3934C8.5 5.016 8.5 4.764 8.5 4.26V3M6.88 21h8.64c1.0081 0 1.5121 0 1.8972-.1962a1.8 1.8 0 0 0 .7866-.7866c.1962-.3851.1962-.8891.1962-1.8972V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C17.0321 3 16.5281 3 15.52 3H6.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C4 4.3678 4 4.872 4 5.88v12.24c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866C5.3678 21 5.872 21 6.88 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tablet02);
const Memo = memo(ForwardRef);
export default Memo;
