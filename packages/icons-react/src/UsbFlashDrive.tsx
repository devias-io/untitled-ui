import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const UsbFlashDrive = (
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
      d="M16.6 9.3V4.44c0-.504 0-.756-.0981-.9486a.9003.9003 0 0 0-.3933-.3933C15.9161 3 15.664 3 15.16 3H7.24c-.504 0-.756 0-.9486.098a.9.9 0 0 0-.3933.3934C5.8 3.684 5.8 3.936 5.8 4.44V9.3m3.6-2.7v-.9m3.6.9v-.9M8.32 21h5.76c1.5121 0 2.2682 0 2.8458-.2943a2.6996 2.6996 0 0 0 1.1799-1.1799c.2943-.5776.2943-1.3337.2943-2.8458v-4.5c0-1.0081 0-1.5121-.1962-1.8972a1.8001 1.8001 0 0 0-.7866-.7866C17.0321 9.3 16.5281 9.3 15.52 9.3H6.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C4 10.6679 4 11.1719 4 12.18v4.5c0 1.5121 0 2.2682.2943 2.8458.2588.508.6719.9211 1.18 1.1799C6.0517 21 6.8078 21 8.32 21Z"
    />
  </svg>
);
const ForwardRef = forwardRef(UsbFlashDrive);
const Memo = memo(ForwardRef);
export default Memo;
