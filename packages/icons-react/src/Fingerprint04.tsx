import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Fingerprint04 = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
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
      d="M5.8069 18.5304a4.0813 4.0813 0 0 1 .0544-.0891C7.2158 16.2881 7.9999 13.7418 7.9999 11c0-2.2091 1.7909-4 4-4 2.2091 0 4 1.7909 4 4 0 1.017-.0692 2.0186-.2033 3m-2.1174 6.8436A21.8806 21.8806 0 0 0 15.1707 17m3.839 1.132C19.6547 15.8657 20 13.4732 20 11c0-4.4183-3.5817-8-8-8-1.4571 0-2.8233.3896-4 1.0703M3 15.364c.6407-1.3186 1-2.7994 1-4.364 0-1.4572.3896-2.8233 1.0703-4m6.9296 4c0 3.5172-1.0088 6.7988-2.7528 9.5712"
    />
  </svg>
);
const ForwardRef = forwardRef(Fingerprint04);
const Memo = memo(ForwardRef);
export default Memo;
