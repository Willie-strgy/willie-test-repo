import moment from 'moment'

export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A'
  return moment(date).format('MMMM Do, YYYY')
}

export const formatCurrency = (amount: number | string): string => {
  return '$' + parseFloat(String(amount)).toFixed(2)
}
