import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Bus = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M7.95 18.3v1.98c0 .252 0 .378-.049.4743a.4502.4502 0 0 1-.1967.1967C7.608 21 7.482 21 7.23 21H5.52c-.252 0-.378 0-.4743-.049a.4502.4502 0 0 1-.1966-.1967C4.8 20.658 4.8 20.532 4.8 20.28V18.3m12.6 0v1.98c0 .252 0 .378-.049.4743a.4505.4505 0 0 1-.1967.1967C17.058 21 16.932 21 16.68 21h-1.71c-.252 0-.378 0-.4743-.049a.4505.4505 0 0 1-.1967-.1967c-.049-.0963-.049-.2223-.049-.4743V18.3M3 12h16.2M3 6.15h16.2m-13.05 9H7.5m7.2 0h1.35M7.32 18.3h7.56c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V7.32c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C17.1482 3 16.3921 3 14.88 3H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 5.0517 3 5.8078 3 7.32v6.66c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Bus);
const Memo = memo(ForwardRef);
export default Memo;
