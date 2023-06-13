import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const LockKeyholeSquare = (
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
      d="M16.2 21c1.6802 0 2.5202 0 3.162-.327a2.9994 2.9994 0 0 0 1.311-1.311C21 18.7202 21 17.8802 21 16.2V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v8.4c0 1.6802 0 2.5202.327 3.162a2.9997 2.9997 0 0 0 1.311 1.311C5.2798 21 6.1198 21 7.8 21h8.4Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.7316 13.1947c-.0706-.2116-.1059-.3175-.104-.404.0019-.0911.0141-.1388.056-.2196.0399-.0769.1464-.1761.3596-.3744C14.6318 11.6489 15 10.8675 15 10c0-1.6569-1.3431-3-3-3s-3 1.3431-3 3c0 .8675.3682 1.6489.9568 2.1967.2132.1983.3197.2975.3596.3744.0419.0808.0541.1285.056.2196.0019.0865-.0334.1924-.104.404L9.351 15.947c-.1185.3555-.1778.5333-.1422.6748a.5003.5003 0 0 0 .216.2998C9.5478 17 9.7352 17 10.11 17h3.7802c.3747 0 .5621 0 .6851-.0784a.5004.5004 0 0 0 .216-.2998c.0356-.1415-.0237-.3193-.1422-.6748l-.9174-2.7523Z"
    />
  </svg>
);
const ForwardRef = forwardRef(LockKeyholeSquare);
const Memo = memo(ForwardRef);
export default Memo;
