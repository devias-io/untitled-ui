import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const BellOff03 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M13.8 18.3c0 1.4912-1.2088 2.7-2.7 2.7s-2.7-1.2088-2.7-2.7M6.9397 8.2963C6.1417 9.132 5.7 10.1862 5.7 11.28c0 2.0536-.5093 3.5555-1.1447 4.6302-.7243 1.2249-1.0864 1.8373-1.0721 1.9836.0163.1673.0465.2202.1822.3194.1187.0868.7148.0868 1.907.0868H18.192M11.1 6.6c-.2636 0-.5252.0167-.783.0494-.3434.0437-.515.0655-.6874.0186-.124-.0337-.311-.1425-.4018-.2336-.126-.1265-.1535-.1933-.2086-.3268A2.2433 2.2433 0 0 1 8.85 5.25C8.85 4.0074 9.8574 3 11.1 3s2.25 1.0074 2.25 2.25c0 .608-.2412 1.1598-.6331 1.5647A6.1679 6.1679 0 0 0 11.1 6.6Zm0 0c1.4322 0 2.8057.493 3.8184 1.3707C15.9311 8.8484 16.5 10.0388 16.5 11.28c0 .3013.0082.5907.0238.8686M19.2 19.2 3 4.8"
    />
  </svg>
);
const ForwardRef = forwardRef(BellOff03);
const Memo = memo(ForwardRef);
export default Memo;
