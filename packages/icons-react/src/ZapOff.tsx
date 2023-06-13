import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ZapOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m7.5 8.4-3.5159 4.2191c-.314.3767-.4709.565-.4733.7241a.45.45 0 0 0 .1671.3568c.1238.1.369.1.8593.1H11.1l-.9 7.2 4.5-5.4m-.315-5.4h3.2778c.4903 0 .7355 0 .8593.1a.4501.4501 0 0 1 .1671.3568c-.0024.1591-.1594.3474-.4733.7241l-1.2207 1.4648M9.8155 5.6214 12 3l-.5398 4.318M19.2 20.1 3 3.9"
    />
  </svg>
);
const ForwardRef = forwardRef(ZapOff);
const Memo = memo(ForwardRef);
export default Memo;
