import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const FileAttachment02 = (
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
      d="M11.55 3h2.43c1.5121 0 2.2682 0 2.8458.2943.508.2588.9211.6719 1.1799 1.18.2943.5775.2943 1.3336.2943 2.8457v9.36c0 1.5121 0 2.2682-.2943 2.8458a2.6996 2.6996 0 0 1-1.1799 1.1799C16.2482 21 15.4921 21 13.98 21H8.22c-1.5121 0-2.2682 0-2.8458-.2943a2.6998 2.6998 0 0 1-1.18-1.1799C3.9 18.9482 3.9 18.1921 3.9 16.68v-.63m10.8-3.15h-4.05m4.05-3.6h-3.15m3.15 7.2H7.5m-1.8-6.3V5.25c0-.7456.6044-1.35 1.35-1.35s1.35.6044 1.35 1.35v4.95c0 1.4912-1.2088 2.7-2.7 2.7S3 11.6912 3 10.2V6.6"
    />
  </svg>
);
const ForwardRef = forwardRef(FileAttachment02);
const Memo = memo(ForwardRef);
export default Memo;
