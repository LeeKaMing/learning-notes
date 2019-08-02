// NOTE: [].xxx.call(arguments) 方法可以将 arguments 这个伪数组像真数组一样调用数组方法，比如 [].shift.call(arguments)、[].slice.call(arguments) -> 返回真数组
// NOTE: apply 和 call 都可以传入伪数组

let event = {
  list: {},
  on(key, fn) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  },
  emit() {
    let key = [].shift.call(arguments),
      fns = this.list[key]

    if (!fns || fns.length === 0) {
      return false
    }
    fns.forEach(fn => {
      fn.apply(this, arguments)
    })
  },
  remove(key, fn) {
    // 这回我们加入了取消订阅的方法
    let fns = this.list[key]
    // 如果缓存列表中没有函数，返回 false
    if (!fns) return false
    // 如果没有传对应函数的话
    // 就会将 key 值对应缓存列表中的函数都清空掉
    if (!fn) {
      fns && (fns.length = 0)
    } else {
      // 遍历缓存列表，看看传入的 fn 与哪个函数相同
      // 如果相同就直接从缓存列表中删掉即可
      fns.forEach((cb, i) => {
        if (cb === fn) {
          fns.splice(i, 1)
        }
      })
    }
  }
}

const cat = data => {
  console.log(data + '来一起喵喵喵')
}
const dog = data => {
  console.log(data + '来一起汪汪汪')
}

event.on('pet', data => {
  console.log('接收数据', data) // 肥猫
})
event.on('pet', cat)
event.on('pet', dog)
// 取消 dog 方法的订阅
event.remove('pet', dog)
// 发布
event.emit('pet', '肥猫')
/*
  接收数据
  '肥猫'
  一起喵喵喵
*/

/**
 * 创建一个对象(缓存列表)
 * on方法用来把回调函数 fn 都加到缓存列表中
 * emit 方法取到 arguments 里第一个当做 key，根据 key 值去执行对应缓存列表中的函数
 * remove 方法可以根据 key 值取消订阅
 */
