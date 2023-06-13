import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Youtube = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M21.5813 7.1999a2.5276 2.5276 0 0 0-1.7635-1.8181C18.2542 5 12 5 12 5s-6.2542 0-7.8178.4182a2.5272 2.5272 0 0 0-1.7635 1.818 26.362 26.362 0 0 0-.4182 4.8089 26.3618 26.3618 0 0 0 .4182 4.8452 2.527 2.527 0 0 0 1.7635 1.7454c1.5636.4181 7.8178.4181 7.8178.4181s6.2542 0 7.8178-.4181a2.5275 2.5275 0 0 0 1.7635-1.8181 26.363 26.363 0 0 0 .4182-4.7725 26.3605 26.3605 0 0 0-.4182-4.8452Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 9.4653c0-.4772 0-.7159.0997-.8491a.5.5 0 0 1 .3647-.1991c.166-.0118.3667.1172.7682.3753l3.9428 2.5347c.3484.2239.5226.3359.5828.4783a.5006.5006 0 0 1 0 .3892c-.0602.1424-.2344.2544-.5828.4783l-3.9428 2.5347c-.4015.2581-.6022.3872-.7682.3753a.5.5 0 0 1-.3647-.1991c-.0997-.1332-.0997-.3718-.0997-.8491V9.4653Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Youtube);
const Memo = memo(ForwardRef);
export default Memo;
