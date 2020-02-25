export function $(name: String, type?: String): any {
  let doms
  if (name.indexOf('#') === 0) {
    doms = [document.getElementById(name.substr(1))]
  } else if (name.indexOf('.') === 0) {
    doms = Array.from(document.getElementsByTagName(`*`)).filter(item => item.className.indexOf(name.substr(1)) !== -1)
  } else {
    doms = document.getElementsByTagName(`${name}`)
  }
  if (!doms.length) {
    console.log('找不到目标元素')
    return
  }
  if (type && type === 'all') {
    return doms
  } else {
    return doms[0]
  }
}

export function click(target: any, callBack: Function): void {
  target.onclick = (e) => {
    const event = e || window.event
    callBack && callBack(event)
  }
}

export function show(target: any) {
  if (!target) {
    console.log('目标元素丢了~')
    return
  }
  target.style.display = 'block'
}

export function hide(target: any) {
  if (!target) {
    console.log('目标元素丢了~')
    return
  }
  target.style.display = 'none'
}

export function setStyle(target: any, sty: Object) {
  for (let key in sty) {
    target.style[key] = sty[key]
  }
}