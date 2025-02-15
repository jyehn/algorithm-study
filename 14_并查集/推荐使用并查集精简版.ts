// 并查集简化版：存储数组元素下标
// 并查集的root 不一定要是一个map 也可以用数组当map
// 初始化时自己指向自己
const useUnionFindArray = (size: number) => {
  let count = size
  const parent = Array.from<number, number>({ length: size }, (_, i) => i)

  const find = (key: number) => {
    while (parent[key] != undefined && parent[key] !== key) {
      // 进行路径压缩
      parent[key] = parent[parent[key]]
      key = parent[key]
    }
    return key
  }

  const union = (key1: number, key2: number) => {
    const root1 = find(key1)
    const root2 = find(key2)
    if (root1 === root2) return
    // 简单rank优化:总是让大的根指向小的根
    parent[Math.max(root1, root2)] = Math.min(root1, root2)
    count--
  }

  const isConnected = (key1: number, key2: number) => find(key1) === find(key2)

  const getCount = () => count

  return { union, find, isConnected, getCount }
}

const useUnionFindMap = (size: number) => {
  let count = size // 一开始的联通分量个数
  const parent = new Map<number, number>()
  for (let i = 0; i < size; i++) {
    parent.set(i, i)
  }

  const find = (val: number) => {
    if (!parent.has(val)) {
      parent.set(val, val)
      count++
    }

    while (parent.get(val) !== val) {
      val = parent.get(val)!
    }

    return val
  }

  const union = (key1: number, key2: number) => {
    if (isConnected(key1, key2)) return
    const root1 = find(key1)
    const root2 = find(key2)
    if (root1 === root2) return
    // rank优化:总是让大的根指向小的根
    parent.set(Math.max(root1, root2), Math.min(root1, root2))
    count--
  }

  const isConnected = (key1: number, key2: number) => find(key1) === find(key2)

  const getCount = () => count

  return { union, find, isConnected, getCount }
}

if (require.main === module) {
  const uf = useUnionFindMap(2)
  uf.union(1, 2)
  console.log(uf.getCount())
}

export { useUnionFindArray, useUnionFindMap }
