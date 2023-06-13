import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UserMinus02 = (
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
      d="M15.6 6.7H21m-5.4 12.6v-1.08c0-1.5121 0-2.2682-.2943-2.8458a2.6996 2.6996 0 0 0-1.1799-1.1799C13.5482 13.9 12.7921 13.9 11.28 13.9H7.32c-1.5121 0-2.2682 0-2.8458.2943a2.6998 2.6998 0 0 0-1.18 1.1799C3 15.9518 3 16.7079 3 18.22v1.08m9.45-12.15c0 1.7397-1.4103 3.15-3.15 3.15-1.7397 0-3.15-1.4103-3.15-3.15C6.15 5.4103 7.5603 4 9.3 4c1.7397 0 3.15 1.4103 3.15 3.15Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UserMinus02);
const Memo = memo(ForwardRef);
export default Memo;
