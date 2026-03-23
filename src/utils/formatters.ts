// INTENTIONAL ISSUES: moment (heavy dep), any types, missing return types
import moment from 'moment'

export const formatDate = (date: any) => {
  if (!date) return 'N/A'
  return moment(date).format('MMMM Do, YYYY')
}

export const formatCurrency = (amount: any) => {
  return '$' + parseFloat(amount).toFixed(2)
}

// INTENTIONAL: duplicated logic — same as formatDate but slightly different
export const formatDateShort = (date: any) => {
  if (!date) return 'N/A'
  return moment(date).format('MM/DD/YYYY')
}

// INTENTIONAL: overly complex function that could be simplified
export const formatUserName = (firstName: any, lastName: any, middleName: any) => {
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

// INTENTIONAL: unused export
export const DEPRECATED_DATE_FORMAT = 'DD-MM-YYYY'
