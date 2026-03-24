import moment from 'moment'

export const formatDate = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A'
  return moment(date).format('MMMM Do, YYYY')
}

export const formatCurrency = (amount: number | string): string => {
  return '$' + parseFloat(String(amount)).toFixed(2)
}

export const formatDateShort = (date: string | Date | null | undefined): string => {
  if (!date) return 'N/A'
  return moment(date).format('MM/DD/YYYY')
}

export const formatUserName = (firstName: string | null, lastName: string | null, middleName: string | null): string => {
  let result = ''
  if (firstName) {
    result = result + firstName
  }
  if (middleName) {
    result = result + ' ' + middleName
  }
  if (lastName) {
    result = result + ' ' + lastName
  }
  if (result === '') {
    result = 'Unknown User'
  }
  return result
}
