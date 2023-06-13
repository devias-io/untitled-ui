import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const DownloadCloud02 = (
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
      d="m8.4 15.6 3.6 3.6m0 0 3.6-3.6M12 19.2v-8.1m7.2 4.2686c1.0994-.908 1.8-2.2815 1.8-3.8186 0-2.7338-2.2162-4.95-4.95-4.95-.1967 0-.3806-.1026-.4805-.272C14.3959 4.3364 12.229 3 9.75 3 6.022 3 3 6.022 3 9.75c0 1.8595.7519 3.5434 1.9683 4.7642"
    />
  </svg>
);
const ForwardRef = forwardRef(DownloadCloud02);
const Memo = memo(ForwardRef);
export default Memo;
