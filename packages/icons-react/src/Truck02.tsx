import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Truck02 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M15.6 14.7V5.88c0-1.008 0-1.5121-.1962-1.8972a1.8 1.8 0 0 0-.7866-.7866C14.2321 3 13.7281 3 12.72 3H5.88c-1.008 0-1.5121 0-1.8972.1962a1.8 1.8 0 0 0-.7866.7866C3 4.3678 3 4.872 3 5.88v5.94c0 1.0081 0 1.5121.1962 1.8972a1.8 1.8 0 0 0 .7866.7866c.385.1962.8891.1962 1.8972.1962h9.72Zm0 0h3.96c.504 0 .7561 0 .9486-.0981a.9006.9006 0 0 0 .3933-.3933C21 14.0161 21 13.764 21 13.26v-2.4635c0-.2202 0-.3302-.0249-.4338a.9014.9014 0 0 0-.1077-.2602c-.0557-.0908-.1335-.1686-.2892-.3243l-1.8564-1.8564c-.1557-.1557-.2335-.2335-.3243-.2892a.9015.9015 0 0 0-.2602-.1077C18.0337 7.5 17.9237 7.5 17.7035 7.5H15.6m-6.3 9.45c0 1.2426-1.0074 2.25-2.25 2.25S4.8 18.1926 4.8 16.95s1.0074-2.25 2.25-2.25 2.25 1.0074 2.25 2.25Zm9.9 0c0 1.2426-1.0074 2.25-2.25 2.25s-2.25-1.0074-2.25-2.25 1.0074-2.25 2.25-2.25 2.25 1.0074 2.25 2.25Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Truck02);
const Memo = memo(ForwardRef);
export default Memo;
