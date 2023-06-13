import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Moon01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M22 15.8442c-1.3134.594-2.7714.9246-4.3065.9246-5.7782 0-10.4623-4.6841-10.4623-10.4623 0-1.5351.3306-2.9931.9246-4.3065C4.5258 3.6416 2 7.2947 2 11.5377 2 17.3159 6.6841 22 12.4623 22c4.243 0 7.8961-2.5258 9.5377-6.1558Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Moon01);
const Memo = memo(ForwardRef);
export default Memo;
