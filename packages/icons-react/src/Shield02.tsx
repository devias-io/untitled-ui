import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Shield02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.302 21.6149c.2214.1292.3321.1938.4883.2273.1213.026.2981.026.4194 0 .1562-.0335.2669-.0981.4883-.2273C14.646 20.4785 20 16.9085 20 12.0001v-3.8c0-1.074 0-1.6109-.1655-1.992-.1683-.3874-.3359-.5935-.6809-.8371-.3395-.2397-1.005-.3781-2.3359-.655-1.4669-.305-2.5934-.8559-3.6233-1.6526-.4939-.382-.7408-.573-.9341-.6252-.2039-.055-.3167-.055-.5206 0-.1933.0521-.4402.2431-.9341.6252C9.7757 3.86 8.6492 4.411 7.1823 4.716c-1.331.2768-1.9964.4152-2.3358.6549-.345.2436-.5127.4497-.681.837C4 6.5893 4 7.1263 4 8.2v3.8001c0 4.9084 5.354 8.4784 7.302 9.6148Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Shield02);
const Memo = memo(ForwardRef);
export default Memo;
