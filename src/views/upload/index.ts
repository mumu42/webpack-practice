import '../../common/css/base.scss'
import './index.scss'
import {$, click, show} from '../../common/ts/base.ts'
import UploadImg from '../../common/ts/upload.ts'
import {post} from '../../common/ts/request.ts'

let handleType: string = '';

(async () => {
  post('/getUploadAll').then(res => {
    // console.log(res.data[0], 'post')
    const result: any = res
    $('#get').src = result.data[0].path
  })
  let imgs: ImgData[] = []
  let type:string = ''
  $('#upload').onchange = (e) => {
    // 添加图片
    const event = e || window.event
    const fileDom = event.target
    const fileName = fileDom.files[0]
    const fileRead = new FileReader()
    console.log(fileName, 'file file file')
    fileRead.readAsDataURL(fileName)
    fileRead.onload = () => {
      imgs.push({
        isUse: true,
        name: fileName.name,
        url: fileRead.result,
        file: fileName
      })
      $('.images-box').innerHTML += `<p class="upload-img" style="background: url(${fileRead.result}) center center no-repeat; background-size: cover;"><span></span><i flag="${imgs.length - 1}">提交</i><i flag="${imgs.length - 1}">删除</i></p>`
    }
  }

  click($('.images-box'), (e) => {
    // 删除图片
    const el = e.target
    if (el.nodeName === 'I' || el.nodeName === 'i') {
      if (el.innerHTML === '删除') {
        el.parentNode.parentNode.removeChild(el.parentNode)
        imgs[+el.getAttribute('flag')] = {
          isUse: false,
          name: '',
          url: '',
          file: ''
        }
        $('#upload').value = ''
      } else {
        const index: number = +el.getAttribute('flag')
        const obj: ImgData = imgs[index]
        // dialog(obj)
        upload(obj)
      }      
    }
  })

  let doms: any[] = [$('.clip-box'), $('.top-left'), $('.top'), $('.top-right'), $('.left'), $('.right'), $('.down-left'), $('.down'), $('.down-right')]

  doms.map(ele => {
    ele.onmousedown = (e) => {
      const event = e || window.event
      const target: Element = event.target
      let name: string = target.className
      if (name.indexOf('-') !== -1) {
        name = name.split('-')[0] + name.split('-')[1].substr(0, 1).toUpperCase() + name.split('-')[1].substr(1)
      }
      type = name
      handleType = name
    }
    ele.onmouseup = () => {
      type = ''
      handleType = ''
    }
    ele.onmouseout = () => {
      type = ''
      handleType = ''
    }
  })

  let distance: Distance = {
    left: 0,
    top: 0
  }

  window.onmousedown = (e) => {
    if (handleType === '') {
      return
    }
    distance = {
      left: e.clientX,
      top: e.clientY
    }
  }

  window.onmousemove = (e) => {
    if (handleType === '') {
      return
    }
    const domContent: any = $('.content')
    const domImg: any = $('#cropimg1')
    const clipDom: any = $('.clip-box')
    const minT: number = domContent.offsetTop
    const minL: number = domContent.offsetLeft
    const obj: Range = {
      minTop: minT,
      minLeft: minL,
      maxTop: minT + domImg.offsetHeight,
      maxLeft: minL + domImg.offsetWidth
    }

    const data: Distance = {
      left: e.clientX - distance.left,
      top: e.clientY - distance.top
    }

    let width: number = clipDom.offsetWidth + data.left
    let height: number = clipDom.offsetHeight + data.top
    width = width > domImg.offsetWidth ? domImg.offsetWidth : width
    height = height > domImg.offsetHeight ? domImg.offsetHeight : height
    const size: Size = {
      width,
      height
    }

    // console.log(e.clientX, minL, 'x')
    // console.log(e.clientY, minT, 'y')

    if (type === 'clipBox') {
      // 移动
      mouseEvent[type](data)
    } else if (type !== '') {
      // 改变大小
      mouseEvent[type](size)
    }
  }

  window.onmouseup = () => {
    type = ''
    handleType = ''
  }

})()

interface ImgData {
  isUse: Boolean,
  name: String,
  url: any,
  file: any
}

interface Range {
  minTop: number,
  minLeft: number,
  maxTop: number,
  maxLeft: number
}

interface Distance {
  left: number,
  top: number
}

interface Size {
  width: number,
  height: number
}

const mouseEvent = {
  dom: $('.clip-box'),
  clipBox: (data: Distance) => {
    setDistance(data)
  },
  top: (params: Size) => {
    setSize(params, 'top')
  },
  topLeft: (params: Size) => {
    setSize(params, 'topLeft')
  },
  topRight: (params: Size) => {
    setSize(params, 'topRight')
  },
  left: (params: Size) => {
    setSize(params, 'left')
  },
  right: (params: Size) => {
    setSize(params, 'right')
  },
  down: (params: Size) => {
    setSize(params, 'down')
  },
  downLeft: (params: Size) => {
    setSize(params, 'downLeft')
  },
  downRight: (params: Size) => {
    setSize(params, 'downRight')
  }
}

function dialog (imgs: ImgData) {
  $('#cropimg1').src = `${imgs.url}`
  $('#cropimg2').src = `${imgs.url}`
  // $('#cropimg3').src = `${imgs.url}`
  // $('#cropimg4').src = `${imgs.url}`
  show($('.dialog'))
}

function upload (imgs: ImgData) {
  UploadImg(imgs.file, '/upload').then(rs => {
    console.log(rs)
  }).catch(err => {
    console.log(err, 'err')
  })
}

function setDistance (data: Distance) {
  const boxDistance: Distance = data
  const x: number = boxDistance.left 
  const y: number = boxDistance.top

  const domImg: any = $('#cropimg1')
  const height: number = domImg.offsetHeight - mouseEvent.dom.offsetHeight
  const width: number = domImg.offsetWidth - mouseEvent.dom.offsetWidth

  if (x <= width && y <= height) {
    x > 0 && (mouseEvent.dom.style.left = `${x}px`)
    y > 0 && (mouseEvent.dom.style.top = `${y}px`)
  }

  setClip()
}

function setSize (params: Size, type: string) {
  if (!handleType) {
    return
  }
  let dom: any = mouseEvent.dom
  let size: Size = {
    width: params.width,
    height: params.height
  }

  console.log(params)

  if (type === 'left' || type === 'right') {
    size = {
      width: size.width,
      height: dom.offsetHeight
    }
    // type === 'left' && (distance = {
    //   left: distance.left + x,
    //   top: distance.top
    // })
  } else if (type === 'top' || type === 'down') {
    size = {
      width: dom.offsetWidth,
      height: size.height
    }
    // distance = {
    //   left: distance.left,
    //   top: distance.top + y
    // }
  }

  // dom.style.left = `${distance.left}px`
  // dom.style.top = `${distance.top}px`
  dom.style.width = `${size.width}px`
  dom.style.height = `${size.height}px`
  setClip()
}

function setClip () {
  const clipDom: any = $('#cropimg2')
  const tClip: number = mouseEvent.dom.offsetTop
  const lClip: number = mouseEvent.dom.offsetLeft
  const bClip: number = mouseEvent.dom.offsetHeight + tClip
  const rClip: number = mouseEvent.dom.offsetWidth + lClip
  clipDom.style.clip = `rect(${tClip}px, ${rClip}px, ${bClip}px, ${lClip}px)`
}