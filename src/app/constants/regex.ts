export const RegEx = {
  email: new RegExp('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$'),
  phone: new RegExp('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$'),
  zipcode: new RegExp('^\\d{5}-\\d{4}|\\d{5}|[A-Z]\\d[A-Z] \\d[A-Z]\\d$')
}
