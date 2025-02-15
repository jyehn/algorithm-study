import { BinaryTree } from '../../Tree'
import { deserializeNode } from '../../构建类/297二叉树的序列化与反序列化'
import { treeToGraph } from '../../构建类/treeToGraph'

// 你计算其中 最长连续序列路径 的长度。
// 路径可以是 子-父-子 顺序，并不一定是 父-子 顺序。

// 因为树节点值有重复 这样不可行
function longestConsecutive1(root: BinaryTree | null): number {
  if (!root) return 0
  const adjMap = treeToGraph(root)
  let res = 1

  const dfs = (cur: number, dis: number): void => {
    res = Math.max(res, dis)
    for (const next of adjMap.get(cur)!) {
      if (Math.abs(next - cur) !== 1) continue
      dfs(next, dis + 1)
    }
  }

  for (const cur of adjMap.keys()) {
    dfs(cur, 1)
  }

  return res
}

function longestConsecutive(root: BinaryTree | null): number {
  if (!root) return 0

  let res = 1

  /**
   *
   * @param root 经过root的最长连续路径 (连续并不是单调 而是1 3 2 3 这种)
   * @returns
   */
  const postorder = (root: BinaryTree | null): [number, number, number] => {
    if (!root) return [Infinity, 0, 0]
    const [pre1, left1, right1] = postorder(root.left)
    const [pre2, left2, right2] = postorder(root.right)
    let [left, right] = [0, 0]

    if (pre1 === root.val - 1) {
      left = Math.max(left, 1 + left1)
    }

    if (pre2 === root.val - 1) {
      left = Math.max(left, 1 + left2)
    }

    if (pre1 === root.val + 1) {
      right = Math.max(right, 1 + right1)
    }

    if (pre2 === root.val + 1) {
      right = Math.max(right, 1 + right2)
    }

    res = Math.max(res, 1 + left + right)
    return [root.val, left, right]
  }
  postorder(root)
  return res
}

export {}
console.log(longestConsecutive(deserializeNode([2, 1, 3])))
