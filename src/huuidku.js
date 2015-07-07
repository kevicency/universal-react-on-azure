import hipku from 'hipku'

export function encode(uuid) {
  const fakeIPv6 = uuid.replace(/-/g, '').match(/.{4}/g).join(':')
  const haiku = hipku.encode(fakeIPv6)

  return haiku.endsWith('\n') ?
    haiku.substring(0, haiku.length - 1) : haiku
}

export function encodeAsync(uuid) {
  const isError = Math.random() >= 0.25

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isError) {
        reject(new Error('Not working as planned!'))
      } else {
        resolve(encode(uuid))
      }
    }, 3000)
  })
}
