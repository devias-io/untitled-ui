import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Scale01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.8 20H7.32m0 0c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 17.9482 3 17.1921 3 15.68M7.32 20h.36c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799C12 17.9482 12 17.1921 12 15.68v-.36c0-1.5121 0-2.2682-.2943-2.8458a2.6996 2.6996 0 0 0-1.1799-1.1799C9.9482 11 9.1921 11 7.68 11h-.36c-1.5121 0-2.2682 0-2.8458.2943a2.6998 2.6998 0 0 0-1.18 1.1799C3 13.0518 3 13.8079 3 15.32v.36m0 0V9.2M10.2 2h3.6M21 9.2v3.6M17.4 20c.837 0 1.2555 0 1.5988-.092a2.7 2.7 0 0 0 1.9092-1.9092C21 17.6555 21 17.237 21 16.4m0-10.8c0-.837 0-1.2555-.092-1.5988a2.7 2.7 0 0 0-1.9092-1.9092C18.6555 2 18.237 2 17.4 2M6.6 2c-.837 0-1.2555 0-1.5988.092A2.7 2.7 0 0 0 3.092 4.0012C3 4.3445 3 4.763 3 5.6"
    />
  </svg>
);
const ForwardRef = forwardRef(Scale01);
const Memo = memo(ForwardRef);
export default Memo;
