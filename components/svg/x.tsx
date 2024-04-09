import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 104 91"
    fill="none"
    {...props}
  >
    <path
      d="M5.5625 13.7285C7.58377 14.1328 11.9039 18.2 12.9766 20.0235C13.8471 21.5034 15.25 22.8493 16.2639 24.29C18.5657 27.561 22.1937 29.1007 24.937 31.844C26.9199 33.827 29.0376 36.9923 31.3718 38.4187C34.5522 40.3623 37.7351 44.9996 40.5345 47.7213C44.6805 51.7521 48.5838 56.0239 52.6347 60.1713C57.7505 65.4088 63.8783 69.9714 68.2322 75.9086C69.1682 77.1849 70.2775 79.1345 71.6595 79.8255"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M3.67383 11.2104C8.93128 11.2104 14.1887 11.2104 19.4462 11.2104C23.8031 11.2104 28.0191 9.95144 32.3159 9.95144C35.1365 9.95144 34.7862 9.17311 37.072 11.8399C40.2936 15.5984 43.9067 19.0734 47.1789 22.8911C55.8062 32.9563 64.7952 42.6684 73.8625 52.4074C78.2907 57.1635 83.3515 61.8253 87.047 67.2005C87.9874 68.5685 90.6141 70.8581 90.6141 71.9567C90.6141 73.5343 96.9756 77.4166 98.238 78.4265C98.3186 78.491 102.106 80.9912 100.616 81.0844C98.6537 81.207 96.101 81.106 94.3211 80.315C90.9176 78.8023 87.0122 79.4338 83.6197 78.0768C80.0373 76.6438 74.9175 77.3074 71.0298 77.3074"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M61.5874 36.39C61.9992 33.096 66.6413 29.5096 68.5118 26.8077C70.7443 23.583 73.8885 20.9415 76.6603 18.1696C79.5415 15.2884 81.9977 12.1785 84.564 9.04193C85.9599 7.33576 88.6 5.71194 89.2852 3.65625"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
    <path
      d="M45.2205 54.6455C40.9197 55.1831 34.9379 64.4463 32.6306 67.725C31.0816 69.9262 28.6832 73.8118 26.3357 75.279C23.9832 76.7492 22.4761 79.066 20.6702 81.0843C18.9568 82.9993 17.8704 86.2612 15.6343 87.3793"
      stroke="currentColor"
      strokeWidth="6"
      strokeLinecap="round"
    />
  </svg>
);

export default X;
