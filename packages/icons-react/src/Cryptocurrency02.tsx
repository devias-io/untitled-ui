import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Cryptocurrency02 = (
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
      d="M17.8779 20.0899a10.0001 10.0001 0 0 1-11.7557 0m10.2615-17.078a9.9997 9.9997 0 0 1 5.519 10.3796m-19.8053-.0001a10.0001 10.0001 0 0 1 5.519-10.3797m3.8179 3.5537-4.8686 4.8687c-.198.198-.297.297-.3341.4111a.5002.5002 0 0 0 0 .3091c.037.1141.136.2131.334.4111l4.8687 4.8687c.198.198.297.297.4112.3341a.5004.5004 0 0 0 .309 0c.1142-.0371.2132-.1361.4112-.3341l4.8686-4.8687c.198-.198.297-.297.3341-.4111a.4992.4992 0 0 0 0-.3091c-.0371-.1141-.1361-.2131-.3341-.4111l-4.8686-4.8687c-.198-.198-.297-.297-.4112-.334a.5.5 0 0 0-.309 0c-.1142.037-.2132.136-.4112.334Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Cryptocurrency02);
const Memo = memo(ForwardRef);
export default Memo;
