import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Shuffle01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="m18 15 3 3m0 0-3 3m3-3h-2.4311c-.9392 0-1.4088 0-1.8351-.1295a2.9984 2.9984 0 0 1-1.0331-.5529c-.3442-.2828-.6047-.6736-1.1257-1.455l-.2417-.3626M18 3l3 3m0 0-3 3m3-3h-2.4311c-.9392 0-1.4088 0-1.8351.1295a2.9999 2.9999 0 0 0-1.0331.5529c-.3442.2828-.6047.6736-1.1257 1.455l-5.15 7.7252c-.521.7814-.7815 1.1722-1.1257 1.455a2.9987 2.9987 0 0 1-1.0331.5529C6.8399 18 6.3703 18 5.4312 18H3M3 6h2.4311c.9392 0 1.4088 0 1.8351.1295a3.0002 3.0002 0 0 1 1.0331.5529c.3442.2828.6047.6736 1.1257 1.455l.2417.3626"
    />
  </svg>
);
const ForwardRef = forwardRef(Shuffle01);
const Memo = memo(ForwardRef);
export default Memo;
