function oddishOrEvenish(num) {
    let Numb = num.toString()
    let arr = Numb.split("")
    let intArr = []
    let toplam = 0
    for (let i = 0; i < arr.length; i++) {
        intArr.push(parseInt(arr[i]))
    }
    for (let i = 0; i < intArr.length; i++) {
        toplam += intArr[i]
    }
    return toplam % 2 == 0 ? "Even" : "Odd"
}


console.log(oddishOrEvenish(43))
console.log(oddishOrEvenish(373))
console.log(oddishOrEvenish(4433))
