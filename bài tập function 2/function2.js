
// bài 1: Viết chương trình cộng hai số (Sử dụng Return)
// function hello(){
//     let a = parseInt(prompt("mời bạn nhập số a"))
//     let b = parseInt(prompt("mời bạn nhập số b"))
//     let tổng = a+b;
//      console.log(tổng);
//      return;
// }
// hello();

//bài 2: Tính tổng các số lẻ trong mảng. (Sử dụng Return)


// function hello() {
//     let array = [1,2,3,4,5,6]
//     let a = 0;
//     for (let i = 0; i < array.length; i = i + 1) {
//         if (array[i] % 2 !== 0) {
//             a = a + array[i];
//         }
//     } console.log(a);
//     return;
// }
// hello()

//bài 3:Tạo hàm nhận vào hai tham số. Nếu giá trị của tham số thứ nhất lớn hơn tham số thứ hai, 
//hiển thị hộp thoại thông báo cho người dùng. 
//Nếu giá trị của tham số thứ nhất nhỏ hơn hoặc bằng tham số thứ hai, trả về tổng của hai tham số.

// function hello(){
//     let check1 = Number(prompt("mời bạn nhập số"))
//     let chech2 = Number(prompt("mời bạn nhập số")) 
//     if( check1 > chech2){
//         alert("tham số thứ nhất lớn hơn tham số thứ hai")
//     }else {
//         tong = check1 + chech2;
//         alert(tong)
//     }return;

// }
// hello();


// bài 4:Thêm các hàm alert() vào những vị trí thích hợp trong đoạn mã sau để
//bạn có thể nhìn thấy giá trị của biến result trước và sau lời gọi hàm. Đoạn mã
//có dạng như sau:

// function addNumbers() {
//      firstNum = 4;
//      secondNum = 8;
//      result = firstNum + secondNum;
//      return result;
//     }
//     result = 0;
//     alert(result)
//     result = addNumbers();
//     alert(result)

//bài 5:Chuyển đổi giữa feet và meters
// Xây dựng hai phương thức sau:
// Chuyển đổi từ feet sang meters:
// function footToMeter(foot) {
//     let check = Number(prompt("nhập số bất kì"))
//     let meter = 0.305 * check
//     alert(`Chuyển đổi từ feet sang meters:${meter}`)
//     return;
// } 
// footToMeter()
// Chuyển đổi từ meters sang feet:
// function meterToFoot(meter) {

//     let check = Number(prompt("nhập số bất kì"))
//     let foot = 3.279 * check
//     alert(`Chuyển đổi từ meters sang feet: ${foot}`)
//     return;
// }
// meterToFoot()


//bài 6: Tạo hàm để kiểm tra số nguyên tố
// Xây dựng phương thức:
// function isPrime(number)

// 1. Để kiểm tra xem một số nguyên bất kỳ có phải là số nguyên tố hay
// không.
// 2. Sau khi làm được mục 1, Sử dụng phương thức này để tìm tất cả các số
// nguyên tố nhỏ hơn 100 và in nó ra
// Ví dụ, các số sau đây là số nguyên tố:
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83,
// 89, 97

// let a = Number(prompt("Nhap vao so a"))
// let check = 0
// function kiemTraSoNguyenTo(a) {
//     if (a === 2) {
//         alert("a là số nguyên tố")
//         return
//     } else {
//         for (let i = 2; i < a; i++) {
//             if (a % i === 0) {
//                 alert("a không phải là số nguyên tố")
//                 check = 1
//                 break;
//             }
//         }
//         }
//     }kiemTraSoNguyenTo(a)











