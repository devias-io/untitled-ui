import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const HorizontalBarChart02 = (
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
      d="M15.6 9.75v3.06c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981H3m9 0v3.06c0 .504 0 .7561-.0981.9486a.9006.9006 0 0 1-.3933.3933c-.1925.0981-.4446.0981-.9486.0981H3M3 3v18M3 9.75h14.76c.504 0 .7561 0 .9486-.098a.9003.9003 0 0 0 .3933-.3934C19.2 9.066 19.2 8.814 19.2 8.31V6.69c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C18.5161 5.25 18.264 5.25 17.76 5.25H3v4.5Z"
    />
  </svg>
);
const ForwardRef = forwardRef(HorizontalBarChart02);
const Memo = memo(ForwardRef);
export default Memo;
