class password {
    strong() {
      let big = 'ABCDEFGHIJKLMNIOPQRSTUVWXYZ'
      let small = 'abcdefghijklmnopqrstuvwxyz'
      let num = '123456789'
      let special = '%&*+$/*'
      let str = ''
      for (let i = 0; i < 8; i += 4) {
        str += big[Math.floor(Math.random() * big.length)]
        str += small[Math.floor(Math.random() * small.length)]
        str += num[Math.floor(Math.random() * num.length)]
        str += special[Math.floor(Math.random() * special.length)]
      }
      return str
    }
    weak() {
      let small = 'abcdefghijklmnopqrstuvwxyz'
      let num = '123456789'
      let wk = ''
      for (let i = 0; i < 8; i += 2) {
        wk += small[Math.floor(Math.random() * small.length)]
        wk += num[Math.floor(Math.random() * num.length)]
      }
      return wk
    }
    funny() {
      let f = ['password', 'admin', '123456', '000000', 'welcome','admin123']
      let idx = Math.floor(Math.random() * f.length)
      f = f[idx]
      return f
    }
  
  }
  let p = new password()
  let strong = document.getElementById('strong')
  let weak = document.getElementById('weak')
  let funny = document.getElementById('funny')
  let pass = document.getElementById('password')
  strong.onclick = () => {
    let x = p.strong()
    pass.innerHTML = x
  }
  weak.onclick = () => {
    let x = p.weak()
    pass.innerHTML = x
  }
  funny.onclick = () => {
    let x = p.funny()
    pass.innerHTML = x
  }
  let copy = document.getElementById('copy')
  copy.onclick = () => {
    let c = pass.innerHTML
    navigator.clipboard.writeText(c)
    alert('You have copied the password : ' + c)
  }