// /**
//  * @description
//  * 如果 nums[mid] 等于目标值， 则提前返回 mid（只需要找到一个满足条件的即可）
//    如果 nums[mid] 小于目标值， 说明目标值在 mid 右侧，这个时候解空间可缩小为 [mid + 1, right] （mid 以及 mid 左侧的数字被我们排除在外）
//    如果 nums[mid] 大于目标值， 说明目标值在 mid 左侧，这个时候解空间可缩小为 [left, mid - 1] （mid 以及 mid 右侧的数字被我们排除在外）
//  */
// const bisectLeft = (arr: number[], target: number): number => {
//   if (arr.length === 0) return 0

//   let l = 0
//   let r = arr.length - 1
//   // 因此当 left <= right 的时候，解空间都不为空，此时我们都需要继续搜索
//   while (l <= r) {
//     const mid = (l + r) >> 1
//     const midElement = arr[mid]
//     if (midElement === target) {
//       r--
//     } else if (midElement < target) {
//       // mid 根本就不是答案，直接更新 l = mid + 1，从而将 mid 从解空间排除
//       l = mid + 1
//     } else if (midElement > target) {
//       // midElement >= target :将 mid 从解空间排除，继续看看有没有更好的
//       r = mid - 1
//     }
//   }

//   return l
// }

// 尽量左移
const bisectLeft = (arr: number[], target: number): number => {
  if (arr.length === 0) return 0

  let l = 0
  let r = arr.length - 1
  // 因此当 left <= right 的时候，解空间都不为空，此时我们都需要继续搜索
  while (l <= r) {
    const mid = (l + r) >> 1
    const midElement = arr[mid]
    if (midElement < target) {
      // mid 根本就不是答案，直接更新 l = mid + 1，从而将 mid 从解空间排除
      l = mid + 1
    } else if (midElement >= target) {
      // midElement >= target :将 mid 从解空间排除，继续看看有没有更好的
      r = mid - 1
    }
  }

  return l
}
if (require.main === module) {
  // const arr = [7, 7, 7, 7, 7, 7]
  const arr = [-3, -1, 1, 3]
  console.log(bisectLeft(arr, 1))
}

export { bisectLeft }
