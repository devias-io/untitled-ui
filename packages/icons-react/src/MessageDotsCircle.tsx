import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const MessageDotsCircle = (
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
      d="M7.5 12h.01M12 12h.01m4.49 0h.01M12 21c4.9706 0 9-4.0294 9-9s-4.0294-9-9-9-9 4.0294-9 9c0 1.1971.2337 2.3397.658 3.3845.0813.2.1219.3.14.3808a.9075.9075 0 0 1 .0242.2186c0 .0828-.015.173-.045.3535l-.593 3.5578c-.0622.3726-.0932.5589-.0354.6936a.4997.4997 0 0 0 .2624.2624c.1347.0578.321.0268.6936-.0353l3.5579-.593c.1804-.0301.2706-.0451.3534-.0451.081 0 .1396.0065.2186.0242.0808.0181.1808.0587.3808.1399C9.6603 20.7663 10.8029 21 12 21Zm-4-9a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 12.5 12Zm4.5 0a.5.5 0 1 1-1.0001-.0001A.5.5 0 0 1 17 12Z"
    />
  </svg>
);
const ForwardRef = forwardRef(MessageDotsCircle);
const Memo = memo(ForwardRef);
export default Memo;
