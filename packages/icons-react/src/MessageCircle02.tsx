import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MessageCircle02 = (
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
      d="M21 12c0 4.9706-4.0294 9-9 9-1.1971 0-2.3397-.2337-3.3845-.6581-.2-.0812-.3-.1218-.3808-.1399a.9087.9087 0 0 0-.2186-.0242c-.0828 0-.173.015-.3534.0451l-3.558.593c-.3725.0621-.5588.0931-.6935.0353a.4997.4997 0 0 1-.2624-.2624c-.0578-.1347-.0268-.321.0353-.6936l.593-3.5578c.03-.1805.0451-.2707.0451-.3535a.9075.9075 0 0 0-.0242-.2186c-.0181-.0808-.0587-.1808-.14-.3808C3.2338 14.3397 3 13.1971 3 12c0-4.9706 4.0294-9 9-9s9 4.0294 9 9Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MessageCircle02);
const Memo = memo(ForwardRef);
export default Memo;
