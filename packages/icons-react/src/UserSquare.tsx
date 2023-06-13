import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UserSquare = (
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
      d="M4.8 19.8357C5.3423 20 6.0748 20 7.32 20h9.36c1.2452 0 1.9777 0 2.52-.1643m-14.4 0a1.9652 1.9652 0 0 1-.3258-.13 2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68V6.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 2 5.8078 2 7.32 2h9.36c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18C21 4.0517 21 4.8078 21 6.32v9.36c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799 1.9656 1.9656 0 0 1-.3258.13m-14.4 0c.0003-.7284.0047-1.1138.0692-1.438a3.6 3.6 0 0 1 2.8285-2.8285C8.0454 15.5 8.4637 15.5 9.3 15.5h5.4c.8364 0 1.2546 0 1.6023.0692a3.5998 3.5998 0 0 1 2.8285 2.8285c.0645.3242.0689.7096.0692 1.438M15.6 8.75c0 1.9882-1.6118 3.6-3.6 3.6-1.9882 0-3.6-1.6118-3.6-3.6 0-1.9882 1.6118-3.6 3.6-3.6 1.9882 0 3.6 1.6118 3.6 3.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UserSquare);
const Memo = memo(ForwardRef);
export default Memo;
