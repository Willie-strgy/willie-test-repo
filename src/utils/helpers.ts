// INTENTIONAL ISSUES: any types, console.log, unsafe operations, dead code
import lodash from 'lodash'

export const calculateAge = (birthDate: any): number => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

// INTENTIONAL: uses lodash for something trivial
export const capitalizeString = (str: string) => {
  return lodash.capitalize(str)
}

// INTENTIONAL: deeply nested logic
export const processUserData = (data: any) => {
  if (data) {
    if (data.users) {
      if (data.users.length > 0) {
        const result = []
        for (let i = 0; i < data.users.length; i++) {
          if (data.users[i].active) {
            if (data.users[i].name) {
              if (data.users[i].email) {
                result.push({
                  name: data.users[i].name,
                  email: data.users[i].email,
                  active: true
                })
              }
            }
          }
        }
        return result
      }
    }
  }
  return []
}

// INTENTIONAL: dead code — never called anywhere
export const legacyTransform = (input: any): any => {
  console.log('Running legacy transform', input)
  const output = JSON.parse(JSON.stringify(input))
  output.transformed = true
  output.timestamp = Date.now()
  return output
}

// INTENTIONAL: function that catches and swallows errors
export const unsafeParse = (jsonString: string): any => {
  try {
    return JSON.parse(jsonString)
  } catch (e) {
    // swallowing error silently
    return null
  }
}

// Re-export for barrel pattern
export const helpers = {
  calculateAge,
  capitalizeString,
  processUserData,
  legacyTransform,
  unsafeParse,
}
