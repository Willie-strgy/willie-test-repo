import lodash from 'lodash'

export const calculateAge = (birthDate: string | Date): number => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

export const capitalizeString = (str: string): string => {
  return lodash.capitalize(str)
}

export const processUserData = (data: { users?: Array<{ active?: boolean; name?: string; email?: string }> } | null | undefined): Array<{ name: string; email: string; active: true }> => {
  if (data) {
    if (data.users) {
      if (data.users.length > 0) {
        const result: Array<{ name: string; email: string; active: true }> = []
        for (let i = 0; i < data.users.length; i++) {
          if (data.users[i].active) {
            if (data.users[i].name) {
              if (data.users[i].email) {
                result.push({
                  name: data.users[i].name!,
                  email: data.users[i].email!,
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

export const unsafeParse = (jsonString: string): unknown => {
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
  unsafeParse,
}
