//ایجاد توابع  مورد نیاز 

//اول یه کلاس مینویسیم

class Todo {
//یه تابعی ویژه است که هر زمان یه شی از این کلاس تودو را ایجاد کنیم این تابع خود به خود فراخوانی میشود 
    constructor(todoInputID, todoListID) {
        //دوتا آرگومان برای گرفتن ای دی ورودی و لیست بهش میدیم
    console.log(todoInputID, todoListID)
        
    }
}
//برای فراخوانی کلاس تودو بعد از ایجاد شی
new Todo('todo-Input', 'todo-list');