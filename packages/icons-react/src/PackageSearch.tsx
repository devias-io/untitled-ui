import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const PackageSearch = (
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
      d="M20.5 7.2778 12 12.0001m0 0L3.5 7.2778m8.5 4.7223v9.5m9-9.5V7.9415c0-.3426 0-.514-.0505-.6667a1 1 0 0 0-.2141-.364c-.1091-.1183-.2588-.2015-.5584-.368l-7.4-4.111c-.2836-.1576-.4254-.2364-.5755-.2673a1.0002 1.0002 0 0 0-.4029 0c-.1502.031-.292.1097-.5756.2673l-7.4 4.111c-.2995.1665-.4493.2497-.5584.368a1.0002 1.0002 0 0 0-.2141.364C3 7.4276 3 7.5988 3 7.9415v8.1171c0 .3427 0 .514.0505.6668a.999.999 0 0 0 .2141.3639c.109.1184.2589.2016.5584.368l7.4 4.1111c.2836.1576.4254.2363.5756.2672a.9977.9977 0 0 0 .4029 0c.1501-.0309.2919-.1096.5755-.2672l.223-.1239M7.5 4.5001l9 5m5.5 12-1-1m1-2.5c0 1.6568-1.3431 3-3 3s-3-1.3432-3-3c0-1.6569 1.3431-3 3-3s3 1.3431 3 3Z"
    />
  </svg>
);
const ForwardRef = forwardRef(PackageSearch);
const Memo = memo(ForwardRef);
export default Memo;
