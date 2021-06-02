
const list = (req, res) => {

    const number = []
    for(let i=0; i<=100; i++){
        number.push(i)
    }
    res.render('multiplicationTable/list', { number })
}
const multiplicationTable = (req, res) => {

    const multiplicationTables = []
    const num = req.params.num
    for(let i=1; i<=100; i++) {
        multiplicationTables.push({
            num,
            i,
            result: num*i
        })
    }
    res.render('multiplicationTable/multiplicationTable', {
        num: req.params.num,
        multiplicationTables
    })
}

module.exports = {
    list, multiplicationTable
}