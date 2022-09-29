export interface IUser {
  name: string,
  username: string,
  email: string,
  phone: string,
  address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string
  }
}
