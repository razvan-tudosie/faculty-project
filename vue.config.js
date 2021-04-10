module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/faculty-project/'
    : '/',

    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "NewCinema";
                return args;
            })
    }
}