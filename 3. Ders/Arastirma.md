### `let guncel_tarih = new Date(Date.now())` şeklinde tarih okunduğunda `guncel_tarih.getMonth()` ile neden ay bir eksik değerde okunuyor.

- `get.Month()` metodu 0-11 arasında değerler döndürür.  [MDN Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth)
---
---

### SET (sadece benzersiz değerler alabilen bir değerler dizisi) nerede kullanılır? neden ihtiyaç duyulmuştur?
- ES6 ile birlikte gelen SET yapısı kümelerin benzersizlik özelliğini otomatik olarak kontrol ettiğinden kodun hataya daha az açık olmasını sağlar
- Bazı küme işlemleri diziler ve nesnelerle oldukça karmaşık ve yavaş olabilir. SET yapısıyla daha hızlı ve daha basit olarak bu işlemler gerçekleştirilir.
- Aynı zamanda diziler ve setler kolaylıkla birbirine dönüştürülebilirler.