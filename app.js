//ایجاد توابع  مورد نیاز 

//اول یه کلاس مینویسیم

class Todo {
    //یه تابعی ویژه است که هر زمان یه شی از این کلاس تودو را ایجاد کنیم این تابع خود به خود فراخوانی میشود 
    constructor(todoInputID, todoListID) {
        //دوتا آرگومان برای گرفتن ای دی ورودی و لیست بهش میدیم
        this.todoInput = document.getElementById(todoInputID);
        this.todoList = document.getElementById(todoListID);
        //حالا میخواهیم بعداز اینکه المنت هامون را گرفتیم یه لیستی از تودوهامون داخل یه آرایه داشته باشیم
        this.todos = [];

        /*<li>
            list1
            <span class="actions">
                <a class="delete">Delete</a>
            </span>
        </li>*/
    }
    //یه تابع رندر مینویسیم که ورودی ها را بگیره و تو خروجی نشون بده
    render() {

    }  
}
//برای فراخوانی کلاس تودو بعد از ایجاد شی
new Todo('todo-Input', 'todo-List');