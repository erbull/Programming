// person adlı class
class person{
    constructor(objName){   //kurucu fonksiyonumuz. Yani bu klasstan bir object oluşturulduğında çağırmaya gerek kalmadan kendiliğinden çalışacak fonksiyon.
                                //İki parametre alıyor. per ve target. Per class ımızın adını, target ise sonucun yazdırılacağı kutuyu -div- temsil ediyor.
        this.objName = objName;  //gelen objName parametresini this.objName adında bir class property oluşturarak ona aktardık ki scop dışında da kullanabilelim.
        eval("c_" + objName).innerText = objName + " adında bir " + this.constructor.name + " nesnesi oluşturuldu. ";
        eval("c_" + objName).style.backgroundColor = "blue";
    }

    soyadi; //property. Property'ler, oluşacak objemizin elemanları. Bunlara her türlü değeri atayabiliriz.
    okuma = 0; //_adı property'sinden kaç kez değer okunduğunu tutacak
    yazma = 0; //_adı property'sine kaç kez değer yazıldığını (atandığını) tutacak

    #_adi;  //property, private olarak tanımlandı. Bu sayede class dışından ulaşımın sadece delege üzerinden yapılabilecek ve kontrolümüzde olacak

    set adi(newname){   //private olarak tanımlanmış _adı değişkenine değer atamak için tanımladığımız temsilci. Değer atarken bu temsilciyi -delege- kullanacağız.
                        //Bu sayede _adı dğişkenine değer atandığında veya değiştirildiğinde yapılmasını istediğimiz özel işlemler tanımlayabiliriz.
        this.yazma++;
        eval("w_" + this.objName).innerText = this.objName + " nesnesine " + this.yazma + ". kez bir değer atandı: " + newname;
        eval("w_" + this.objName).style.backgroundColor = "blue";
        this._adi = newname;
    }

    get adi(){   // yine private olarak tanımlı _adı değişkeninden değer okumak için kullandığımız get fonksiyonu. Bu sayede birisi bu değeri okumak istediğinde özel işlemler tanımlayabiliriz.
        this.okuma++;
        eval("r_" + this.objName).innerText = this.objName + "  nesnesinden  " + this.okuma + ". kez bir değer okundu: " + this._adi;
        eval("r_" + this.objName).style.backgroundColor = "blue";
    }
}

//person class'ından türetilmiş (miras alan) erkek adlı class
class erkek extends person{

}

//person class'ından türetilmiş (miras alan) kadın adlı class
class kadin extends person{

} 

//Şimdi sayfa üzerindeki kutalara tıklayarak bazı class işlemleri gerçekleştirerek sonuçları görebiliriz.
var c_per = document.querySelector("#c_per");
var c_er = document.querySelector("#c_er");
var c_ka = document.querySelector("#c_ka");
var w_per = document.querySelector("#w_per");
var w_er = document.querySelector("#w_er");
var w_ka = document.querySelector("#w_ka");
var r_per = document.querySelector("#r_per");
var r_er = document.querySelector("#r_er");
var r_ka = document.querySelector("#r_ka");

//per adında bir person nesnesi oluşturuyoruz. Class içerisindeki constructor() metodu çağırmadığımız halde otomatik olarak çalışır.
var per = null;
c_per.addEventListener("click", function(){
    if (per == null) per = new person("per");
})
        
//ikinci kutuya tıkladığımızda person class ı içerisinde tanımladığımız _adi değişkenine (property) değer atıyoruz.
//Fakat değer get ve set fonksiyonları ile tanımladığımız delegeler üzerinden yapıldı. 
//Kutuya her tıkladığımızda yeniden değer atıyoruz ve delege kutu içerisine olayı yazarak bize bildiriyor.
w_per.addEventListener("click", function(){
    if (per == null) alert("Henüz bir nesne oluşturmadınız.");
    else per.adi = "Bülent";
})

//üçüncü kutu, yukarıda tanımlı işlemi bu defa get fonksiyonunu kullanarak yapıyor. Yani _adi değişkeninden değer okurken çalışıyor.
r_per.addEventListener("click", function(){
    let a;
    if (per == null) alert("Henüz bir nesne oluşturmadınız.");
    else a = per.adi;
})

//Aynı işlemleri, person class'ından miras alan erkek ve kadın klasslarından oluşturduğumuz nesneler için deneyelim.
//Dikkat ederseniz bu classlar içerisinde hiç bir özellik veya metod tanımlamadığımız halde person class ında tanımladığımız metodlar çalışıyor.
var er = null;
c_er.addEventListener("click", function(){
    if (er == null) er = new erkek("er");
})

w_er.addEventListener("click", function(){
    if (er == null) alert("Henüz bir nesne oluşturmadınız.");
    else er.adi = "Erdoğan";
})

r_er.addEventListener("click", function(){
    let a;
    if (er == null) alert("Henüz bir nesne oluşturmadınız.");
    else a = er.adi;
})

//Bir de kadın class'ından bir nesne oluşturmayı deneyelim.
var ka = null;
c_ka.addEventListener("click", function(){
    if (ka == null) ka = new kadin("ka");
})

w_ka.addEventListener("click", function(){
    if (ka == null) alert("Henüz bir nesne oluşturmadınız.");
    else ka.adi = "Nida";
})

r_ka.addEventListener("click", function(){
    let a;
    if (ka == null) alert("Henüz bir nesne oluşturmadınız.");
    else a = ka.adi;
})