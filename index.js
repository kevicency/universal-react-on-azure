require('babel/register')({
  stage: 0
})

if (process.env.NODE_ENV !== 'production') {
  if (require('piping')({
    hook: true,
    ignore: /(\/\.|~$|\.json|\.scss$)/i
  })) {
    require('./src/server')
  }
} else {
  require('./src/server')
}


