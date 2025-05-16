// frontend/utils/calendarUtils.ts

export interface CalendarCell {
    date: number
    inCurrentMonth: boolean
  }
  
  /**
   * Build a 6×7 matrix of days, trimming trailing empty weeks.
   */
  export function getCalendarMatrix(year: number, month: number): CalendarCell[][] {
    const firstDay = new Date(year, month, 1)
    const startDay = (firstDay.getDay() + 6) % 7    // Monday=0
    const daysInMonth = new Date(year, month+1, 0).getDate()
    const prevMonth = month - 1 < 0 ? 11 : month - 1
    const prevYear  = month - 1 < 0 ? year - 1 : year
    const daysInPrev = new Date(prevYear, prevMonth+1, 0).getDate()
  
    const cells: CalendarCell[] = []
  
    // leading
    for (let i = 0; i < startDay; i++) {
      cells.push({ date: daysInPrev - startDay + 1 + i, inCurrentMonth: false })
    }
    // current
    for (let d = 1; d <= daysInMonth; d++) {
      cells.push({ date: d, inCurrentMonth: true })
    }
    // trailing
    while (cells.length < 42) {
      cells.push({ date: cells.length - daysInMonth - startDay + 1, inCurrentMonth: false })
    }
  
    // chunk into weeks & trim
    const weeks: CalendarCell[][] = []
    for (let i = 0; i < 42; i += 7) {
      weeks.push(cells.slice(i, i+7))
    }
    while (weeks.length && weeks[weeks.length-1].every(c=>!c.inCurrentMonth)) {
      weeks.pop()
    }
    return weeks
  }
  