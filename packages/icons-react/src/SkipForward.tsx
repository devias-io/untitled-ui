import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const SkipForward = (
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
      d="M19 5v14M7.5995 17.9204l5.8388-4.671c.5338-.4271.8007-.6406.8974-.8986a1.0004 1.0004 0 0 0 0-.7016c-.0967-.258-.3636-.4715-.8974-.8986l-5.8388-4.671c-.8322-.6657-1.2482-.9986-1.5984-.999a1 1 0 0 0-.7826.3762C5 5.7304 5 6.2633 5 7.329v9.342c0 1.0657 0 1.5985.2185 1.8722a1 1 0 0 0 .7826.3762c.3502-.0004.7662-.3333 1.5984-.999Z"
    />
  </svg>
);
const ForwardRef = forwardRef(SkipForward);
const Memo = memo(ForwardRef);
export default Memo;
