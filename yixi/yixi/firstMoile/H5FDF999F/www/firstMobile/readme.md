项目名称:Amz(模仿一席)
项目内容:听君一席话，胜读十年书,Amz是一个独立媒体。
        他记载了无数演说者的文章和在线视频提供大家观赏。
技术运用:响应手机端和PC端,首页导航在手机端切换成右侧滑出,
        下面轮播应用了Swiper插件,轮播内容,热门,推荐，最新都通过Ajax来获取数据完成随机调用。
        专题集页面为每个作者的文章。下面有观看视频的跳转链接。
        视频页下面通过调用数据获得每个作者视频的评论详情,评论做了分页;
        演讲集页在PC端运用了点击加载更多,而在手机端隐藏了底部,做了个无限滚动效果.没有更多的数据让加载时会提示,在上面有分类功能。每个不同的分类可以获取这个分类的所有视频。

        布局基于bootstarp主容器兼容PC手机两端。再有swiper font-awesome jquery
Api 说明:
        主页 url：http://api.yixi.tv/api/v1/album
        解析：
            res：请求成功时为 0
            data
            id：
            title：标题
            desc：简述
            webcontent：web 内容
            purecontent：内容
            newpc：
            background：背景图
            created_at：创建时间
            lectures：演讲信息
            id：查看演讲详细信息使用
            title：演讲标题
            desc：演讲简述
            lecturer_id：
            viewnum：多少人已经看过
            likenum：喜欢数量
            background：背景图
            cmtnum：评论数量
            site：演讲地点
            time：演讲时间
            lecturer：作者信息
            id：作者 id
            nickname：演讲者
            desc：演讲者身份
            pic：演讲者照片
            category：演讲分类
            name：分类
            tags：演讲归类
            name：归类
            演讲细节: url：http://api.yixi.tv/api/v1/lecture/detail/ + 首页 获取的 lectures 字段中的 id 字段
            演讲评论:
            url：http://api.yixi.tv/api/v1/lecture/comments/ + 首页 获取的 lectures 字段中的 id 字段 + /page/ + index
            演讲相关: url：http://api.yixi.tv/api/v1/lecture/ + 首页 获取的 lectures 字段中的 id 字段 + /relate
            获取分类:url：http://api.yixi.tv/api/v1/category/list
            获取演讲者url：http://api.yixi.tv/api/v1/category/ + 拼接获取分类的 id 字段 + /lecturers
            记录:url：http://api.yixi.tv/api/v1/record/1
            记录细节:url：http://api.yixi.tv/api/v1/lecture/detail/ + 从记录中获取的 id 字段