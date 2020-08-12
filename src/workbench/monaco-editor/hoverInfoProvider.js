class HoverInfoProvider {

  provideHover(model, position) {
    let tokens = model.getLineTokens(position.lineNumber);
    let word = model.getWordAtPosition(position);
    console.log(word);
    // 根据 provideHover 接口定义，返回结果如果没有 range，则使用当前 hover 的位置。
    return {
      contents: [
        // { value: '**函数**' },
        { value: word ? word.word : '' }
      ]
    };
  }
}

exports.HoverInfoProvider = HoverInfoProvider;