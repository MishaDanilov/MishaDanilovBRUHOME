mocha.setup('bdd')
let assert = chai.assert

//1
let strLength = str=>str.split(' ').map(elem=>elem+' '+elem.length)
describe("strLength", function() {
    it(`Given: “hello worldd” 
    Return: [“hello 5”, “worldd 6”];`, function() {
        assert.equal(strLength('hello worldd'), ["hello 5", "worldd 6"].toString())
    })
})
//2
function Convert(Str){
    let obj = {}
    let count = 0
    let convertStr = ''
    let str = Str.toLowerCase()
    let set = new Set(str.toLowerCase())
    for (const iterator of set) {
        obj[iterator] = count
        count++
    }
    for (const strKey in str) {
        for (const objKey in obj) {
            if(str[strKey]==objKey) convertStr+=obj[objKey]+'.'
        }
    }
    
    return convertStr.substring(0, convertStr.length - 1)
}

describe("Convert", function() {
    it(`Given: “hello” 
    Return: "0.1.2.2.3"`, function() {
        assert.equal(Convert('hello'), '0.1.2.2.3');
    })
    it(`Given: heLlo 
    Return: "0.1.2.2.3"`, function() {
        assert.equal(Convert('heLlo'), '0.1.2.2.3');
    })
    it(`Given: Hippopotomonstrosesquippedaliophobia 
    Return: "0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13"`, function() {
        assert.equal(Convert('Hippopotomonstrosesquippedaliophobia'), '0.1.2.2.3.2.3.4.3.5.3.6.7.4.8.3.7.9.7.10.11.1.2.2.9.12.13.14.1.3.2.0.3.15.1.13');
    })
})
//3
function BracketDuplicates(str){
    if((typeof str)!='string') return new Error('Please enter a valid string')
    let l = ''
    let count = 1
    let strArr = str.split('')
    let flag = false
    for (const s in strArr) {
        if(strArr[s]==l) count++
        else {
            count = 1
            if(flag){
                strArr[s-1]= strArr[s-1]+']'
                flag = false
            }
        }
        l = strArr[s]
        if(count==3){
            strArr[s]= '['+strArr[s]
            flag = true
        }
    }
    
    if(flag) return strArr.join('')+']'
    else return strArr.join('')
}

describe("BracketDuplicates", function() {
    it(`Given: "aaaabbcdefffffffg" 
    Return: "aa[aa]bbcdeff[fffff]g"`, function() {
        assert.equal(BracketDuplicates('aaaabbcdefffffffg'), 'aa[aa]bbcdeff[fffff]g');
    })
    it(`Given: "boopdedoop" 
    Return: "boopdedoop"`, function() {
        assert.equal(BracketDuplicates('boopdedoop'), 'boopdedoop');
    })
    it(`Given: "helloookat" 
    Return: "helloo[o]kat"`, function() {
        assert.equal(BracketDuplicates('helloookat'), 'helloo[o]kat');
    })
})

//4
console.log(1 - '0' + 2)//3 если есть - то это уже не конкатинация 
console.log(1 - '-0' + 2)//3 если есть - то это уже не конкатинация 
console.log(1 - '-0-' + 'NaN')
console.log('b' + [NaN + 'ba', 'CC'] - {})//value - {} - NaN
console.log([] + (()=>{}))//[] ЭТО ""
console.log([] + (()=>({})))//[] ЭТО ""
console.log([] + (()=>({}))())//[] ЭТО ""
console.log([] + (() => new Object(123))())//new Object() возвращает объект такого типа, который соответствует переданному значению; [] ЭТО ""
console.log({} + (() => new Object(123))())//new Object() возвращает объект такого типа, который соответствует переданному значению; {} ЭТО "[object Object]"
console.log((() => new Object(123))() + {})
console.log(({}).valueOf() + 1)//Если объект не имеет примитивного значения, valueOf возвращает сам объект
console.log({} + 2)//{} ЭТО "[object Object]"
console.log(typeof ({}).valueOf() + 2)//Если объект не имеет примитивного значения, valueOf возвращает сам объект; typeof возвращает строку, указывающую тип операнда.
console.log(+{})//NaN      +value преобразует в число
console.log(+{}+[])//[] ЭТО ""    +value преобразует в число
console.log(+[])//+value преобразует в число
console.log(+[]+{})
console.log(+[10, 1]+{})//+value преобразует в число если возможно иначен Nan
console.log({} + [10])
// 3
// 3
// NaNNaN
// NaN
// ()=>{}
// ()=>({})
// [object Object]
// 123
// [object Object]123
// 123[object Object]
// [object Object]1
// [object Object]2
// object2
// NaN
// NaN
// 0
// 0[object Object]
// NaN[object Object]
// [object Object]10
console.log('_____________________________________')
console.log(0 == null)//false при == false возвращается как значение по умолчанию!
console.log(null == undefined)//true Если x равно null, а y равно undefined - вернуть true.
console.log(1 == {})//false {}.valueOf() = error; "1"== err = false
console.log({} == 1)//false err== "1" = false
console.log(({}) == 1)//false {}=="1" = false
console.log(({toString: () => '12'}) == 12)//true ({toString: () => '12'}).toString() = 12; 12 == 12 = true
mocha.run();
