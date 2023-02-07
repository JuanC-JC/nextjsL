export function formatPhoneNumber(value: any) {
  // if input value is falsy eg if the user deletes the input, then just return
  if (!value) return value

  // clean the input for any non-digit values.
  const phoneNumber = value.replace(/[^\d]/g, '')

  // phoneNumberLength is used to know when to apply our formatting for the phone number
  const phoneNumberLength = phoneNumber.length

  // // Check if the DDD is valid (yes, to check rsrsrs)
  // if (phoneNumberLength > 2 && codigosDDD.indexOf(parseInt(phoneNumber.substring(0, 2))) === -1) return ""

  // we need to return the value with no formatting if its less then four digits
  // this is to avoid weird behavior that occurs if you  format the area code to early
  if (phoneNumberLength < 3) return phoneNumber

  // if phoneNumberLength is greater than 4 and less the 7 we start to return
  // the formatted number
  if (phoneNumberLength < 9) return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`

  // finally, if the phoneNumberLength is greater then seven, we add the last
  // bit of formatting and return it.
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`
}

export function formatCPF(value: string) {
  if (!value) return value

  const number = value.replace(/[^\d]/g, '')

  const length = number.length

  if (length < 4) return number
  if (length < 7) return `${number.slice(0, 3)}.${number.slice(3)}`
  if (length < 10) return `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6)}`

  return `${number.slice(0, 3)}.${number.slice(3, 6)}.${number.slice(6, 9)}-${number.slice(9, 11)}`
}

export function validationCPF(value: string) {
  const validation = new RegExp("^[0-9]{3}(\.)[0-9]{3}(\.)[0-9]{3}(-)[0-9]{2}$").test(value)

  if (!validation) return false

  const number = value.replaceAll(/\.|-/ig, "")

  const blockNumbers = number.slice(0, 9).split("")

  const validationBlockNumbers = number.slice(9, 11).split("")

  //cpf like 111.111.111-11 invalide
  const validationAllNumbersSame = blockNumbers.filter(num => num === blockNumbers[0])

  if (validationAllNumbersSame.length === 9) return false

  const validationFirstDigit = (blockNumbers.reduce((acum, num, index) => {
    return acum + (Number(num) * (10 - index))
  }, 0) * 10) % 11


  const validationSecondDigit = ([...blockNumbers, validationBlockNumbers[0]].reduce((acum, num, index) => {
    return acum + (Number(num) * (11 - index))
  }, 0) * 10) % 11

  
  const valid1 = validationFirstDigit === 10 ? 0 : validationFirstDigit
  const valid2 = validationSecondDigit === 10 ? 0 : validationSecondDigit

  // console.log({validationAllNumbersSame,number, validation,value, validationBlockNumbers,blockNumbers, validationFirstDigit, validationSecondDigit, valid1, valid2})

  if (valid1 !== Number(validationBlockNumbers[0])) return false
  if (valid2 !== Number(validationBlockNumbers[1])) return false

  return true
}

export function validationPhoneNumber(value: any) {
  const validation = new RegExp("^[\(]([0-9]{2})[\)] [0-9]{5}-[0-9]{4}$").test(value)

  if (!validation) return false

  const number = value.replaceAll(/\(|\)| /ig, "")

  const areaCod = number.slice(0, 2)

  const codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28, 31, 32, 33, 34,
    35, 37, 38, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 51, 53, 54, 55, 61, 62,
    64, 63, 65, 66, 67, 68, 69, 71, 73,
    74, 75, 77, 79, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 91, 92, 93, 94, 95,
    96, 97, 98, 99
  ]

  if (!codigosDDD.find(n => n === Number(areaCod))) return false

  return true
}