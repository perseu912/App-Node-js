sys = require('./tools')
sys.time.init()
sys.log('ip '+sys.myIp)
sys.log('memory free '+sys.memFree())
sys.log('data '+sys.datta())
sys.log('time '+sys.time.end()+'ms')