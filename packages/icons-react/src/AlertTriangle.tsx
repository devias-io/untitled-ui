import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AlertTriangle = (
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
      d="M11.9998 9v4m0 4h.01M10.6151 3.8917l-8.225 14.2066c-.4561.788-.6842 1.182-.6505 1.5054.0294.282.1772.5383.4065.7051.263.1912.7182.1912 1.6288.1912h16.4497c.9106 0 1.3658 0 1.6288-.1912a1.0003 1.0003 0 0 0 .4065-.7051c.0337-.3234-.1944-.7174-.6506-1.5054L13.3844 3.8917c-.4545-.7852-.6818-1.1777-.9783-1.3096a1 1 0 0 0-.8126 0c-.2966.1319-.5239.5244-.9784 1.3096Z"
    />
  </svg>
);
const ForwardRef = forwardRef(AlertTriangle);
const Memo = memo(ForwardRef);
export default Memo;
