// INTENTIONAL: minimal tests — many functions untested
import { formatDate, formatCurrency } from '@/utils/formatters'

describe('formatters', () => {
  describe('formatDate', () => {
    it('should return N/A for null input', () => {
      expect(formatDate(null)).toBe('N/A')
    })

    // INTENTIONAL: no test for valid date input
    // INTENTIONAL: no test for undefined input
    // INTENTIONAL: no test for invalid date strings
  })

  // INTENTIONAL: formatCurrency, formatDateShort, formatUserName all untested
})
