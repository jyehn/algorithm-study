function minDays(grid: number[][]): number {}

console.log(
  minDays([
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
  ])
)

// 给你一个由若干 0 和 1 组成的二维网格 grid ，其中 0 表示水，而 1 表示陆地。岛屿由水平方向或竖直方向上相邻的 1 （陆地）连接形成。
// 如果 恰好只有一座岛屿 ，则认为陆地是 连通的 ；否则，陆地就是 分离的
// 一天内，可以将任何单个陆地单元（1）更改为水单元（0）。
// 返回使陆地分离的最少天数。
