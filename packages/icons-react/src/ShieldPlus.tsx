import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const ShieldPlus = (
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
      d="M12 14.4999v-6m-3 3h6m5 .5c0 4.9084-5.354 8.4784-7.302 9.6148-.2214.1292-.3321.1938-.4883.2273-.1213.026-.2981.026-.4194 0-.1562-.0335-.2669-.0981-.4883-.2273C9.354 20.4783 4 16.9083 4 11.9999V7.2175c0-.7995 0-1.1993.1308-1.543a2 2 0 0 1 .5469-.7891c.2758-.243.6501-.3834 1.3987-.6642l5.3618-2.0107c.2079-.078.3118-.1169.4188-.1324a.9995.9995 0 0 1 .286 0c.107.0155.2109.0545.4188.1324l5.3618 2.0107c.7486.2808 1.1229.4211 1.3987.6642.2437.2148.4314.4856.5469.7892C20 6.0182 20 6.418 20 7.2175v4.7824Z"
    />
  </svg>
);
const ForwardRef = forwardRef(ShieldPlus);
const Memo = memo(ForwardRef);
export default Memo;
