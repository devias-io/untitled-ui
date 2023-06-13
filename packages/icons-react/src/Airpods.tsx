import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Airpods = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M3 7.2125c0 2.0504 1.6621 3.7125 3.7125 3.7125.2753 0 .413 0 .4843.0246.1492.0515.2271.1294.2786.2786.0246.0714.0246.1831.0246.4065v5.7028c0 .8077.6548 1.4625 1.4625 1.4625.8077 0 1.4625-.6548 1.4625-1.4625V7.2125C10.425 5.1621 8.7629 3.5 6.7125 3.5S3 5.1621 3 7.2125Zm18 0c0 2.0504-1.6621 3.7125-3.7125 3.7125-.2753 0-.4129 0-.4843.0246-.1492.0515-.2271.1294-.2786.2786-.0246.0714-.0246.1831-.0246.4065v5.7028c0 .8077-.6548 1.4625-1.4625 1.4625-.8077 0-1.4625-.6548-1.4625-1.4625V7.2125c0-2.0504 1.6621-3.7125 3.7125-3.7125S21 5.1621 21 7.2125Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Airpods);
const Memo = memo(ForwardRef);
export default Memo;
