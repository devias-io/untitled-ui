import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PenToolPlus = (
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
      d="M13.7 7.5 8.151 9.0854c-.2744.0784-.4116.1176-.525.1913a.9.9 0 0 0-.2538.2488c-.076.1119-.118.2483-.2019.521L3.8 21m0 0 10.9535-3.3703c.2727-.0839.4091-.1259.521-.2019a.8993.8993 0 0 0 .2488-.2539c.0737-.1133.1129-.2505.1913-.5249L17.3 11.1M3.8 21l5.9274-5.9275M4.7 8.4V3M2 5.7h5.4m12.4818 2.5818-3.3636-3.3636c-.3564-.3564-.5346-.5346-.7401-.6014a.9.9 0 0 0-.5562 0c-.2055.0668-.3837.245-.7401.6014l-.6636.6636c-.3564.3564-.5346.5346-.6014.74a.9005.9005 0 0 0 0 .5563c.0668.2055.245.3837.6014.7401l3.3636 3.3636c.3564.3564.5346.5346.7401.6014a.9004.9004 0 0 0 .5562 0c.2055-.0668.3837-.245.7401-.6014l.6636-.6636c.3564-.3564.5346-.5346.6014-.74a.9005.9005 0 0 0 0-.5563c-.0668-.2055-.245-.3837-.6014-.7401ZM11 12c.9941 0 1.8.8059 1.8 1.8 0 .9941-.8059 1.8-1.8 1.8-.9941 0-1.8-.8059-1.8-1.8 0-.9941.8059-1.8 1.8-1.8Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PenToolPlus);
const Memo = memo(ForwardRef);
export default Memo;
