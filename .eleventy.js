module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter('parseDate', (value) => {
		return value.toLocaleDateString();
	});

	eleventyConfig.addFilter('twoWay', (value) => {
		// TODO: This should be a two-way/bi-directional link heleper eventually.
		// See README.md for more information.
		return value;
	})

  return {
    dir: { input: './src' }
  }
};
