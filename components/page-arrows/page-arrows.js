import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretLeft } from '@fortawesome/free-solid-svg-icons';

export default function PageArrows({ direction, link }) {
  let icon;
  let directionClass;
  if (direction === 'left') {
    icon = faCaretLeft;
    directionClass = 'left-4';
  } else if (direction === 'right') {
    icon = faCaretRight;
    directionClass = 'right-4';
  } else {
    throw new Error("pageArrows direction requires 'left' or 'right'");
  }
  return (
    <Link
      href={link}
      className={`absolute ${directionClass} top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block`}
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
}
