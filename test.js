sys = require('./tools')

console.log(sys)
sys.time.init()
sys.log('ip '+sys.myIp)
sys.log('memory free '+sys.memFree()+'%')
sys.log('data '+sys.datta())
go = sys.url('https://google.com')
.then(res => sys.log(`ping ${res.ping}ms ${res.status}`))
//sys.log('ping google '+go.ping+'ms')
//fsys.log('statuscode google'+go.status)

sys.log('time '+sys.time.end()+'ms')
