import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Upload04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.6 11 12 7.4m0 0L8.4 11M12 7.4v8.28c0 1.2516 0 1.8775.4955 2.5781.3292.4656 1.277 1.0402 1.842 1.1167.8504.1153 1.1733-.0532 1.8192-.3901C19.035 17.4832 21 14.4711 21 11c0-4.9706-4.0294-9-9-9s-9 4.0294-9 9c0 3.3313 1.8099 6.2398 4.5 7.796"
    />
  </svg>
);
const ForwardRef = forwardRef(Upload04);
const Memo = memo(ForwardRef);
export default Memo;
