import * as React from 'react';
import { SVGProps } from 'react';
const ThumbsUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity={0.01}
      d="M18.5522 18.7106C18.3496 20.0277 17.2163 21 15.8836 21H3.8c-.9941 0-1.8-.8059-1.8-1.8v-6.3c0-.9941.8059-1.8 1.8-1.8h2.1151a.9.9 0 0 0 .8224-.5345l3.1673-7.1262A.7398.7398 0 0 1 10.5807 3C11.8064 3 12.8 3.9936 12.8 5.2193V8.4a.9.9 0 0 0 .9.9h3.1528c1.6548 0 2.9203 1.475 2.6687 3.1106l-.9693 6.3Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 21v-9.9M2 12.9v6.3c0 .9941.8059 1.8 1.8 1.8h12.0836c1.3327 0 2.466-.9723 2.6686-2.2894l.9693-6.3C19.7731 10.775 18.5076 9.3 16.8529 9.3H13.7a.9.9 0 0 1-.9-.9V5.2193C12.8 3.9936 11.8064 3 10.5807 3a.7398.7398 0 0 0-.676.4393l-3.1672 7.1262a.9.9 0 0 1-.8224.5345H3.8c-.9941 0-1.8.8059-1.8 1.8Z"
    />
  </svg>
);
export default ThumbsUp;
