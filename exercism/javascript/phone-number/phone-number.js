const areaCode = nr => nr[0];
const exchangeCode = nr => nr[3];

export default class PhoneNumber {
  constructor(nr) {
    this.nr = nr;
  }

  number() {
    const nr = this.nr.replace(/^(\+1|1)|(\D)/g, '');

    switch (true) {
      case nr.length !== 10:
        return null;
      case areaCode(nr) === '0' || areaCode(nr) === '1':
        return null;
      case exchangeCode(nr) === '0' || exchangeCode(nr) === '1':
        return null;
      default:
        return nr;
    }
  }
}
