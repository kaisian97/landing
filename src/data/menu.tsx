import CalendarIcon from 'assets/CalendarIcon'
import PlanningIcon from 'assets/PlanningIcon'
import RemindersIcon from 'assets/RemindersIcon'
import TodoIcon from 'assets/TodoIcon'

export const menus = [
  {
    label: 'Features',
    children: [
      {
        label: 'Todo List',
        icon: <TodoIcon />,
      },
      {
        label: 'Calendar',
        icon: <CalendarIcon />,
      },
      {
        label: 'Reminders',
        icon: <RemindersIcon />,
      },
      {
        label: 'Planning',
        icon: <PlanningIcon />,
      },
    ],
  },
  {
    label: 'Company',
    children: [
      {
        label: 'History',
      },
      {
        label: 'Our Team',
      },
      {
        label: 'Blog',
      },
    ],
  },
  {
    label: 'Careers',
  },
  {
    label: 'About',
  },
]
