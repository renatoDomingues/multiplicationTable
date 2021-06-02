
const multiplicationController = require('./multiplicationTable')
const sinon = require('sinon')

describe('multiplicationTable controller', () => {

    it('list', () => {
        const number = []
        for(let i=1; i<=100; i++){
            number.push(i)
        }
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('multiplicationTable/list', { number })
        multiplicationController.list({}, res)

    })
    it('calculates the multiplicationTable', () => {

        const multiplicationTables = []
        //const num = req.params.num
        const num = 10
        for(let i=0; i<=100; i++) {
            multiplicationTables.push({
                num,
                i,
                result: num*i
            })
        }
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('multiplicationTable/multiplicationTable', {
            //num: req.params.num,
            num,
            multiplicationTables
        })
        multiplicationController.multiplicationTable({ params: { num }}, res)

    })
})