from typing import List
from collections import Counter, defaultdict
from itertools import accumulate


# 2 <= n <= 105
# 给你一个整数 k 。你可以将 nums 中 一个 元素变为 k 或 不改变 数组。
# 1 <= pivot < n
# nums[0] + nums[1] + ... + nums[pivot - 1] == nums[pivot] + nums[pivot + 1] + ... + nums[n - 1]
# 其中左半部分和右半部分都至少拥有一个元素。
# 请你返回在 至多 改变一个元素的前提下，最多 有多少种方法 分割 nums 使得上述两个条件都满足。

# 思路：
# 如果改变一个元素nums[i]为k，那么原数组总和为total变为total - nums[i] + k
# 对于前缀和数组presum来说，presum[0,..,i-1]的值是没有发生改变的，而presum[i,..,n-1]的值都增加了k - nums[i]
# 假设原先元素值为x，那么希望有x + k - nums[i] == (total + k - nums[i]) / 2,
# 即x = total / 2 - (k - nums[i]) / 2，即统计presum[i,..,n-2]有多少元素值为total / 2 - (k - nums[i]) / 2

# 前缀和+哈希表统计
# 改变nums[i]   在presum[0,..,i-1] 查询 (total - nums[i] + k) / 2
#               在presum[i,..,n-2] 查询 total / 2 - (k - nums[i]) / 2
# 改变nums[i+1] 在presum[0, .., i] 查询 (total - nums[i + 1] + k) / 2
#               在presum[i + 1,..,n-2] 查询 total / 2 - (k - nums[i + 1]) / 2


class Solution:
    def waysToPartition(self, nums: List[int], k: int) -> int:
        n, preSum = len(nums), list(accumulate(nums))
        left, right, total = defaultdict(int), Counter(preSum[:-1]), preSum[-1]
        # print(right, total)

        # 不改变
        res = right[total / 2]

        # 改变
        for i in range(n):
            if i > 0:
                left[preSum[i - 1]] += 1
                right[preSum[i - 1]] -= 1
            leftTarget = (total + (k - nums[i])) / 2
            rightTarget = (total - (k - nums[i])) / 2
            res = max(res, left[leftTarget] + right[rightTarget])

        return res


print(Solution().waysToPartition([22, 4, -25, -20, -15, 15, -16, 7, 19, -10, 0, -13, -14], k=-33))
# 输出：4
# 解释：一个最优的方案是将 nums[2] 改为 k 。数组变为 [22,4,-33,-20,-15,15,-16,7,19,-10,0,-13,-14] 。
# 有四种方法分割数组。

