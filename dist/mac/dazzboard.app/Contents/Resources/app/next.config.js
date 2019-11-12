module.exports = {
	exportPathMap: () => {
		return {
			'/': { page: '/' }
		};
	},
	webpack: config => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		};

		return config;
	}
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZXhwb3J0UGF0aE1hcCIsInBhZ2UiLCJ3ZWJwYWNrIiwiY29uZmlnIiwibm9kZSIsImZzIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsT0FBUCxHQUFpQjtBQUNoQkMsZ0JBQWUsTUFBTTtBQUNwQixTQUFPO0FBQ04sUUFBSyxFQUFFQyxNQUFNLEdBQVI7QUFEQyxHQUFQO0FBR0EsRUFMZTtBQU1oQkMsVUFBU0MsVUFBVTtBQUNsQjtBQUNBQSxTQUFPQyxJQUFQLEdBQWM7QUFDYkMsT0FBSTtBQURTLEdBQWQ7O0FBSUEsU0FBT0YsTUFBUDtBQUNBO0FBYmUsQ0FBakIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cdGV4cG9ydFBhdGhNYXA6ICgpID0+IHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Jy8nOiB7IHBhZ2U6ICcvJyB9XG5cdFx0fVxuXHR9LFxuXHR3ZWJwYWNrOiBjb25maWcgPT4ge1xuXHRcdC8vIEZpeGVzIG5wbSBwYWNrYWdlcyB0aGF0IGRlcGVuZCBvbiBgZnNgIG1vZHVsZVxuXHRcdGNvbmZpZy5ub2RlID0ge1xuXHRcdFx0ZnM6ICdlbXB0eSdcblx0XHR9XG5cblx0XHRyZXR1cm4gY29uZmlnXG5cdH1cbn1cbiJdfQ==