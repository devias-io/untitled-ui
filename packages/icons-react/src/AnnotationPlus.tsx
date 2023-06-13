import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const AnnotationPlus = (
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
      d="M12 13.5v-6m-3 3h6m-5.1 8.7 1.46 1.9467c.2171.2895.3257.4342.4588.486a.5002.5002 0 0 0 .3624 0c.1331-.0518.2417-.1965.4588-.486L14.1 19.2c.2931-.3909.4397-.5863.6185-.7355a2.0002 2.0002 0 0 1 .822-.411C15.7671 18 16.0114 18 16.5 18c1.3978 0 2.0967 0 2.6481-.2284a2.9997 2.9997 0 0 0 1.6235-1.6235C21 15.5967 21 14.8978 21 13.5V7.8c0-1.6802 0-2.5202-.327-3.162a2.9997 2.9997 0 0 0-1.311-1.311C18.7202 3 17.8802 3 16.2 3H7.8c-1.6802 0-2.5202 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.2798 3 6.1198 3 7.8v5.7c0 1.3978 0 2.0967.2284 2.6481a2.9999 2.9999 0 0 0 1.6236 1.6235C5.4033 18 6.1021 18 7.5 18c.4886 0 .7329 0 .9595.0535.3022.0713.5836.2121.822.411.1788.1492.3254.3446.6185.7355Z"
    />
  </svg>
);
const ForwardRef = forwardRef(AnnotationPlus);
const Memo = memo(ForwardRef);
export default Memo;
