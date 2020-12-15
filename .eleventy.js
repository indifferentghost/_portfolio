module.exports = function(eleventyConfig) {
	eleventyConfig.addFilter('parseDate', (value) => {
		return value.toLocaleDateString();
	});

  return {
    dir: { input: './src' }
  }
};
