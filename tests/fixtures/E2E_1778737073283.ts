// E2E test fixture — intentional bugs for the reviewer to flag.
// Generated at 2026-05-14T05:37:53.283Z — safe to delete.

export function divide(a: number, b: number): number {
  if (b === 0) throw new Error('division by zero');
  return a / b;
}

export function normalizeEmail(input: string): string {
  if (typeof input !== 'string') throw new TypeError('normalizeEmail: input must be a string');
  return input.toLowerCase();
}
