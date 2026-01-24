export interface CalendarDay {
  date: Date
  dayOfMonth: number
  isCurrentMonth: boolean
  isToday: boolean
  isAvailable: boolean
}

export function generateCalendarDays(year: number, month: number): CalendarDay[] {
  const days: CalendarDay[] = []
  const firstDay = new Date(year, month, 1)
  const lastDay = new Date(year, month + 1, 0)
  const prevLastDay = new Date(year, month, 0)

  const startDate = new Date(firstDay)
  startDate.setDate(startDate.getDate() - firstDay.getDay())

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const currentDate = new Date(startDate)

  while (currentDate <= lastDay || currentDate.getDay() !== 0) {
    const date = new Date(currentDate)
    const isCurrentMonth = date.getMonth() === month
    const isToday = date.getTime() === today.getTime()
    const isAvailable = isCurrentMonth && date > today && Math.random() > 0.15

    days.push({
      date,
      dayOfMonth: date.getDate(),
      isCurrentMonth,
      isToday,
      isAvailable,
    })

    currentDate.setDate(currentDate.getDate() + 1)
  }

  return days
}

export function getMonthName(month: number): string {
  return new Date(2024, month).toLocaleString("default", { month: "long" })
}

export function getFormattedDate(date: Date): string {
  return date.toISOString().split("T")[0]
}
