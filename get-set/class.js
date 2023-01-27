// person adlı class
class person{
    constructor(per, target){   //kurucu fonksiyonumuz. Yani bu klasstan bir object oluşturulduğında çağırmaya gerek kalmadan kendiliğinden çalışacak fonksiyon.
                                //İki parametre alıyor. per ve target. Per class ımızın adını, target ise sonucun yazdırılacağı kutuyu -div- temsil ediyor.
        target.innerText = "Bir " + per + " nesnesi oluşturuldu. ";
    }

    #_adi;  //property, private olarak tanımlandı.
    soyadi; //property. Properties, oluşacak objemizin elemanları. Bunlara her türlü değeri atayabiliriz.

    set adi(newname){   //private olarak tanımlanmış _adı değişkenine değer atamak için tanımladığımız temsilci. Değer atarken bu temsilciyi -delege- kullanacağız.
                        //Bu sayede _adı dğişkenine değer atandığında veya değiştirildiğinde yapılmasını istediğimiz özel işlemler tanımlayabiliriz.
        wr.innerText = "Oluşturulan person nesnesine bir değer atandı: " + newname;
        this._adi = newname;
    }

    get adi(){   // yine private olarak tanımlı _adı değişkeninden değer okumak için kullandığımız get fonksiyonu. Bu sayede birisi bu değeri okumak istediğinde özel işlemler tanımlayabiliriz.
        rd.innerText = " Oluşturulan person nesnesinden bir değer okundu: " + this._adi;
    }
}

//person class'ından türetilmiş (miras alan) erkek adlı class
class erkek extends person{
    constructor(per, target){
        super(per, target);
    }
}

//person class'ından türetilmiş (miras alan) kadın adlı class
class kadin extends person{
    constructor(per, target){
        super(per, target);
    }
} 

//Şimdi sayfa üzerindeki kutalara tıklayarak bazı class işlemleri gerçekleştirerek sonuçları görebiliriz.
var cr = document.querySelector("#cr");
var wr = document.querySelector("#wr");
var rd = document.querySelector("#rd");
var mr = document.querySelector("#mr");
var ms = document.querySelector("#ms");

//ilk kutuya tıkladığımızda personn clasını kullanaral bir p objesi oluşturduk. Objeyi oluşturduğumuzda person class ı içerisindeki constructor() -kurucu- fonksiyonunun 
//biz çağırmadığımız halde otomatik olarak çalıştırıldığını ve kutu içerisine bir şeyler yazdığını görüyoruz.
var p;
cr.addEventListener("click", function(){
    p = new person("person", cr)
})
        
//ikinci kutuya tıkladığımızda person class ı içerisinde tanımladığımız _adi değişkenine (property) değer atıyoruz. Ama dikkat edersenia değer atamasını
//set fonksiyonu ile tanımladığımız adi delegesi (temsilcisi üzerinden yaptık.) Bu sayede değişkene bir değer atadığımızda scop içerisindeki komutun çalışmasını ve 2. kutuya 
//"değer atandı." yazılmasını sağladık.
wr.addEventListener("click", function(){
    p.adi = "Erdoğan";
})

//üçüncü kutu, yukarıda tanımlı işlemi bu defa get fonksiyonunu kullanarak yapıyor. Yani _adi değişkeninden değer okurken çalışıyor.
rd.addEventListener("click", function(){
    let a = p.adi;
})

//4.kutuya tıkladığımızda person classından türettiğimizerkek classını kullanarak mister objesini oluşturduk. Dikkat ederseniz 
//erkek classı içerisinde hiç bir tanımlama yapmadığımız halde, person nesnesi içerisindeki kurucu fonksiyon çalıştı. (miras alma). Yani person class'ının tüm özelliklerine sahip.
mr.addEventListener("click", function(){
    let mister = new erkek("erkek", mr);
})

//5. kutuda yine person class'ından türettiğimiz kadın class'ından üretilen miss objesi.
ms.addEventListener("click", function(){
    let miss = new kadin("kadın", ms);
})  