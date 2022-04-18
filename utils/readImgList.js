import fs from 'fs'
// import path from 'path'
// const imgRoot = path.join(__dirname, '..','src','assets') // 图片在assets文件夹下
const imgRoot = '../src/assets'

export function readImgList(id, dir = imgRoot, imgList = []) {
    // if(typeof(id) !== 'number') id = Number(id)
    const imgs = fs.readdirSync(dir)[id]
    // return imgs
}

