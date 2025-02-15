interface Tree {
  val: string
  children: (Tree | undefined)[]
}
// 1. 根节点与子节点的对应关系
const tree = {
  val: 'a',
  children: [
    {
      val: 'b',
      children: [
        {
          val: 'd',
          children: [],
        },
        {
          val: 'e',
          children: [],
        },
      ],
    },
    {
      val: 'c',
      children: [
        {
          val: 'f',
          children: [],
        },
        {
          val: 'g',
          children: [],
        },
      ],
    },
  ],
}

/**
 *
 * @description 访问根节点;对根节点的children挨个进行深度优先遍历
 */
// 2.dfs
const dfs = (root: Tree | undefined) => {
  if (!root) return
  console.log(root?.val)
  root?.children.forEach(dfs)
}

/**
 *
 * @description 新建队列，根节点入队;队头出队并访问;队头children挨个入队;重复知道队列为空
 */
const bfs = (root: Tree | undefined) => {
  const queue = [root]

  while (queue.length) {
    const queueHead = queue.shift()
    console.log(queueHead?.val)
    queueHead?.children.forEach(child => {
      queue.push(child)
    })
  }
}

// 3.从根节点开始dfs
// dfs(tree)
// bfs(tree)
export {}
