alter("hello world");
var x = "Lap trinh web";
x= 10;

var y =20;
var z = y + x;
console.log(z);
var n = parseInt("50");
// Ham thong thuong
function add(a, b) {
    return a + b;
}
console.log(add(5, 3));
//Ham an danh
var multiply = function(a, b) {
    return a * b;
}
console.log(multiply(4, 6));
//Ham mũi tên
const sayHi = (name) => {
        console.log("Hi " + name);
}
sayHi("minh");

//Ham goi lại
function process(x, callback) {
    console.log("gia tri: " + x);
    callback();
}

function done() {
    console.log("xong roi ne");
}

process(5, done);

//Ham de quy
function factorial(n) {
        if (n === 0) return 1;
        return n * factorial(n - 1);
}
console.log(factorial(5));

//Cau lenh re nhanh if
let score = 85;;
if(score >= 90){
        console.log("Xwp loai A");
}else if(score >= 75){
        console.log("Xep loai B");
}else{
        console.log("Xep loai C");
}

//Cau lenh re nhanh switch
let day = 3;
switch(day){
        case 1:
                console.log("Chu nhat");
                break;
        case 2:
                console.log("Thu hai");
                break;
        case 3:
                console.log("Thu ba");
                break;
        case 4:
                console.log("Thu tu");
                break;
        default:
                console.log("Khong hop le");
}
//Vong lap for
let fruits1 = ["Apple", "Bnana", "Orange"];
for(let i = 0; i < fruits1.length; i++){
        console.log(fruits1[i]);
}
//Vong lap for..in
let person = {
        name: "Minh",
        age: 25, 
        city: "Hanoi",
        job: "Developer"
};
for(let key in person){
        console.log(key + ": " + person[key]);
}
//Vong lap for..of
let colors = ["Red", "Green", "Blue"];
for(let color of colors){
        console.log(color);
}
//Vong lap while
let i = 1;
while(i <= 5){
        console.log(i);
        i++;// tang gia tri i len 1 sau moi lan lap
}
//Vong lap do..while: thuc hien 1 lan trc khi kiem tra dieu kien
let j = 1;
do{
        console.log(j);
        j++;
}while(j <= 5);
//Xu ly ngoai le try..catch
try{
        let result = 10 / 0;
        if(!isFinite(result)){
                throw new Error("Khong the chia cho 0");
        }
        console.log("Ket qua: " + result);
}catch(error){
        console.log("Loi: " + error.message);
}finally{
        console.log("Ket thuc xu ly ngoai le");
}
//Cau lenh break 
for(let i = 1; i <= 10; i++){
        if(i === 5){
                break; //Thoat khoi vong lap khi i bang 5
        }
        console.log(i);
}
//Cau lenh continue
for(let i = 1; i <= 10; i++){
        if(i % 2 === 0){
                continue; //Bo qua cac so chan
        }
        console.log(i); //In ra cac so le
}
//Cac doi tuong trinh duyet window, document, navigator, location, history
alert("Chao mung ban den voi lap trinh web!");
document.write("<h1>Lap trinh web voi JavaScript</h1>");
console.log("Ten trinh duyet: " + navigator.userAgent);
console.log("URL hien tai: " + location.href);
console.log("So trang trong lich su: " + history.length);


        //DOI TUONG STRING TRONG JAVASCRIPT

//1. Khai báo chuỗi
let.text = " JavaScript là ngôn ngữ lập trình tuyệt vời! ";

//2. Lay độ dài chuỗi
console.log("Độ dài chuỗi: ", text.length);

//3. Lấy ký tự trong chuỗi
console.log("Ky tự tại vị trí 0: ", text.charAt(0));
console.log("Ma ASSII của ký tự tại vị trí 0: ", text.charCodeAt(0));
console.log("Dung cu phap []: ", text[0]);

//4. Cat chuỗi
console.log("slice(0, 10): ", text.slice(0, 10));
console.log("substring(0, 10): ", text.substring(0, 10));
console.log("substr(0, 10): ", text.substr(0, 10));

//5.Chuyen chuỗi thành chữ hoa và chữ thường
console.log("toUpperCase(): ", text.toUpperCase());
console.log("toLowerCase(): ", text.toLowerCase());

//noi chuoi
let str1 = "Xin chao ";
let str2 = "JavaScript!";
console.log("Nối bằng concat(): ", str1.concat(str2));
console.log("Nối bằng Dấu +: ", str1 + str2);

//7.Loai bo khoảng trắng
console.log("Chuỗi sau khi trim(): ", text.trim());
console.log("Chuỗi sau khi trimStart(): ", text.trimStart());
console.log("Chuỗi sau khi trimEnd(): ", text.trimEnd());

//8.Kiem tra chuoi
console.log("includes('JavaScript'): ", text.includes("JavaScript"));
console.log("startsWith(' Java'): ", text.startsWith(" Java"));//luu y khoang trang dau ket qua co the la false neu khong trim khoang trang
console.log("endsWith('vời! '): ", text.endsWith("vời! "));

//9.Tim kiem chuoi
console.log("firstindexOf('lập trình'): ", text.indexOf("lập trình"));
console.log("lastIndexOf('a'): ", text.lastIndexOf("a"));
console.log("search('ngôn ngữ'): ", text.search("ngôn ngữ"));

//10. Thay the chuoi
console.log("replace('JavaScript', 'JS'): ", text.replace("JavaScript", "JS"));
console.log("replaceAll('a', 'A'): ", text.replaceAll("a", "A"));

//11. Tach chuoi
let words = "HTML, CSS, JavaScript, React, PHP";
console.log("Tach chuoi thanh mang ", words.split(", "));

// 12. su dung template literals: tron lan van ban va bien de dang khong can phep toan cong
//cu phap: ${ten_bien_hoac_bieu_thuc}
let name = "Minh";
let age = 25;
let message = `Xin chao, toi ten la ${name}, toi ${age} tuoi vaf dang hoc ${str2}`;
console.log("Template Literals: ", message);

//13. Chuoi nhieu dong voi template literals: dung de xuong dong trong chuoi
//binh thuong dong1\n dong2\n dong3
let multiLine = `Dong 1
Dong 2
Dong 3`;
console.log("Chuoi nhieu dong:\n", multiLine);

        //DOI TUONG DATE TRONG JAVASCRIPT

//1. Tao doi tuong Date hien tai
let myDate = new Date();
console.log("Ngay gio hien tai: ", myDate.toString());

//2. Lay nam, thang, ngay
console.log("Nam: ", myDate.getFullYear());
console.log("Thang (0-11): ", myDate.getMonth());// thang bat dau tu 0(January) den 11(December)
console.log("Ngay trong thang: ", myDate.getDate());
console.log("Ngay trong tuan (0-6): ", myDate.getDay());

//3. Lay gio, phut, giay
console.log("Gio: ", myDate.getHours());
console.log("Phut: ", myDate.getMinutes());
console.log("Giay: ", myDate.getSeconds());

//4. Chinh sua ngay thang nam
myDate.setFullYear(2025);
myDate.setMonth(11); // Thang 12
myDate.setDate(25);
console.log("Ngay gio sau khi chinh sua: ", myDate.toString());

//5. Dinh dang ngay gio
console.log("ISO String: ", myDate.toISOString());
console.log("Locale String: ", myDate.toLocaleString());
console.log("Date String: ", myDate.toDateString());
console.log("Time String: ", myDate.toTimeString());

//6.lay timestamp
console.log("Timestamp (so miligiay tu 1/1/1970): ", myDate.getTime());

//7. tinh khoang cach giua 2 ngay
let stratDate = new Date("2024-01-01");
let endDate = new Date("2024-12-31");
let timeDiff = endDate - stratDate;
//chuyen tu miligiay sang ngay (1000ms n* 60s * 60p * 24h)
let dayDiff = timeDiff / (1000 * 60 * 60 * 24);
console.log(`Khoang cach giua ${stratDate.toDateString()} va ${endDate.toDateString()} la: ${dayDiff} ngay.`);

//8. Cong/tru ngay thang 
let newDate = new Date();

//Cong 10 ngay
newDate.setDate(newDate.getDate() + 10);
console.log("Ngay sau khi cong 10 ngay: ", newDate.toDateString());

//Tru 5 ngay
newDate.setDate(newDate.getDate() - 5);
console.log("Ngay sau khi tru 5 ngay: ", newDate.toDateString());

        //DOI TUONG MATH TRONG JAVASCRIPT

//1. Cac hang so toan hoc
console.log("Pi: ", Math.PI);
console.log("E: ", Math.E);
console.log("Căn bậc hai của 2: ", Math.SQRT2);
console.log("Căn bậc hai của 1/2: ", Math.SQRT1_2);

//2. Gia tri tuyet doi
console.log("Giá trị tuyệt đối của -10: ", Math.abs(-10));

//3. Lam tron so
console.log("Làm tròn lên của 4.3: ", Math.ceil(4.3));
console.log("Làm tròn xuống của 4.7: ", Math.floor(4.7));
console.log("Làm tròn gần nhất của 4.5: ", Math.round(4.5));

//4. Luy thua va can bac 2
console.log("2 mũ 3: ", Math.pow(2, 3));
console.log("Căn bậc hai của 16: ", Math.sqrt(16));

//5.Tim gia tri lon nhat va nho nhat
console.log("Giá trị lớn nhất trong (3, 7, 2, 9, 4): ", Math.max(3, 7, 2, 9, 4));
console.log("Giá trị nhỏ nhất trong (3, 7, 2, 9, 4): ", Math.min(3, 7, 2, 9, 4));

//6. Ham luong giac ( cac ham luong giac trong js nhan da vao la radian, khong phai do)
console.log("Sin 30 độ: ", Math.sin(30 * (Math.PI / 180)));
console.log("Cos 60 độ: ", Math.cos(60 * (Math.PI / 180)));
console.log("Tan 45 độ: ", Math.tan(45 * (Math.PI / 180)));

//7. Sinh So ngau nhien
console.log("Số ngẫu nhiên từ 0 đến 1: ", Math.random());
//Cong thuc tao so nguyen ngau nhien trong khoang tu 1 den 100
console.log("Số ngẫu nhiên từ 1 đến 100: ", Math.floor(Math.random() * 100) + 1);

//8. Ham logarit
console.log("Logarit cơ số e của 10: ", Math.log(10));
console.log("Logarit cơ số 10 của 1000: ", Math.log10(1000));
console.log("Logarit cơ số 2 của 8: ", Math.log2(8));

        //DOI TUONG ARRAY TRONG JAVASCRIPT

// Tao mang
let fruits = ["Apple", "Banana", "Orange", "Strawberry"];

//1. length - do dai mang
console.log("Do dai mang: ", fruits.length);

//2. push() - them phan tu vao cuoi mang
fruits.push("Grapes");
console.log("Mang sau khi push: ", fruits);

//3. pop() - xoa phan tu cuoi mang
let removedFruit = fruits.pop();
console.log("Phan tu bi xoa: ", removedFruit);
console.log("Mang sau khi pop: ", fruits);

//4. unshift() - them phan tu vao dau mang
fruits.unshift("Mango");
console.log("Mang sau khi unshift: ", fruits);

//5. shift() - xoa phan tu dau mang
removedFruit = fruits.shift();
console.log("Phan tu bi xoa: ", removedFruit);
console.log("Mang sau khi shift: ", fruits);

//6. slice() - cat mot phan cua mang
let citrusFruits = fruits.slice(1, 3);
console.log("Mang con sau khi slice(1,3): ", citrusFruits);

//7. concat() - noi mang
let moreFruits = fruits.concat(["Pineapple", "Kiwi"]);
console.log("Mang sau khi concat: ", moreFruits);

//8. indexOf() - tim vi tri phan tu
let index = fruits.indexOf("Orange");
console.log("Vi tri cua 'Orange': ", index);

//9. includes() - kiem tra phan tu co trong mang khong
console.log("Mang co chua 'Banana' khong?: ", fruits.includes("Banana"));

//10. srort() - sap xep mang
fruits.sort();
console.log("Mang sau khi sort: ", fruits);

//11. reverse() - dao nguoc mang
fruits.reverse();
console.log("Mang sau khi reverse: ", fruits);

//12. forEach() - lap qua tung phan tu trong mang
console.log("Duyet mang bang forEach:");
fruits.forEach(fruits => console.log(fruit));

//13. map() - tao mang moi tu mang cu
let uppercaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log("Mang hoa chuoi: ", uppercaseFruits);

//14. filter() - loc phan tu trong mang
let shortNames = fruits.filter(fruit => fruit.length <= 5);
console.log("Ten trai cay co 5 ky tu tro xuong: ", shortNames);

//15. reduce() - gop cac phan tu trong mang thanh 1 gia tri
let numberArray = [10, 20, 30, 40, 50];
let sum = numberArray.reduce((total, num) => total + num, 0);
console.log("Tong cac so trong mang: ", sum);