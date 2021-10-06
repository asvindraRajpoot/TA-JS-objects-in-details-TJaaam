



class BookList{
    constructor(root,list=[]){
        this.list=list;
        this.root=root;
    }
    add(title,author,isbn=Date.now()){
        let book=new Book(title,author,isbn=Date.now());
        this.list.push(book);
        this.createUI();
        if(this.list.length){
            listHeader.style.display='flex'
        }
        return this.list.length;
    }
    delete(isbn){
        let index=this.list.findIndex((book)=>book.isbn===isbn);
        this.list.splice(index,1);
        this.createUI();
        if(this.list.length===0){
            listHeader.style.display='none'
        }
        return this.list.length;
    }
    createUI(){
        this.root.innerHTML=""
        this.list.forEach(book=>{
           let ui= book.createUI();
           ui.querySelector('.close').addEventListener('click',this.delete.bind(this,book.isbn));
           this.root.append(ui);
        })
    }
}


class Book{
    constructor(title,author,isbn=Date.now()){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
    createUI(){
 
        let booklistheader=document.createElement('div');
        booklistheader.classList.add('header-heading')

        let h2=document.createElement('h3');
        h2.innerText=this.title;
        
        let h3=document.createElement('h3');
        h3.innerText= this.author
        
        let h4=document.createElement('h3');
        h4.innerText=this.isbn
        
        let h5=document.createElement('h3');
        h5.innerText='❌'
        h5.classList.add('close');
        booklistheader.append(h2,h3,h4,h5);
        return booklistheader;
         
        }


}


let root=document.querySelector('.booklist')
let firstList=new BookList(root);
let listHeader=document.querySelector('.list-header');


let btn=document.querySelector('.input-field');
btn.addEventListener('submit',handleSubmit);
function handleSubmit(event){

    event.preventDefault();
  
   firstList.add(event.target.elements.title.value,event.target.elements.author.value, event.target.elements.isbn.value);
   event.target.elements.title.value="";
   event.target.elements.author.value="";
   event.target.elements.isbn.value="";
   
}
