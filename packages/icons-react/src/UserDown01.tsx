import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UserDown01 = (
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
      d="M12 14.25H7.95c-1.256 0-1.884 0-2.395.155a3.6 3.6 0 0 0-2.4 2.4C3 17.316 3 17.944 3 19.2m12.6-2.7 2.7 2.7m0 0 2.7-2.7m-2.7 2.7v-5.4m-4.05-6.75c0 2.2367-1.8132 4.05-4.05 4.05-2.2367 0-4.05-1.8133-4.05-4.05S7.9633 3 10.2 3c2.2368 0 4.05 1.8133 4.05 4.05Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UserDown01);
const Memo = memo(ForwardRef);
export default Memo;
