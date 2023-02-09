// you can write your js code here
let bookData=JSON.parse(localStorage.getItem("book-list"))||[];
let DashbordData=JSON.parse(localStorage.getItem("buy-list"))||[];
let BookmarkData=JSON.parse(localStorage.getItem("bookmark-list"))||[];
let tbody =document.getElementById("dash_Board");
let totalBooks=document.getElementById("book-count");
    totalBooks.textContent=bookData.length;

    // filtering by journer
let dofilter=document.getElementById("filter")
dofilter.addEventListener("change",filterby);

// soring by price
//let sorting=document.getElementById("price");
//sorting.addEventListener("change",sortby);

// sort by name 
//let sortingname=document.getElementById("sort_name");
//sortingname.addEventListener("change",sortbyName);


function Showdata(){
    tbody.innerHTML="";
    bookData.forEach(function (user,index) {
        let tr=document.createElement("tr");
        let BName=document.createElement("td");
        let AuthorName=document.createElement("td");
        let Description=document.createElement("td");
        let AddedDate=document.createElement("td");
        let category=document.createElement("td");
        let buy=document.createElement("td");
        let bookmark=document.createElement("td");
        let price=document.createElement("td");
        BName.textContent=user.bookName;
        AuthorName.textContent=user.Author;
        Description.textContent=user.Description;
        AddedDate.textContent=user.AddedDate;
        category.textContent=user.Category;
        buy.textContent="Buy";
        buy.addEventListener("click",()=>{
            DashbordData.push(user);
            localStorage.setItem("buy-list",JSON.stringify(DashbordData));
            bookData.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(bookData));
            totalBooks.textContent=bookData.length;
            Showdata();
        })
        bookmark.addEventListener("click",()=>{
            BookmarkData.push(user);
            localStorage.setItem("bookmark-list",JSON.stringify(BookmarkData));
            bookData.splice(index,1);
            localStorage.setItem("book-list",JSON.stringify(bookData));
            totalBooks.textContent=bookData.length;
            Showdata();

        })
        bookmark.textContent="Add";
        price.textContent=user.price;
        tr.append(BName,AuthorName,Description,AddedDate,category,buy,bookmark,price);
        tbody.append(tr);
        
    });

}
function filterby() {
    let value = dofilter.value
    bookData = JSON.parse(localStorage.getItem("book-list"))
    if (value == "Fiction") {
       bookData=bookData.filter((user) => user.Category == "Fiction")
      Showdata()
    } else if (value == "Self Help") {
      bookData = bookData.filter((user) => user.Category == "Self Help")
      Showdata()
    } else if (value == "Finance") {
      bookData = bookData.filter((user) => user.Category == "Finance")
      Showdata()
    } else {
      bookData = JSON.parse(localStorage.getItem("book-list"))
      Showdata()
    }
  }
//   function sortby() {
//     let value = sorting.value
//     bookData = JSON.parse(localStorage.getItem("book-list"))
//     if (value == "Ascending") {
//       bookData= bookData.sort((a, b) => {return a.price - b.price;});
//       Showdata()
//     } else if (value == "Descending") {
//       bookData= bookData.sort((a, b) => {return b.price - a.price;});
//       Showdata()
//      } else {
//       bookData = JSON.parse(localStorage.getItem("book-list"))
//       Showdata()
//     }
//   }

//   function sortbyName(){
//     let value = sortingname.value
//     bookData = JSON.parse(localStorage.getItem("book-list"))
//     if (value == "Ascending") {
//       bookData= bookData.sort((a, b) => a.bookName.localeCompare(b.bookName));
//       Showdata()
//     } else if (value == "Descending") {
//       bookData= bookData.sort((a, b) => b.bookName.localeCompare(a.bookName));
//       Showdata()
//      } else {
//       bookData = JSON.parse(localStorage.getItem("book-list"))
//       Showdata()
//     }
//   }
Showdata();