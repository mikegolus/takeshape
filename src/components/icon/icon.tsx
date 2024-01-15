import { FC } from 'react'
import { CalendarIcon } from './icons/calendar'
import { CheckIcon } from './icons/check'
import { GroupIcon } from './icons/group'
import { NavArrowDownIcon } from './icons/nav-arrow-down'
import { NavArrowRightIcon } from './icons/nav-arrow-right'
import { NavArrowUpIcon } from './icons/nav-arrow-up'
import { SelectHandIcon } from './icons/select-hand'
import { ShareIcon } from './icons/share'
import { XMarkIcon } from './icons/xmark'

interface IconProps {
  className?: string
  name: Icon
}

export type Icon =
  | 'calendar'
  | 'check'
  | 'group'
  | 'nav-arrow-down'
  | 'nav-arrow-right'
  | 'nav-arrow-up'
  | 'select-hand'
  | 'share'
  | 'xmark'

const IconMap: Record<Icon, React.ReactNode> = {
  calendar: <CalendarIcon />,
  check: <CheckIcon />,
  group: <GroupIcon />,
  'nav-arrow-down': <NavArrowDownIcon />,
  'nav-arrow-right': <NavArrowRightIcon />,
  'nav-arrow-up': <NavArrowUpIcon />,
  'select-hand': <SelectHandIcon />,
  share: <ShareIcon />,
  xmark: <XMarkIcon />,
}

export const Icon: FC<IconProps> = ({ className, name }) => (
  <svg
    width="24px"
    height="24px"
    strokeWidth="1.7"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {IconMap[name]}
  </svg>
)
