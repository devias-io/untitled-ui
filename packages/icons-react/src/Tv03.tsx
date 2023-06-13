import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Tv03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M16.5 3 12 6.6 7.5 3m-.18 16.2h9.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C21 17.1482 21 16.3921 21 14.88v-3.96c0-1.5121 0-2.2682-.2943-2.8458a2.6998 2.6998 0 0 0-1.1799-1.18C18.9482 6.6 18.1921 6.6 16.68 6.6H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C3 8.6517 3 9.4078 3 10.92v3.96c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799.5775.2943 1.3336.2943 2.8457.2943Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Tv03);
const Memo = memo(ForwardRef);
export default Memo;
