function Login(){
    var done=0;
    var username=document.login.username.value;
    username=username.toLowerCase();
    var password=document.login.password.value;
    password=password.toLowerCase();
    if (username=="quecy" && password=="şifre") { window.location="kutuphane.html"; done=1; }
    if (done==0) { alert("Belirtilen bilgilere sahip bir kütüphane kullanıcısı bulunamadı."); }
    }