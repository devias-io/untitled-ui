import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MicrophoneOff01 = (
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
      d="M14.7 8.66V4.7C14.7 3.2088 13.4912 2 12 2c-1.0599 0-1.9771.6107-2.419 1.4993M12 17.3V20m0-2.7c-3.4794 0-6.3-2.8206-6.3-6.3V9.2m6.3 8.1c3.4794 0 6.3-2.8206 6.3-6.3V9.2M8.4 20h7.2M3 2l18 18m-9-6.3c-1.4912 0-2.7-1.2088-2.7-2.7V8.3l4.6103 4.608A2.6914 2.6914 0 0 1 12 13.7Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MicrophoneOff01);
const Memo = memo(ForwardRef);
export default Memo;
