import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 101 87"
    fill="none"
    {...props}
  >
    <path
      d="M3.5625 11.7285C5.58377 12.1328 9.9039 16.2 10.9766 18.0235C11.8471 19.5034 13.25 20.8493 14.2639 22.29C16.5657 25.561 20.1937 27.1007 22.937 29.844C24.9199 31.827 27.0376 34.9923 29.3718 36.4187C32.5522 38.3623 35.7351 42.9996 38.5345 45.7213C42.6805 49.7521 46.5838 54.0239 50.6347 58.1713C55.7505 63.4088 61.8783 67.9714 66.2322 73.9086C67.1682 75.1849 68.2775 77.1345 69.6595 77.8255"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M1.67383 9.21043C6.93128 9.21043 12.1887 9.21043 17.4462 9.21043C21.8031 9.21043 26.0191 7.95144 30.3159 7.95144C33.1365 7.95144 32.7862 7.17311 35.072 9.83992C38.2936 13.5984 41.9067 17.0734 45.1789 20.8911C53.8062 30.9563 62.7952 40.6684 71.8625 50.4074C76.2907 55.1635 81.3515 59.8253 85.047 65.2005C85.9874 66.5685 88.6141 68.8581 88.6141 69.9567C88.6141 71.5343 94.9756 75.4166 96.238 76.4265C96.3186 76.491 100.106 78.9912 98.6161 79.0844C96.6537 79.207 94.101 79.106 92.3211 78.315C88.9176 76.8023 85.0122 77.4338 81.6197 76.0768C78.0373 74.6438 72.9175 75.3074 69.0298 75.3074"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M59.5874 34.39C59.9992 31.096 64.6413 27.5096 66.5118 24.8077C68.7443 21.583 71.8885 18.9415 74.6603 16.1696C77.5415 13.2884 79.9977 10.1785 82.564 7.04193C83.9599 5.33576 86.6 3.71194 87.2852 1.65625"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <path
      d="M43.2205 52.6455C38.9197 53.1831 32.9379 62.4463 30.6306 65.725C29.0816 67.9262 26.6832 71.8118 24.3357 73.279C21.9832 74.7492 20.4761 77.066 18.6702 79.0843C16.9568 80.9993 15.8704 84.2612 13.6343 85.3793"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    />
  </svg>
);

export default X;
