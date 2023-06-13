import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Monitor03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 12.9h18M8.4 19.2h7.2m-8.28-2.7h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 14.4482 21 13.6921 21 12.18V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 3 18.1921 3 16.68 3H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 5.0517 3 5.8078 3 7.32v4.86c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Monitor03);
const Memo = memo(ForwardRef);
export default Memo;
