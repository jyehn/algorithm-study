**第一类斯特林数**是解决：将 n 个不同的元素划分为 k 个圆排列的方案数
递推式为 `f(i,j)=f(i−1,j−1)+(i−1)f(i−1,j)`
(最小的元素是否放在队首)
即要么自成一个环，要么加入其它 k 个环，可以插入 n−1 个位置。（每两个数之间）
`1866. 恰有 K 根木棍可以看到的排列数目.ts`

**第二类斯特林数**是将 n 个不同的元素放入 m 个相同盒子里，每个盒子非空的方案数。
`S(n,m)=S(n-1,m-1) + m*S(n-1,m)`
(新来的一个元素是自己放入一个新盒子还是放到以前的盒子里)
即讨论第一个球`是否单独在一个盒子`里面。
如果不独占一盒，那么把这个球放进任一个盒子，这个盒子就相当于与其他的盒子不同，那么在乘答案的时候就要多乘一个 m.
`920. 播放列表的数量.py`
`1692. 计算分配糖果的不同方式.py`

https://www.cnblogs.com/gzy-cjoier/p/8426987.html
