## ECMA (ES)
### (European Computer Manufacturers Association)
### (Avrupa Bilgisayar Üreticileri Birliği)
- Bilgi ve iletişim teknolojileri alanında standartlar yayınlayan bir dernek
---
---
## ECMASCRIPT
- Programlama dilleri için bir standart
- JavaScript bu standartı esas alan bir betik dilidir.
---
---
## TYPESCRIPT
- JavaScript NYP paradigmasına çok uygun değil
- Bundan kaynaklı sorunları gidermek adına TypeScript oluşturulmuş
- JavaScript yorumlayıcı, TypeScript ise derleyici bir dil
- Yorumlayıcı dil, başka programlar tarafından satır okunur.
- Derleyici dil, kodu direkt makine diline çevirir
---
---
## USE STRICT
- Yazılan kodun JavaScript standartlarının dışına çıkmasını önler.
- Komut dosyasına veya fonksiyon başına `"use strict";` yazılarak kullanılabilir.
```JavaScript
"use strict";
x = 5  // X bildirilmediği için hata alırız

var x = 5 // x bildirildiği için hata vermez
```
---
---
## HOISTING (Kaldırma, Yukarı Çekme)
- JavaScript'te bir değişken değer tanımlandıktan sonra bildirilebilir. Yani ilk satırda gibi okunabilir.
```JavaScript
x = 5  //değer tanımlandı
console.log(x)

var x // x değişkeni bildirildi, ilk satırdaymış gibi okunur
```
---
---
## JAVASCRIPT MOTORLARI
- V8 (Google)
- SpiderMonkey (Firefox)
- JavaScriptCore (Safari)
- Chakra (Edge)

JavaScript motorları genellikle web tarayıcısı satan firmalar tarafından geliştirilir.