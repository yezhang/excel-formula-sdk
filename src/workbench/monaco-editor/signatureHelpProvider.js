const FormulaLanguageService = require('../../platform/formula/FormulaLanguageService').FormulaLanguageService;

const langService = FormulaLanguageService.INSTANCE;
/**
 * 函数参数提醒。
 */

class SignatureHelpProvider {
  constructor() {
    this.signatureHelpTriggerCharacters = ['(', ','];

  }

  provideSignatureHelp(model, position, cancellationToken, context) {
    const offset = model.getOffsetAt(position);

    let info = langService.getSignatureHelpItems(model.getValue(), position);

    if (!info || model.isDisposed()) {
			return;
		}

    const ret = {
			activeSignature: info.selectedItemIndex,
			activeParameter: info.argumentIndex,
			signatures: []
    };

    info.items.forEach(item => {

			const signature = {
				label: '',
				parameters: []
			};

			signature.documentation = item.documentation;
			signature.label += item.prefixDisplayParts;
			item.parameters.forEach((p, i, a) => {
				const label = p.displayParts;
				const parameter = {
					label: label,
					documentation: p.documentation
				};
				signature.label += label;
				signature.parameters.push(parameter);
				if (i < a.length - 1) {
					signature.label += item.separatorDisplayParts;
				}
			});
			signature.label += item.suffixDisplayParts;
			ret.signatures.push(signature);
		});

		return {
			value: ret,
			dispose() { }
		};
  }
}

exports.SignatureHelpProvider = SignatureHelpProvider;