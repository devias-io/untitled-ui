import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SunSetting02 = (
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
      d="M21 15.15H3m16.2 3.15H4.8M12 3v1.8M4.8 12H3m3.8827-5.1173L5.6099 5.6099M17.117 6.8827l1.2728-1.2728M21 12h-1.8M7.5 12c0-2.4853 2.0147-4.5 4.5-4.5s4.5 2.0147 4.5 4.5"
    />
  </svg>
);
const ForwardRef = forwardRef(SunSetting02);
const Memo = memo(ForwardRef);
export default Memo;
