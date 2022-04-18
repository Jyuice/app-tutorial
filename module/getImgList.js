/**
 * guide : 页面顶部居中的指示语
 * src: 图片名称
 * clip: 不为空则表示有动画，数值为遮罩层clip的值
 * msg: bubble中的内容
 */

const imgList = new Map([
    // 淘宝客服部分
    [1, [{
        guide: "打开商品页面",
        src: '1/01-1.jpg',
        clip: '',
        msg: ""
    }, {
        guide: "点击客服",
        src: '1/01-1.jpg',
        // clip: 'ctx.clearRect(0,0,100,100)',
        clip: [40,712,50,50],
        msg: "点击这里哦"
    }, {
        guide: "发送商品信息",
        src: '1/01-2.jpg',
        clip: [257.5,664,90,35],
        msg: "点“发给客服”之后就可以跟他聊天了"
    }]],
    [2, [{
        guide: '点击右下角的＋号',
        src: '1/01-2.jpg',
        clip: [295,710,50,50],
        msg: '点那个＋号'
    },
    {
        guide: '选择功能',
        src: '1/02-1.jpg',
        clip: [],
        msg: '要拍照就按“拍摄”，要录像就按“短视频”'
    }]],
    [3, [{
        guide: '点击“消息”',
        src : '1/03-1.jpg',
        clip: [],
        msg: '点下面这个"消息"然后就像微信一样找客服的聊天就行了'
    }]],
    // 淘宝红包部分
    [11, [
        {
            guide: '首页领红包',
            src : '2/01-1.jpg',
            clip: '',
            msg: '在这里领了一个红包'
        },
        {
            guide: '红包界面',
            src : '2/01-2.jpg',
            clip: '',
            msg: '然后跳到了红包界面'
        },
        {
            guide: '点击输入框',
            src : '2/01-3.jpg',
            clip: [],
            msg: '点白色框起来的地方'
        },
        {
            guide: '搜索商品',
            src : '2/01-4.jpg',
            clip: [],
            msg: '然后在这里写你要买的东西，比如你要买毛巾，就写“毛巾”进去，在这里面搜到的商品就可以用红包，其他地方的就不行'
        },
    ]],
    [12, [
        {
            guide: '首页',
            src : '2/02-1.jpg',
            clip: [],
            msg: '点白色框框那里'
        }
    ]]
])

export function getImgList(id) {
    return imgList.get(Number(id))
}