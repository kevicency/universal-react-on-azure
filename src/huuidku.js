import hipku from 'hipku'

export function encode(uuid) {
  const fakeIPv6 = uuid.replace(/-/g, '').match(/.{4}/g).join(':')
  return hipku.encode(fakeIPv6)
}
