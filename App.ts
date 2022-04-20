/*
  import providers here, like:


  import { <exported-named-class } from './providers/<name-of-provider>
*/

export class App {
  constructor() {}

  async execute(): Promise<boolean> {
    // add whatever here
    return true
  }
}

new App()
  .execute()
  .then(resp => {
    console.log(resp)
  })
  .catch(err => {
    console.log(err)
  })