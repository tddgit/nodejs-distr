const january = new Date(9e8)
console.log("-> january", january);

const english = new Intl.DateTimeFormat('en', {month: 'long'})
console.log("-> english", english.format(january));
const spanish = new Intl.DateTimeFormat('es', {month: 'long'})
console.log("-> spanish", spanish.format((january)));

const hasICU = typeof Intl === 'object'

const hasFullICU = (() => {
   try {
        const january = new Date(9e8)
        const spanish = new Intl.DateTimeFormat('es', {month: 'long'})

       return spanish.format(january) === 'enero'

   } catch (err) {

   }
})()
