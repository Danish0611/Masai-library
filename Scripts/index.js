// you can write your js code here
let bookData=JSON.parse(localStorage.getItem("book-list"))||[];
document.getElementById("home").addEventListener("submit",function (event){
    event.preventDefault();
    const bookName=document.getElementById("name").value;
    const Author=document.getElementById("author").value;
    const Description=document.getElementById("desc").value;
    const AddedDate=document.getElementById("added").value;
    const Category=document.getElementById("category").value;
    const price=document.getElementById("price").value;
    let data={bookName,Author,Description,AddedDate,Category,price};

    bookData.push(data);
    localStorage.setItem("book-list",JSON.stringify(bookData));
    
})