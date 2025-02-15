Java 虚拟机栈
每个 Java 方法在执行的同时会创建一个栈帧用于存储局部变量表、操作数栈、常量池引用等信息。从方法调用直至执行完成的过程，对应着一个栈帧在 Java 虚拟机栈中入栈和出栈的过程。
该区域可能抛出以下异常：

当线程请求的栈深度超过最大值，会抛出 StackOverflowError 异常；
栈进行动态扩展时如果无法申请到足够内存，会抛出 OutOfMemoryError 异常。

堆
所有对象都在这里分配内存，是垃圾收集的主要区域（"GC 堆"）。
现代的垃圾收集器基本都是采用分代收集算法，其主要的思想是针对不同类型的对象采取不同的垃圾回收算法。可以将堆分成两块：
新生代（Young Generation）
老年代（Old Generation）
