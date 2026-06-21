/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WorkDay {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday'
}

enum Weekends {
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

type DayOfWeek = WorkDay | Weekends;

function isWeekend(day: DayOfWeek): day is Weekends {
  return day as Weekends !== undefined;
}