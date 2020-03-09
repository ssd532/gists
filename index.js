let asyncFn = waitTime => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(Math.floor(Math.random() * 10))
    }, waitTime)
  })
}

let waitTime = 1000 // ms

let parallel = async () => {
  console.time('parallel execution time')

  // not using await to call asyncFn() 
  // so these calls are returning promises
  let p1 = asyncFn(waitTime)
  let p2 = asyncFn(waitTime)
  let p3 = asyncFn(waitTime)

  await Promise.all([p1, p2, p3]).then(numbers => {
    console.log(numbers)
  })

  console.timeEnd('parallel execution time')
}

// execution time =~ waitTime 
parallel()