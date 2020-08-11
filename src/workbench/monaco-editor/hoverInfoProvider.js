class HoverInfoProvider {
  
  provideHover(model, position) {
			return {
				range: new monaco.Range(1, 1, model.getLineCount(), model.getLineMaxColumn(model.getLineCount())),
				contents: [
					{ value: '**SOURCE**' },
					{ value: '```html\n' + res.responseText.substring(0, 200) + '\n```' }
				]
			};
  }
}

exports.HoverInfoProvider = HoverInfoProvider;