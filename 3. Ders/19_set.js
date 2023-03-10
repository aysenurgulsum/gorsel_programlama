const degerler = new Set([1, 3, 5, 7])
console.log(degerler)

degerler.add(9)
console.log(degerler)

degerler.add(9) // tekrar 9 değerini eklemeyecektir. Program hata da vermedi
    //SET ler sadece benzersiz değerleri saklar.
console.log(degerler)