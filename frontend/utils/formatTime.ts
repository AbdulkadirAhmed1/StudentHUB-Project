export function formatTime(hour: number, minute: number): string {
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  const m = minute.toString().padStart(2, '0');
  const suffix = hour < 12 ? 'AM' : 'PM';
  return `${h12}:${m} ${suffix}`;
}