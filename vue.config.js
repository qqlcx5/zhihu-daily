module.exports = {
	lintOnSave: false,
	publicPath: process.env.NODE_ENV === "production" ? "." : "/",
	devServer: {
		proxy: "https://news-at.zhihu.com/api/4"
	}
};