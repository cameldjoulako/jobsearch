const jobs = require('./database/mongoose').jobs

jobs.remove({}).exec()
  .then(() => {
    require('./data-resources/authenticjobs').store()
    require('./data-resources/indeed').store()
  })
  .catch(err => {
    console.log('error removing')
    console.log(err)
  })
