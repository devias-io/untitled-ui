import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const VideoRecorder = (
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
      d="M21 8.5382c0-.5452 0-.8178-.1078-.944a.4501.4501 0 0 0-.3775-.1564c-.1655.013-.3583.2058-.7438.5913L16.5 11.3l3.2709 3.2709c.3855.3855.5783.5783.7438.5913a.4501.4501 0 0 0 .3775-.1563C21 14.8796 21 14.607 21 14.0618V8.5382ZM3 9.32c0-1.5121 0-2.2682.2943-2.8458a2.7 2.7 0 0 1 1.18-1.18C5.0517 5 5.8078 5 7.32 5h4.86c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v3.96c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799c-.5776.2943-1.3337.2943-2.8458.2943H7.32c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3 15.5482 3 14.7921 3 13.28V9.32Z"
    />
  </svg>
);
const ForwardRef = forwardRef(VideoRecorder);
const Memo = memo(ForwardRef);
export default Memo;
