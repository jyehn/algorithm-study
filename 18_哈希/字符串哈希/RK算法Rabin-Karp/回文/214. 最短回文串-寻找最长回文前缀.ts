// 等价于寻找最长的前缀，他是一个回文串
// 则源字符串s为 s1(回文)+s2  所求即为 s2逆+s1+s2

import { RabinKarpHasher } from '../../StringHasher'

function shortestPalindrome(s: string): string {
  if (s.length <= 1) return s
  const leftHasher = new RabinKarpHasher(s)
  const rightHasher = new RabinKarpHasher(s.split('').reverse().join(''))
  let end = -1
  for (let r = 1; r <= s.length; r++) {
    const leftSliceHash = leftHasher.getHashOfRange(1, r)
    const rightSliceHash = rightHasher.getHashOfRange(s.length - (r - 1), s.length)
    if (leftSliceHash === rightSliceHash) end = r - 1
  }

  const add = s
    .slice(end + 1)
    .split('')
    .reverse()
    .join('')

  return add + s
}
console.log(shortestPalindrome('aacecaaa'))
