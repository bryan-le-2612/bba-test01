## Phạm vi của biến trong Javascript
    + Block : Khai báo trong cặp ngoặc nhọn 
        + var : không bị giới hạn bởi cặp ngoặc
        + Let/ Const : Bị giới hạn. Undefined khi ở ngoài
    + Function : biến được khai báo trong 1 hàm, cả let/var/const đều undefined khi ra ngoài hàm
    + Global : Không nằm trong block hay function
## Break & Continue
    + Break : dùng để thoát khỏi vòng lặp ngay lập tức
    + Continue dùng để bỏ qua phần còn lại của vòng lặp hiện tại và thực hiện lần lặp tiếp theo 
## Câu điều kiện nâng cao 
    + If...else...if
    + Ternary operator : Cách viêt ngắn gọn cho if else
        VD: 
        Let age = 20;
        let status = (age >= 18) ? "Người lớn" : "Trẻ em";
        console.log(status); // kết quả ra " Người lớn"
    + For...In : Dùng để duyệt qua các thuộc tính của object 
        VD: const person = {
            Name: "Bryan",
            Age: 30,
            City: "HCM"
        }:
        for (let key in person)
        {console.log(key+ ":" + person[key]);
        }
    + ForEach :method của 1 array Dùng để thực thi function cho mỗi phần tử. Không thể break hoặc continue

## Utils Function
    Utils functios là các hàm có sẵn của JV script 
    + string ultis:
        Bỏ space : trim() , trimStart(), trimEnd()
        Chuyển đổi hoa -> thường và ngược lại : toUpperCase, toLowerCase
        Kiểm tra có bao gồm chuỗi con không : includes
        Cắt chuỗi : split
        Thay thế chuỗi : replace 
    + array ultis
        Thêm phần tử vào mảng : push, unshift , splice
        Xóa phần tử khỏi mảng: pop,shift,splice
        tìm kiếm: find,filter
        biến đổi mảng : map
        Sắp xếp: sort