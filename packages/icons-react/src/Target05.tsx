import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Target05 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9 4.0294 9 9 9Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 17.4c2.9823 0 5.4-2.4177 5.4-5.4 0-2.9823-2.4177-5.4-5.4-5.4-2.9823 0-5.4 2.4177-5.4 5.4 0 2.9823 2.4177 5.4 5.4 5.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 13.8c.9941 0 1.8-.8059 1.8-1.8 0-.9941-.8059-1.8-1.8-1.8-.9941 0-1.8.8059-1.8 1.8 0 .9941.8059 1.8 1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Target05);
const Memo = memo(ForwardRef);
export default Memo;
