import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Safe = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M6 21h3m6 0h3m-.5-14.5v8M3 6.2v8.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 18 5.08 18 6.2 18h11.6c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 16.4802 21 15.9201 21 14.8V6.2c0-1.1201 0-1.6802-.218-2.108a1.9998 1.9998 0 0 0-.874-.874C19.4802 3 18.9201 3 17.8 3H6.2c-1.1201 0-1.6802 0-2.108.218a2 2 0 0 0-.874.874C3 4.5198 3 5.08 3 6.2Zm8.5 4.3c0 1.3807-1.1193 2.5-2.5 2.5s-2.5-1.1193-2.5-2.5S7.6193 8 9 8s2.5 1.1193 2.5 2.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Safe);
const Memo = memo(ForwardRef);
export default Memo;
