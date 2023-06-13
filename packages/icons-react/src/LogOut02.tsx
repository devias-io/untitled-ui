import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LogOut02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m16 17 5-5m0 0-5-5m5 5H9m3 5c0 .93 0 1.395-.1022 1.7765a3.0002 3.0002 0 0 1-2.1213 2.1213C9.395 21 8.93 21 8 21h-.5c-1.3978 0-2.0967 0-2.648-.2284a2.9999 2.9999 0 0 1-1.6236-1.6235C3 18.5967 3 17.8978 3 16.5v-9c0-1.3978 0-2.0967.2284-2.648A3 3 0 0 1 4.852 3.2284C5.4033 3 6.1021 3 7.5 3H8c.93 0 1.395 0 1.7765.1022a3 3 0 0 1 2.1213 2.1213C12 5.605 12 6.07 12 7"
    />
  </svg>
);
const ForwardRef = forwardRef(LogOut02);
const Memo = memo(ForwardRef);
export default Memo;
