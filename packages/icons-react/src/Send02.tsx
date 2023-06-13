import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Send02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12.0005 18.9998v-7m.2915 7.0847 6.9784 2.3362c.5469.1831.8204.2746.989.2089a.4998.4998 0 0 0 .3-.3309c.0488-.1743-.0691-.4374-.3049-.9638L12.766 3.6222c-.2306-.5147-.3459-.772-.5066-.8518a.5.5 0 0 0-.4432-.0007c-.1609.0792-.277.3362-.5093.8502l-7.5545 16.716c-.2377.526-.3565.7889-.3082.9634a.5.5 0 0 0 .299.3319c.1686.0662.4425-.0248.9903-.2066l7.0525-2.3408c.0939-.0311.1408-.0467.1889-.0529a.5009.5009 0 0 1 .1283.0002c.048.0063.0949.022.1888.0534Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Send02);
const Memo = memo(ForwardRef);
export default Memo;
