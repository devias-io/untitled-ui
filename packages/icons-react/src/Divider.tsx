import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Divider = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 12h.01m4.49 0h.01m8.99 0h.01M12 12h.01M21 12h.01M21 21v-.8c0-1.1201 0-1.6802-.218-2.108a1.9996 1.9996 0 0 0-.874-.874C19.4802 17 18.9201 17 17.8 17H6.2c-1.1201 0-1.6802 0-2.108.218a1.9998 1.9998 0 0 0-.874.874C3 18.5198 3 19.0799 3 20.2v.8M21 3v.8c0 1.1201 0 1.6802-.218 2.108a1.9997 1.9997 0 0 1-.874.874C19.4802 7 18.9201 7 17.8 7H6.2c-1.1201 0-1.6802 0-2.108-.218a1.9999 1.9999 0 0 1-.874-.874C3 5.4802 3 4.92 3 3.8V3"
    />
  </svg>
);
const ForwardRef = forwardRef(Divider);
const Memo = memo(ForwardRef);
export default Memo;
