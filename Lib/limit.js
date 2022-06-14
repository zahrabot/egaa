var fs = require('fs')

exports.isLimit = function(sender, isPremium, isCreator, limitCount, _db){
    if (isCreator) return false
    if (isPremium) return false
    let found = false
    for (let i of _db) {
        if (i.id === sender) {
            let limits = i.limit
            if (limits >= limitCount) {
                found = true
                return true
            } else {
                found = true
                return false
            }
        }
    }
    if (found === false) {
        var obj = { id: sender, limit: 0 }
        _db.push(obj)
        fs.writeFileSync('./Database/limit.json', JSON.stringify(_db))
        return false
    }
}
exports.limitAdd = function(sender, _db){
    let found = false
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i
		}
	})
		if (found !== false) {
			_db[found].limit += 1
			fs.writeFileSync('./Database/limit.json', JSON.stringify(_db))
		}
}
exports.getLimit = function(sender, limitCount, _db){
    let found = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            found = i
        }
    })
    if (found !== false) {
        return limitCount - _db[found].limit
    } else {
        return limitCount
    }
}
exports.giveLimit = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].limit -= duit
        fs.writeFileSync('./Database/limit.json', JSON.stringify(_db))
    } else {
        var njt = duit - duit - duit
        var bulim = ({
            id: pemain,
            limit: njt
                })
        _db.push(bulim)
        fs.writeFileSync('./Database/limit.json', JSON.stringify(_db))
    }
}
exports.addBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance += duit
        fs.writeFileSync('./Database/balance.json', JSON.stringify(_db))
    } else {
        var bulin = ({
            id: sender,
            balance: duit
                })
        _db.push(bulin)
        fs.writeFileSync('./Database/balance.json', JSON.stringify(_db))
    }
}
exports.kurangBalance = function(sender, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].balance -= duit
        fs.writeFileSync('./Database/balance.json', JSON.stringify(_db))
    }
}
exports.getBalance = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].balance
    } else {
        return 0
    }
}
exports.isGame = function(sender, isCreator, gcount, _db){
    if (isCreator) {return false;}
    let found = false;
    for (let i of _db){
        if(i.id === sender){
            let limits = i.glimit;
            if (limits >= gcount) {
                found = true;
                return true;
            }else{
                found = true;
                return false;
            }
        }
    }
    if (found === false){
        let obj = {id: sender, glimit:0};
        _db.push(obj);
        fs.writeFileSync('./Database/glimit.json',JSON.stringify(_db));
        return false;
    }
}
exports.gameAdd = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].glimit += 1;
        fs.writeFileSync('./Database/glimit.json',JSON.stringify(_db));
    }
}
exports.givegame = function(pemain, duit, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === pemain) {
            position = i
        }
    })
    if (position !== false) {
        _db[position].glimit -= duit
        fs.writeFileSync('./Database/glimit.json', JSON.stringify(_db))
    } else {
        var njti = duit - duit - duit
        var bulimi = ({
            id: pemain,
            glimit: njti
                })
        _db.push(bulimi)
        fs.writeFileSync('./Database/glimit.json', JSON.stringify(_db))
    }
}
exports.cekGLimit = function(sender, gcount, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if(_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return gcount - _db[position].glimit
    } else {
        return gcount
    }
}
exports.createHit = function(sender, _db){
    var anohoh = { id: sender, hit: 0}
    _db.push(anohoh);
    fs.writeFileSync('./Database/userhit.json',JSON.stringify(_db));''

}
exports.AddHit = function(sender, _db){
    var found = false;
    Object.keys(_db).forEach((i) => {
        if(_db[i].id == sender){
            found = i
        }
    })
    if (found !== false) {
        _db[found].hit += 1;
        fs.writeFileSync('./Database/userhit.json',JSON.stringify(_db));
    }
}
exports.gethitUser = function(sender, _db){
    let position = false
    Object.keys(_db).forEach((i) => {
        if (_db[i].id === sender) {
            position = i
        }
    })
    if (position !== false) {
        return _db[position].hit
    }
}