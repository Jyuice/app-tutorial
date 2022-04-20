const query = `/resolve?app=tb&id=`

export const tb = [
    {
      label: '我想找客服',
      children: [
        {
          label: '我去哪里可以找到客服？',
          target: query + '01'
        },
        {
          label: '客服叫我拍照、录像怎么办？',
          target: query + '02'
        },
        {
          label: '我和客服的聊天记录怎么找？',
          target: query + '03'
        },
      ],
    },
    {
      label: '我打开淘宝的时候领了一个红包',
      children: [
        {
          label: '我怎么才能用这个红包？',
          target: query + '11'
        },
        {
          label: '我不小心退出了，怎么找回红包的界面？',
          target: query + '12'
        },
      ],
    },
    {
      label: '我想查一下我买的东西',
      children: [
        {
          label: '我买的东西什么时候到？',
          target: query + '21'
        },
        {
          label: '我想看我以前买的东西',
          target: query + '22'
        },
      ],
    },
    {
        label: "我忘记收藏了，怎么找看过的商品？",
        target: query + '31'
    },
    {
        label: "我忘记领淘金币了怎么办？",
        target: query + '41'
    }
  ]