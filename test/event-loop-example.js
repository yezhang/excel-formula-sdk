
// 浏览器渲染管线伪代码
// 
while(true) {
  queue = getNextQueue();
  task = queue.pop();
  execute(task);

  while(microtaskQueue.hasTasks()) {
    doMicrotask();
  }

  if(isRepaintTime()) {
    animationTasks = animationQueue.copyTasks();
    for(task in animationTasks) {
      doAnimationTask(task);
    }

    repaint();
  }
}