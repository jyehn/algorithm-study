/**
 * @param {string} board 1 <= board.length <= 16
 * @param {string} hand 1 <= hand.length <= 5
 * @return {number}
 * @description
 * 如果有出现三个或者三个以上颜色相同的球相连的话，就把它们移除掉。
 * 找到插入并可以移除掉桌上所有球所需的最少的球数。如果不能移除桌上所有的球，输出 -1 。
 * @summary
 * 可以消除的地方，指的是连续相同颜色 + 手上相同颜色的球大于等于 3，这也是题目说明的消除条件。
 */
const findMinStep = function (board: string, hand: string): number {
  let res = Infinity

  // 存储手上的球的种类和个数，这么做是为了后面快速判断连续的球是否可以被消除
  const handCounter = new Map<string, number>()
  for (const ball of hand) handCounter.set(ball, (handCounter.get(ball) || 0) + 1)

  bt(board, 0, new Set())

  return res === Infinity ? -1 : res

  function bt(curBoard: string, step: number, visited: Set<string>) {
    const key = genKey(curBoard, handCounter)
    if (visited.has(key)) return
    visited.add(key)

    if (curBoard.length === 0) return (res = Math.min(res, step))

    // 每个球每个插入位置暴力bt
    for (const handBall of handCounter.keys()) {
      if (handCounter.get(handBall)! <= 0) continue

      // 每个插入位置
      for (let insertPosition = 0; insertPosition < curBoard.length; insertPosition++) {
        handCounter.set(handBall, handCounter.get(handBall)! - 1)
        bt(
          removeBall(curBoard.slice(0, insertPosition) + handBall + curBoard.slice(insertPosition)),
          step + 1,
          visited
        )
        handCounter.set(handBall, handCounter.get(handBall)! + 1)
      }
    }
  }

  // 3个碰到一起就消除
  function removeBall(str: string): string {
    const shouldRemovePattern = /(\w)\1{2,}/g
    const shouldRemove = shouldRemovePattern.test(str)
    if (shouldRemove) {
      return removeBall(str.replace(shouldRemovePattern, ''))
    } else {
      return str
    }
  }

  function genKey(curBoard: string, counter: Map<string, number>): string {
    const handBallKey = Array.from(counter.entries())
      .sort((a, b) => a[0].codePointAt(0)! - b[0].codePointAt(0)!)
      .map(item => item[0].repeat(item[1]))
      .join('')
    return `${curBoard}$${handBallKey}`
  }
}

console.log(findMinStep('WWRRBBWW', 'WRBRW'))
// 2
console.log(findMinStep('WRRBBW', 'RB'))
// -1
console.log(findMinStep('G', 'GGGGG'))
// 2
export {}
