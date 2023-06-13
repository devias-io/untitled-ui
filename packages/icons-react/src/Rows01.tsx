import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Rows01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M17.8 10c1.1201 0 1.6802 0 2.108-.218a1.9997 1.9997 0 0 0 .874-.874C21 8.4802 21 7.92 21 6.8v-.6c0-1.1201 0-1.6802-.218-2.108a1.9998 1.9998 0 0 0-.874-.874C19.4802 3 18.9201 3 17.8 3H6.2c-1.1201 0-1.6802 0-2.108.218a1.9999 1.9999 0 0 0-.874.874C3 4.5198 3 5.08 3 6.2v.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 10 5.08 10 6.2 10h11.6Zm0 11c1.1201 0 1.6802 0 2.108-.218a1.9996 1.9996 0 0 0 .874-.874C21 19.4802 21 18.9201 21 17.8v-.6c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C19.4802 14 18.9201 14 17.8 14H6.2c-1.1201 0-1.6802 0-2.108.218a1.9997 1.9997 0 0 0-.874.874C3 15.5198 3 16.0799 3 17.2v.6c0 1.1201 0 1.6802.218 2.108.1917.3763.4977.6823.874.874C4.5198 21 5.08 21 6.2 21h11.6Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Rows01);
const Memo = memo(ForwardRef);
export default Memo;
