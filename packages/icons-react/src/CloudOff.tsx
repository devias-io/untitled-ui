import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CloudOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M20.7303 14.8063A4.0406 4.0406 0 0 0 21 13.35c0-2.1092-1.6124-3.8418-3.6718-4.0326C16.907 6.755 14.6818 4.8 12 4.8c-.4019 0-.7936.044-1.1704.1272m-3.0709 1.93a5.3753 5.3753 0 0 0-1.087 2.4602C4.6125 9.5082 3 11.2408 3 13.35c0 2.2368 1.8133 4.05 4.05 4.05h9.9c.4105 0 .8067-.0611 1.18-.1746M3.9 3l16.2 16.2"
    />
  </svg>
);
const ForwardRef = forwardRef(CloudOff);
const Memo = memo(ForwardRef);
export default Memo;
