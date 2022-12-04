/**
 * @description dev 配置
 * @author wangchen
 */

module.exports = {
    // mysql 连接配置
    mysqlConf: {
        host: 'localhost',
        user: 'root',
        password: 'Mysql_2019',
        port: '3306',
        database: 'imooc_lego_course',
    },

    // mongodb 连接配置
    mongodbConf: {
        host: 'localhost',
        port: '27017',
        dbName: 'imooc_lego_course',
    },

    // redis 连接配置
    redisConf: {
        port: '6379',
        host: '127.0.0.1',
    },

    // jwt 过期时间
    jwtExpiresIn: '1d', // 1. 字符串，如 '1h' '2d'； 2. 数字，单位是 s

    // 发布出来的 h5 域名
    h5Origin: 'http://localhost:3001',

    // cors origin
    corsOrigin: '*',

    // 短信验证码缓存时间，单位 s
    msgVeriCodeTimeout: 2 * 60,

    // 腾讯云短信服务配置
    tencentMsgConf: {
        // 获取密钥 https://console.cloud.tencent.com/cam/capi
        SECRET_ID: 'AKIDuc7MRJxxxxxxxxxZyBTVMwnThe',
        SECRET_KEY: 'nJZYHj5KJ2xxxxxxxxG0dHengKivc',
    },

    // 阿里云 OSS 配置，Sam 老师提供
    aliyunOSSConf: {
        accessKeyId: 'LTAI4G7nxxxxxx9Y5ZTA',
        accessKeySecret: '8Nlx8EDxxxxxxq1o0w9m8',
        bucket: 'imooc-lego-resource-dev',
        region: 'oss-cn-hangzhou',
    },
    // 阿里云 OSS CDN 配置，Sam 老师提供
    aliyunOSS_CDNHost: 'static-dev.imooc-lego.com',

    // 百度云内容审核
    baiduCloudCensorConf: {
        APP_ID: '22551573',
        API_KEY: 'fF58Q9qxxxxxxxxZ0SZ',
        SECRET_KEY: 'VdD6xaGWTxxxxxxxxx3WudEdIbIa',
    },
}
