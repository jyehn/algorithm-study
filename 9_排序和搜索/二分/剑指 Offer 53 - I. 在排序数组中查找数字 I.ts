// 统计一个数字在排序数组中出现的次数。
function search(nums: number[], target: number): number {
  const bisectLeft = (arr: string | any[], target: number) => {
    if (arr.length === 0) return -1

    let l = 0
    let r = arr.length - 1
    // 因此当 left <= right 的时候，解空间都不为空，此时我们都需要继续搜索
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      const midElement = arr[mid]
      if (midElement === target) {
        r--
      } else if (midElement < target) {
        // mid 根本就不是答案，直接更新 l = mid + 1，从而将 mid 从解空间排除
        l = mid + 1
      } else if (midElement > target) {
        // midElement >= target :将 mid 从解空间排除，继续看看有没有更好的
        r = mid - 1
      }
    }

    return l
  }
  const bisectRight = (arr: string | any[], target: number) => {
    if (arr.length === 0) return -1

    let l = 0
    let r = arr.length - 1
    // 因此当 left <= right 的时候，解空间都不为空，此时我们都需要继续搜索
    while (l <= r) {
      const mid = Math.floor((l + r) / 2)
      const midElement = arr[mid]
      if (midElement === target) {
        l++
      } else if (midElement < target) {
        // mid 根本就不是答案，直接更新 l = mid + 1，从而将 mid 从解空间排除
        l = mid + 1
      } else if (midElement > target) {
        // midElement >= target :将 mid 从解空间排除，继续看看有没有更好的
        r = mid - 1
      }
    }

    return l
  }
  const l = bisectLeft(nums, target)
  const r = bisectRight(nums, target)
  return r - l
}
