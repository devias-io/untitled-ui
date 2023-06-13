import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PencilLine = (
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
      d="M17.8142 17.7575h-6.6223M2.5 18.1714l4.5937-1.7668c.2938-.113.4407-.1695.5781-.2433a2.4843 2.4843 0 0 0 .348-.2261c.1232-.0957.2345-.207.4571-.4296l9.3373-9.3373c.9144-.9143.9144-2.3968 0-3.3112-.9143-.9143-2.3968-.9143-3.3111 0l-9.3374 9.3374c-.2226.2226-.3339.3339-.4295.4571a2.4901 2.4901 0 0 0-.2261.3479c-.0738.1375-.1303.2844-.2433.5782L2.5 18.1714Zm0 0 1.7037-4.4296c.122-.317.1829-.4755.2874-.5481a.4139.4139 0 0 1 .3137-.0665c.125.0238.2451.1439.4853.3841l1.87 1.87c.2402.2402.3602.3602.3841.4853a.414.414 0 0 1-.0666.3137c-.0725.1045-.231.1655-.548.2874L2.5 18.1714Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PencilLine);
const Memo = memo(ForwardRef);
export default Memo;
