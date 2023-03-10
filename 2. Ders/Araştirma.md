## Bir dizinin kopyası üretilerek bir değişkene nasıl atanır?
- Diziler birer objedir. Bu yüzden dizi, yeni bir diziye atandığında iki dizi de aynı referansı gösterir.
```JavaScript
let dizi = [1,2,3]
let yeniDizi = dizi
yeniDizi.add(4)
console.log(dizi) // output: [1,2,3,4]
// aynı referansa sahip olduklarından yeniDizi'ye ekleme yapılmasına rağmen bu değişiklik dizi'de de gözlenir.
```
- .slice() metodu ile parametre olarak başlangıç ve bitiş indekslerini verdiğimizde belirlenen aralıkta dizinin orjinalini değiştirmeden yeni bir değişkende saklayabiliriz.
```JavaScript
let dizi = [1,2,3]
let yenidizi = dizi.slice(0,2)  
yeniDizi.add(4)
console.log(dizi) //output: [1,2,3]
console.log(yeniDizi)  //output: [1,2,3,4]
```