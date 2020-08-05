/**
 * 图数据结构测试。
 */

 describe('图', function () {
  it('应正确构造一个实例', function (){
    let second = new Map([
      [1, 'uno'],
      [2, 'dos']
    ])

    console.log(second.get(1));

    console.log(...[1, 2]);
  })
 });