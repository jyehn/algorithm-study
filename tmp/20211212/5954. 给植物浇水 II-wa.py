from typing import List

# 1 <= n <= 105
# 如果 Alice 和 Bob 到达同一株植物，那么当前水罐中水更多的人会给这株植物浇水。如果他俩水量相同，那么 Alice 会给这株植物浇水。
class Solution:
    def minimumRefill(self, plants: List[int], capacityA: int, capacityB: int) -> int:
        n = len(plants)
        i, j = 0, n - 1
        ok = 0
        res = 0
        remainA = capacityA
        remainB = capacityB
        while ok < n:
            if i < j:
                if remainA - plants[i + 1] < 0:
                    res += 1
                    remainA = capacityA
                remainA -= plants[i + 1]
                i += 1
                ok += 1

            if i < j:
                if remainB - plants[j - 1] < 0:
                    res += 1
                    remainB = capacityB
                remainB -= plants[j - 1]
                j -= 1
                ok += 1

            if i == j:
                if remainA >= remainB:
                    if remainA - plants[i + 1] < 0:
                        res += 1
                        remainA = capacityA
                    remainA -= plants[i + 1]
                    i += 1
                    ok += 1
                elif remainA < remainB:
                    if remainB - plants[j - 1] < 0:
                        res += 1
                        remainB = capacityB
                    remainB -= plants[j - 1]
                    j -= 1
                    ok += 1

        return res


print(Solution().minimumRefill(plants=[2, 2, 3, 3], capacityA=3, capacityB=4))
# 输出：2
# 解释：
# - 最初，Alice 的水罐中有 3 单元水，Bob 的水罐中有 4 单元水。
# - Alice 给植物 0 浇水，Bob 给植物 3 浇水。
# - Alice 和 Bob 现在都只有 1 单元水，并分别需要给植物 1 和植物 2 浇水。
# - 由于他们的水量均不足以浇水，所以他们重新灌满水罐再进行浇水。
# 所以，两人浇灌所有植物过程中重新灌满水罐的次数 = 0 + 1 + 1 + 0 = 2 。
print(Solution().minimumRefill(plants=[2, 2, 5, 2, 2], capacityA=5, capacityB=5))

