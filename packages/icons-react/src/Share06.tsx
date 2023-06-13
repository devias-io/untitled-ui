import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Share06 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.7914 12.6074c.2441-.2093.3661-.3139.4109-.4384a.5004.5004 0 0 0 0-.338c-.0448-.1245-.1668-.2292-.4109-.4384L12.3206 4.132c-.4202-.3602-.6303-.5403-.8082-.5447a.5.5 0 0 0-.4.184C11 3.909 11 4.1858 11 4.7392v4.2953a9.6657 9.6657 0 0 0-8 9.5164v.6119a11.4011 11.4011 0 0 1 8-4.0924v4.1901c0 .5535 0 .8302.1124.9682a.5.5 0 0 0 .4.1839c.1779-.0044.388-.1845.8082-.5447l8.4708-7.2606Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Share06);
const Memo = memo(ForwardRef);
export default Memo;
