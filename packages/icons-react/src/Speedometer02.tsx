import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Speedometer02 = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9s-9-4.0294-9-9m18 0c0-4.9706-4.0294-9-9-9m9 9h-2.25M3 12c0-4.9706 4.0294-9 9-9m-9 9h2.25M12 3v2.25m6.3706.45-5.0207 4.95m5.0207 7.7206-.1835-.1835c-.6226-.6227-.934-.934-1.2973-1.1566a3.599 3.599 0 0 0-1.0406-.431c-.4143-.0995-.8546-.0995-1.7351-.0995H9.8859c-.8806 0-1.3208 0-1.7351.0995a3.6025 3.6025 0 0 0-1.0406.431c-.3633.2227-.6746.534-1.2973 1.1566l-.1834.1835m0-12.6706 1.5628 1.5628M13.8 12c0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8.9941 0 1.8.8059 1.8 1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Speedometer02);
const Memo = memo(ForwardRef);
export default Memo;
