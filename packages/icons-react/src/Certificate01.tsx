import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Certificate01 = (
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
      d="M6.5 20H5c-1.1046 0-2-.8954-2-2V4c0-1.1046.8954-2 2-2h14c1.1046 0 2 .8954 2 2v14c0 1.1046-.8954 2-2 2h-1.5M12 19c1.6569 0 3-1.3431 3-3s-1.3431-3-3-3-3 1.3431-3 3 1.3431 3 3 3Zm0 0 .0214-.0002-3.1927 3.1928-2.8285-2.8285 3.0194-3.0194M12 19l3.1928 3.1926 2.8284-2.8285-3.0194-3.0194M9 6h6M7 9.5h10"
    />
  </svg>
);
const ForwardRef = forwardRef(Certificate01);
const Memo = memo(ForwardRef);
export default Memo;
