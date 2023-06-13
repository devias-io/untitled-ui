import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const CoinsStacked02 = (
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
      d="M12.9 4.8c0 .9941-2.2162 1.8-4.95 1.8S3 5.7941 3 4.8m9.9 0c0-.9941-2.2162-1.8-4.95-1.8S3 3.8059 3 4.8m9.9 0v4.0114c-1.0994.3302-1.8.8296-1.8 1.3886M3 4.8v10.8c0 .9941 2.2162 1.8 4.95 1.8 1.1967 0 2.2942-.1544 3.15-.4114V10.2M3 8.4c0 .9941 2.2162 1.8 4.95 1.8 1.1967 0 2.2942-.1544 3.15-.4114M3 12c0 .9941 2.2162 1.8 4.95 1.8 1.1967 0 2.2942-.1544 3.15-.4114M21 10.2c0 .9941-2.2162 1.8-4.95 1.8s-4.95-.8059-4.95-1.8m9.9 0c0-.9941-2.2162-1.8-4.95-1.8s-4.95.8059-4.95 1.8m9.9 0v7.2c0 .9941-2.2162 1.8-4.95 1.8s-4.95-.8059-4.95-1.8v-7.2m9.9 3.6c0 .9941-2.2162 1.8-4.95 1.8s-4.95-.8059-4.95-1.8"
    />
  </svg>
);
const ForwardRef = forwardRef(CoinsStacked02);
const Memo = memo(ForwardRef);
export default Memo;
