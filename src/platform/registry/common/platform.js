const Types = require('../../../base/common/types');
const Assert = require('../../../base/common/assert');

class IRegistry {
  /**
	 * Adds the extension functions and properties defined by data to the
	 * platform. The provided id must be unique.
	 * @param id a unique identifier
	 * @param data a contribution
	 */
	add(id, data){}

	/**
	 * Returns true iff there is an extension with the provided id.
	 * @param id an extension identifier
	 */
	knows(id){}

	/**
	 * Returns the extension functions and properties defined by the specified key or null.
	 * @param id an extension identifier
	 */
	as(id){}
}

class RegistryImpl extends IRegistry{
  constructor() {
    this.data = {};
  }

  add(id, data){
    Assert.ok(Types.isString(id));
		Assert.ok(Types.isObject(data));
		Assert.ok(!this.data.hasOwnProperty(id), '该 id 已经被其他扩展占用');

		this.data[id] = data;
  }

  knows(id){
    return this.data.hasOwnProperty(id);
  }

  as(id){
    return this.data[id] || null;
  }
}

exports.Registry = new RegistryImpl();