import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ShoppingBag02 = (
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
      d="M16.0004 9V6c0-2.2091-1.7909-4-4-4-2.2092 0-4 1.7909-4 4v3m-4.408 1.352-.6 6.4c-.1706 1.8197-.256 2.7295.046 3.4323a3.0002 3.0002 0 0 0 1.32 1.4495C5.0299 22 5.9437 22 7.7714 22h8.4579c1.8277 0 2.7415 0 3.413-.3662a3 3 0 0 0 1.32-1.4495c.302-.7028.2167-1.6126.0461-3.4323l-.6-6.4c-.1441-1.5366-.2161-2.305-.5617-2.8858a3 3 0 0 0-1.2917-1.1764C17.9444 6 17.1727 6 15.6293 6H8.3714c-1.5433 0-2.315 0-2.9256.2898A3 3 0 0 0 4.154 7.4662c-.3455.5808-.4176 1.3491-.5616 2.8858Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ShoppingBag02);
const Memo = memo(ForwardRef);
export default Memo;
