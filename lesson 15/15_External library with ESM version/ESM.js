import { hello } from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js'; // ESM version of hello() // This syntax is called named export
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js'; // ESM version of dayJS // This syntax is default export
import formatCurrency from './exportDefault.js'; // when using <script type = "module"> you must include .js extension 

hello() // named export
console.log(dayjs()) // default export

const today = dayjs()

const deliveryDate = today.add(7, 'days')
console.log(deliveryDate)

const formattedDate = deliveryDate.format('dddd, DD MMM YYYY')
console.log(formattedDate)

const formattedToday = today.format('ddd DD MMM YYYY')
console.log(formattedToday)

console.log(formatCurrency(2499)) // defaault export another example