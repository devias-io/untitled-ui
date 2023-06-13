import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const RefreshCcw03 = (
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
      d="M12.9 3s.7643.1092 3.9276 3.2724c3.1632 3.1633 3.1632 8.2919 0 11.4552-1.1208 1.1207-2.4882 1.8444-3.9276 2.171M12.9 3h5.4m-5.4 0v5.4M9.3 20.9998s-.7643-.1092-3.9276-3.2724c-3.1632-3.1633-3.1632-8.2919 0-11.4551C6.4932 5.1515 7.8606 4.4278 9.3 4.1013m0 16.8985L3.9 21m5.4-.0002V15.6"
    />
  </svg>
);
const ForwardRef = forwardRef(RefreshCcw03);
const Memo = memo(ForwardRef);
export default Memo;
