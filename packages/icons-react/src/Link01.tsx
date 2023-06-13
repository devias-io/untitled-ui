import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Link01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m12.7076 18.3639-1.4143 1.4142c-1.9526 1.9527-5.1184 1.9527-7.071 0-1.9526-1.9526-1.9526-5.1184 0-7.071l1.4142-1.4142m12.7279 1.4142 1.4142-1.4142c1.9526-1.9527 1.9526-5.1185 0-7.0711-1.9526-1.9526-5.1184-1.9526-7.071 0L11.2933 5.636m-2.7928 9.8639 7-7"
    />
  </svg>
);
const ForwardRef = forwardRef(Link01);
const Memo = memo(ForwardRef);
export default Memo;
