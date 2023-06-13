import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Infinity = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M18.1777 8c5.0961 0 5.0961 8 0 8-5.0949 0-7.1329-8-12.739-8-4.585 0-4.585 8 0 8 5.6061 0 7.6441-8 12.7401-8h-.0011Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Infinity);
const Memo = memo(ForwardRef);
export default Memo;
