let metin = "sfgsdf"
console.log(typeof metin)  // output: string

let sayi = 123
console.log(typeof sayi)  //output: number

let buyuk_sayi = 1232546344674658747684368732572652464352345234523452345234
console.log(typeof buyuk_sayi)  //output: number

let x = BigInt("123456789012345678901234567890");
console.log(typeof x)  //output: bigint

let boolean = true
console.log(typeof boolean)  // output: boolean

let nesne = {
                adi:"H", 
                soyadi:"G",
                dene: function(a)
                        {
                            return a+5
                        }
            }
console.log(typeof nesne)  // output: object

let dizi = ["Ali", "Veli", "Zeki"]
console.log(typeof dizi)  // output: object

const tarih = new Date("2023-03-02")
console.log(typeof tarih)   // output: object