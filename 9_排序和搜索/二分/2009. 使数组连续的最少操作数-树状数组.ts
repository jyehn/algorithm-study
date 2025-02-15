class BIT {
  public size: number
  private tree: Map<number, number>

  constructor(size: number) {
    this.size = size
    this.tree = new Map()
  }

  add(x: number, k: number) {
    if (x <= 0) throw Error('查询索引应为正整数')
    for (let i = x; i <= this.size; i += this.lowbit(i)) {
      this.tree.set(i, (this.tree.get(i) || 0) + k)
    }
  }

  query(x: number) {
    let res = 0
    for (let i = x; i > 0; i -= this.lowbit(i)) {
      res += this.tree.get(i) || 0
    }
    return res
  }

  sumRange(left: number, right: number) {
    return this.query(right) - this.query(left - 1)
  }

  private lowbit(x: number) {
    return x & -x
  }
}

/**
 * @param {number[]} nums
 * @return {number}
 * 连续数组:排序
 */
const minOperations = function (nums: number[]): number {
  const n = nums.length
  const bit = new BIT(2e9)
  for (const num of new Set(nums)) bit.add(num, 1)

  let res = n
  for (const num of nums) {
    const count = bit.sumRange(num, num + n - 1)
    res = Math.min(res, n - count)
  }

  return res
}

console.log(minOperations([4, 2, 5, 3])) // nums 已经是连续的
console.log(minOperations([1, 2, 3, 5, 6]))
// 一个可能的解是将最后一个元素变为 4 。
// 结果数组为 [1,2,3,5,4] ，是连续数组。

export {}
