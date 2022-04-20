/**
 * src: 图片名称
 * clip: 不为空则表示有动画，数值为遮罩层clip的值
 * msg: bubble中的内容
 */

const imgList = new Map([
    // 淘宝部分
    [1, [{
        src: 'detail.jpg',
        clip: '',
        msg: ""
    }, {
        src: 'detail.jpg',
        // clip: 'ctx.clearRect(0,0,100,100)',
        clip: [40,712,50,50],
        msg: "点击这里哦"
    }, {
        src: 'assist/1.jpg',
        clip: [257.5,664,90,35],
        msg: "点“发给客服”之后就可以跟他聊天了"
    }, {
        src: 'home.jpg',
        clip: [288.5,711,57,46],
        msg: "或者在首页点“我的淘宝”"
    }, {
        src: 'individual.jpg',
        clip: [293.5,208,52,26],
        msg: "点击“全部”"
    }, {
        src: 'order/all.jpg',
        clip: [13.5,115,325,31],
        msg: "找到你要的商品，然后点上面这条写了店名的地方"
    }, {
        src: 'shop.jpg',
        clip: [284.5,714,54,40],
        msg: "点“联系客服”之后就可以跟他聊天了"
    }
    ]],
    [2, [{
        src: 'assist/1.jpg',
        clip: [295,710,50,50],
        msg: '点那个＋号'
    },
    {
        src: 'assist/2.jpg',
        clip: [13.5,562,166,78],
        msg: '要拍照就按“拍摄”，要录像就按“短视频”'
    }]],
    [3, [{
        src : 'msg.jpg',
        clip: [148.5,708,58,47],
        msg: '点下面这个"消息"然后就像微信一样找客服的聊天就行了'
    }]],
    // 淘宝红包部分
    [11, [
        {
            src : 'redpocket/1.jpg',
            clip: [125.5,392,102,104],
            msg: '在这里领了一个红包'
        },
        {
            src : 'redpocket/2.jpg',
            clip: [60.5,483,234,66],
            msg: '然后跳到了红包界面，点这里领了红包'
        },
        {
            src : 'redpocket/3.jpg',
            clip: [264.5,283 ,81,32],
            msg: '点白色框起来的地方'
        },
        {
            src : 'redpocket/4.jpg',
            clip: [44.5,25,294,46],
            msg: '然后在这里写你要买的东西，比如你要买毛巾，就写“毛巾”进去，在这里面搜到的商品就可以用红包，其他地方的就不行'
        },
    ]],
    [12, [
        {
            src : 'home.jpg',
            clip: [7.5,28,74,47],
            msg: '点右上角那个“签到”就可以啦'
        }
    ]],
    [21, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的淘宝”"
        },
        {
            src: 'individual.jpg',
            clip: [152.5,233,58,54],
            msg: "然后点“待收货”"
        },
    ]],
    [22, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的淘宝”"
        },
        {
            src: 'individual.jpg',
            clip: [293.5,208,52,26],
            msg: "点击“全部”"
        },
        {
            src: 'order/all.jpg',
            clip: [13.5,115,333,622],
            msg: "在这里找你买过的东西"
        },
        {
            src: 'order/all.jpg',
            clip: [37.5,31,216,34],
            msg: "很难找的话点这里打字搜索关键词就好，比如你想看你买过的胡椒机，就写“胡椒”进去然后点“搜索”"
        }
    ]],
    [31, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的淘宝”"
        },
        {
            src: 'individual.jpg',
            clip: [194.5,102,56,55],
            msg: "点击“足迹”"
        },
        {
            src: 'history.jpg',
            clip: [7.5,107,333,622],
            msg: "在这里就有你所有看过的东西了"
        }
    ]],
    [41, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的淘宝”"
        },
        {
            src: 'individual.jpg',
            clip: [11.5,400,75,75],
            msg: "点击“领淘金币”"
        },
        {
            src: 'coin.jpg',
            clip: [127.5,258,102,59],
            msg: "点这里就可以领取了"
        }
    ]],
    // 京东部分
    [51, [{
        src: 'detail.jpg',
        clip: '',
        msg: ""
    }, {
        src: 'detail.jpg',
        // clip: 'ctx.clearRect(0,0,100,100)',
        clip: [40,712,50,50],
        msg: "点击这里哦"
    }, {
        src: 'assist/1.jpg',
        clip: [114.5,242,122,40],
        msg: "点“发送链接”之后就可以跟他聊天了"
    }, {
        src: 'home.jpg',
        clip: [288.5,711,57,46],
        msg: "或者在首页点“我的”"
    }, {
        src: 'individual.jpg',
        clip: [264.5,233,70,65],
        msg: "点击“我的订单”"
    }, {
        src: 'order/all.jpg',
        clip: [11.5,195,326,29],
        msg: "找到你要的商品，然后点上面这条写了店名的地方"
    }, {
        src: 'shop.jpg',
        clip: [284.5,714,54,40],
        msg: "点“联系客服”之后就可以跟他聊天了"
    }
    ]],
    [52, [{
        src: 'assist/1.jpg',
        clip: [308.5,714,36,31],
        msg: '点那个＋号'
    },
    {
        src: 'assist/2.jpg',
        clip: [26.5,601,166,78],
        msg: '要拍照就按“拍摄”，要录像就按“短视频”'
    }]],
    [53, [{
        src : 'msg.jpg',
        clip: [148.5,708,58,47],
        msg: '点下面这个"消息"然后就像微信一样找客服的聊天就行了'
    }]],
    [61, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的”"
        },
        {
            src: 'individual.jpg',
            clip: [83.5,230,58,54],
            msg: "然后点“待收货”"
        },
    ]],
    [62, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的”"
        },
        {
            src: 'individual.jpg',
            clip: [264.5,233,70,65],
            msg: "点击“我的订单”"
        },
        {
            src: 'order/all.jpg',
            clip: [13.5,115,333,622],
            msg: "在这里找你买过的东西"
        },
        {
            src: 'order/all.jpg',
            clip: [37.5,31,216,34],
            msg: "很难找的话点这里打字搜索关键词就好，比如你想看你买过的胡椒机，就写“胡椒”进去然后点“搜索”"
        }
    ]],
    [71, [
        {
            src: 'home.jpg',
            clip: [288.5,711,57,46],
            msg: "在首页点“我的”"
        },
        {
            src: 'individual.jpg',
            clip: [237.5,189,99,30],
            msg: "点击“浏览记录”"
        },
        {
            src: 'history.jpg',
            clip: [7.5,107,333,622],
            msg: "在这里就有你所有看过的东西了"
        }
    ]],
])

export function getImgList(id) {
    return imgList.get(Number(id))
}