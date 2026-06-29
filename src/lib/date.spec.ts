import { describe, it, expect } from 'vitest';
import { formatPostDate } from './date';

describe('formatPostDate', () => {
	it('returns a formatted post date', () => {
		expect(formatPostDate('2026-06-27')).toBe('June 27, 2026');
	});
});
