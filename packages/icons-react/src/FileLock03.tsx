import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FileLock03 = (
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
      d="M13 3H8.32c-1.5121 0-2.2682 0-2.8458.2943a2.7 2.7 0 0 0-1.18 1.18C4 5.0517 4 5.8078 4 7.32v9.36c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458V8.4M13 3l5.4 5.4M13 3v5.4h5.4m-5.625 5.4v-1.575c0-.8698-.7052-1.575-1.575-1.575-.8698 0-1.575.7052-1.575 1.575V13.8m-.135 3.6h3.42c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933c.0981-.1925.0981-.4446.0981-.9486v-.72c0-.504 0-.7561-.0981-.9486a.9006.9006 0 0 0-.3933-.3933C13.6661 13.8 13.414 13.8 12.91 13.8H9.49c-.504 0-.756 0-.9486.0981a.9003.9003 0 0 0-.3933.3933c-.0981.1925-.0981.4446-.0981.9486v.72c0 .504 0 .7561.098.9486a.9003.9003 0 0 0 .3934.3933c.1925.0981.4446.0981.9486.0981Z"
    />
  </svg>
);
const ForwardRef = forwardRef(FileLock03);
const Memo = memo(ForwardRef);
export default Memo;
