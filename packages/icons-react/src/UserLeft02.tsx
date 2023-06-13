import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UserLeft02 = (
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
      d="m18.3 8.4-2.7-2.7m0 0L18.3 3m-2.7 2.7H21m-5.4 13.5v-1.08c0-1.5121 0-2.2682-.2943-2.8458a2.6996 2.6996 0 0 0-1.1799-1.1799C13.5482 13.8 12.7921 13.8 11.28 13.8H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.6998 2.6998 0 0 0-1.18 1.1799C3 15.8518 3 16.6079 3 18.12v1.08m9.45-12.15c0 1.7397-1.4103 3.15-3.15 3.15-1.7397 0-3.15-1.4103-3.15-3.15 0-1.7397 1.4103-3.15 3.15-3.15 1.7397 0 3.15 1.4103 3.15 3.15Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UserLeft02);
const Memo = memo(ForwardRef);
export default Memo;
