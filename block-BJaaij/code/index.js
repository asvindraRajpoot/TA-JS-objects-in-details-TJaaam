// ## An object-oriented book-list!

// - [ ] Create a class BookList
// - [ ] Create another class called Book

// #### Each Book should have several properties:

// 1. Title
// 2. Category
// 3. Author
// 4. isRead (default to `false`)
// 5. finishedDate

// Book class will have the following methods:

// - `markBookAsRead` when called will change the `isRead` property on the book to be `true`. It will also change the `finishedDate` to be the `Date.now()` when this function is called.

// #### BookList should have the following properties:

// 1. An array of all the Books
// 2. Current read book index

// #### BookList Methods

// - [] `add([Book])` will accept an array (list of books). Once the method is called the book will added to the list.
// - [] `getCurrentBook()` should return the current book using the `index` and the book array
// - [] `getNextBook()` should return the next book using the `index` and the book array
// - [] `getPrevBook()` should return the previous book using the `index` and the book array
// - [] `changeCurrentBook` should accept one parameter and update the current index.

// After creating the Book and BookList class create 5 book object and add it to list. Test all the methods in Book and BookList class.
class Book{
    constructor(title,category,author){
        this.title=title;
        this.category=category;
        this.author=author;
        this.isRead=false;
        this.finishedDate=null; 
    }
    markBookAsRead(){
        this.isRead=true;
        this.finishedDate= Date.now();
    }



}
class BookList{
    constructor(){
        this.books=[];
        this.index=0;
    }
    add(books=[]){
        this.books=this.books.concat(books);
        return this.books;

    }
    getCurrentBook(){
        return this.books[this.index];
    }
    getNextBook(){
        return this.books[this.index+1];
    }
    getPrevBook(){
        return this.books[this.index-1];
    }
    changeCurrentBook(changed){
       return this.books[this.index=changed];
    }
    
}

let book1=new Book('money','fiction','ronald');
let book2=new Book('money2','fiction2','ronald2');
let book3=new Book('money4','fiction3','ronald3');
let book4=new Book('money5','fiction4','ronald4');
let book5=new Book('money5','fiction5','ronald5');
let book6=new Book('money6','fiction5','ronald5');
let BookList1=new BookList([],3);
BookList1.add(book1);
BookList1.add(book2);
BookList1.add(book3);
BookList1.add(book4);
BookList1.add(book5);

console.log(book1.title);
console.log(book1.category);
console.log(book1.author);
console.log(book1.isRead);
console.log(book1.finishedDate);
book1.markBookAsRead();
console.log(book1.isRead);
console.log(book1.finishedDate);
console.log(BookList1.arrBooks);
console.log(BookList1.index);
BookList1.add(book6);
console.log(BookList1.getCurrentBook());
console.log(BookList1.getNextBook());
console.log(BookList1.getPrevBook());
console.log(BookList1.changeCurrentBook(4));