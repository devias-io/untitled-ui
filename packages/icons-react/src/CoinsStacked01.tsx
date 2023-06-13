import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CoinsStacked01 = (
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
      d="M12 15.6c0 2.4853 2.0147 4.5 4.5 4.5s4.5-2.0147 4.5-4.5-2.0147-4.5-4.5-4.5-4.5 2.0147-4.5 4.5Zm0 0a4.48 4.48 0 0 1 .9-2.7004V4.8M12 15.6c0 .7428.18 1.4436.4987 2.0611-.7582.6405-2.5094 1.0889-4.5487 1.0889-2.7338 0-4.95-.8059-4.95-1.8V4.8m9.9 0c0 .9941-2.2162 1.8-4.95 1.8S3 5.7941 3 4.8m9.9 0c0-.9941-2.2162-1.8-4.95-1.8S3 3.8059 3 4.8m0 8.1c0 .9941 2.2162 1.8 4.95 1.8 1.9701 0 3.6714-.4185 4.4682-1.0244M12.9 8.85c0 .9941-2.2162 1.8-4.95 1.8S3 9.8441 3 8.85"
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsStacked01);
const Memo = memo(ForwardRef);
export default Memo;
