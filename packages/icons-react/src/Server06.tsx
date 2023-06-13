import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Server06 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M19.2 11c0 3.9765-3.2235 7.2-7.2 7.2m7.2-7.2c0-3.9764-3.2235-7.2-7.2-7.2m7.2 7.2H4.8m7.2 7.2c-3.9764 0-7.2-3.2235-7.2-7.2m7.2 7.2a11.0166 11.0166 0 0 0 2.8805-7.2A11.0165 11.0165 0 0 0 12 3.8m0 14.4A11.0156 11.0156 0 0 1 9.1205 11 11.0155 11.0155 0 0 1 12 3.8M4.8 11c0-3.9764 3.2236-7.2 7.2-7.2M6.6 18.2c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Zm14.4 0c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8ZM6.6 3.8c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8C3 2.8059 3.8059 2 4.8 2c.9941 0 1.8.8059 1.8 1.8Zm14.4 0c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Server06);
const Memo = memo(ForwardRef);
export default Memo;
