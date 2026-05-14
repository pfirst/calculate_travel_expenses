// E2E test fixture — intentional bugs for the reviewer to flag.
// Generated at 2026-05-14T05:37:53.283Z — safe to delete.

export function divide(a: number, b: number): number {
  // Bug 1: no zero check — silently returns Infinity / NaN.
  return a / b;
}

export function normalizeEmail(input: any): string {
  // Bug 2: untyped param, no null guard.
  return input.toLowerCase();
}
