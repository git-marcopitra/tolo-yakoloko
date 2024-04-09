import { FC } from 'react';

import { SVGProps } from './svg.types';

const Telegram: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 107 102"
    fill="none"
    {...props}
  >
    <path
      d="M3.93115 52.1398C12.9639 43.9673 26.0071 38.4232 36.6052 32.5354C41.1605 30.0047 47.1768 27.0178 52.0511 25.9346C55.3918 25.1922 60.0907 21.9478 63.3385 20.3239C67.1748 18.4058 72.9008 17.9622 76.1441 15.0432C78.219 13.1758 83.8079 9.03454 86.5734 8.24438C90.0081 7.26306 91.0264 3.42578 94.8245 3.42578C100.353 3.42578 103.736 13.6326 103.736 17.6836C103.736 36.5731 101.583 55.2071 102.547 73.5265C102.717 76.7489 104.263 95.0172 100.699 96.0353C94.7604 97.7321 88.3433 100.422 82.6129 95.8373C77.8746 92.0466 72.4185 88.157 67.4971 84.2198C63.9232 81.3607 54.1151 75.9406 53.8334 71.1502C53.4936 65.375 61.0758 57.5173 64.0646 52.5359C66.6986 48.1459 66.8044 43.771 70.2034 39.9943C71.2353 38.8478 76.8309 30.4918 73.7678 35.6378C66.7049 47.5035 64.5941 66.3976 47.8926 66.3976C39.9514 66.3976 32.4272 64.9493 24.7897 62.7672C19.1559 61.1575 5.9457 56.9953 3.93115 50.9517"
      strokeWidth="6"
      stroke="currentColor"
      strokeLinecap="round"
    />
  </svg>
);

export default Telegram;
