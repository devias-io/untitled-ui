import * as React from 'react';
import { SVGProps, Ref, forwardRef, memo } from 'react';
const Hexagon01 = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
      d="M11.223 2.4318c.2836-.1576.4254-.2364.5755-.2673.133-.0273.27-.0273.403 0 .1501.031.2919.1097.5755.2673l7.4 4.111c.2996.1665.4493.2497.5584.368a1 1 0 0 1 .2141.364c.0505.1528.0505.324.0505.6667v8.1171c0 .3427 0 .514-.0505.6668a.999.999 0 0 1-.2141.3639c-.1091.1184-.2588.2016-.5584.368l-7.4 4.1111c-.2836.1576-.4254.2363-.5755.2672a.9982.9982 0 0 1-.403 0c-.1501-.0309-.2919-.1096-.5755-.2672l-7.4-4.1111c-.2995-.1664-.4493-.2496-.5584-.368a.999.999 0 0 1-.2141-.3639C3 16.5726 3 16.4013 3 16.0586v-8.117c0-.3427 0-.514.0505-.6668a1.0002 1.0002 0 0 1 .2141-.364c.109-.1183.2588-.2015.5584-.368l7.4-4.111Z"
    />
  </svg>
);
const ForwardRef = forwardRef(Hexagon01);
const Memo = memo(ForwardRef);
export default Memo;
