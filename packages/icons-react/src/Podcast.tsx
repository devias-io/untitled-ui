import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Podcast = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.707 17.4c2.1091-1.4264 3.493-3.7999 3.493-6.4935C19.2 6.54 15.5734 3 11.1 3S3 6.54 3 10.9065c0 2.6936 1.384 5.0671 3.493 6.4935m1.3307-3.6C7.0669 13.035 6.6 12.0078 6.6 10.8755 6.6 8.5144 8.615 6.6 11.1 6.6c2.4851 0 4.5 1.9144 4.5 4.2755 0 1.1331-.4669 2.1595-1.2237 2.9245M11.1 21c-.9941 0-1.8-.8059-1.8-1.8v-1.8c0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8v1.8c0 .9941-.8059 1.8-1.8 1.8Zm.9-9.9a.9.9 0 0 1-.9.9.9.9 0 0 1-.9-.9.9.9 0 0 1 .9-.9.9.9 0 0 1 .9.9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Podcast);
const Memo = memo(ForwardRef);
export default Memo;
