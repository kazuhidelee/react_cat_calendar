/** @type {import('next').NextConfig} */
module.exports = {
	target: 'serverless', // Enable serverless deployment
	exportPathMap: function () {
	  return {
		'/': { page: '/page' }, // Specify the pages you want to export
		// Add more page mappings as needed
	  };
	},
  };