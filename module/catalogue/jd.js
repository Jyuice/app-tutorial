const query = `/resolve?app=jd&id=`

export const jd = [
    {
      label: '我想找客服',
      children: [
        {
          label: '我去哪里可以找到客服？',
          target: query + '51'
        },
        {
          label: '客服叫我拍照、录像怎么办？',
          target: query + '52'
        },
        {
          label: '我和客服的聊天记录怎么找？',
          target: query + '53'
        },
      ],
    },
    {
      label: '我想查一下我买的东西',
      children: [
        {
          label: '我买的东西什么时候到？',
          target: query + '61'
        },
        {
          label: '我想看我以前买的东西',
          target: query + '62'
        },
      ],
    },
    {
        label: "我忘记收藏了，怎么找看过的商品？",
        target: query + '71'
    }
  ]