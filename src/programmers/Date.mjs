export class CustomDate {
  static getDayOfWeek({ year, month, day }) {
    return new Date(year, month - 1, day).toString().slice(0, 3);
  }
}
