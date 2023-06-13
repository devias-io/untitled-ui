import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Variable = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.1155 19.2C20.3217 16.76 21 14.0096 21 11.1c0-2.9096-.6783-5.66-1.8845-8.1M4.8845 3C3.6783 5.44 3 8.1904 3 11.1c0 2.9096.6783 5.66 1.8845 8.1M16.0938 8.0625h-.0807a2.01 2.01 0 0 0-1.5295.7072l-4.8374 5.6732a2.0101 2.0101 0 0 1-1.5294.7071H8.036m1.0073-7.0875h1.2546c.4497 0 .8449.2997.9685.7343l1.597 5.6189c.1235.4346.5187.7343.9684.7343h1.2547"
    />
  </svg>
);
const ForwardRef = forwardRef(Variable);
const Memo = memo(ForwardRef);
export default Memo;
