import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Award04 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m8.3886 12.9858-3.7575-4.697c-.234-.2923-.3509-.4385-.434-.6013a1.8005 1.8005 0 0 1-.1604-.457C4 7.0514 4 6.8642 4 6.4897V5.88c0-1.008 0-1.5121.1962-1.8972a1.8 1.8 0 0 1 .7866-.7866C5.3678 3 5.872 3 6.88 3h8.64c1.0081 0 1.5121 0 1.8972.1962a1.8 1.8 0 0 1 .7866.7866c.1962.385.1962.8891.1962 1.8972v.6098c0 .3744 0 .5616-.0368.7407a1.7993 1.7993 0 0 1-.1603.457c-.0831.1628-.2001.309-.434.6014l-3.7575 4.6969M4.9001 3.9 11.2 12l6.3-8.1m-3.118 9.418c1.7573 1.7574 1.7573 4.6066 0 6.364-1.7574 1.7573-4.6066 1.7573-6.364 0-1.7573-1.7574-1.7573-4.6066 0-6.364 1.7574-1.7573 4.6066-1.7573 6.364 0Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Award04);
const Memo = memo(ForwardRef);
export default Memo;
