// you can write your js code here
let BookmarkData=JSON.parse(localStorage.getItem("bookmark-list"))||[];
tbody=document.getElementById("bookmark_list");

function Showdata(){
    tbody.innerHTML="";
    BookmarkData.forEach(function (user,index) {
        let tr=document.createElement("tr");
        let BName=document.createElement("td");
        let AuthorName=document.createElement("td");
        let Description=document.createElement("td");
        let AddedDate=document.createElement("td");
        let category=document.createElement("td");
        let price=document.createElement("td");
        let Delete=document.createElement("td");
        Delete.textContent="Delete";
        Delete.addEventListener("click",()=>{
            BookmarkData.splice(index,1);
            localStorage.setItem("bookmark-list",JSON.stringify(BookmarkData));
            Showdata();
        })
        BName.textContent=user.bookName;
        AuthorName.textContent=user.Author;
        Description.textContent=user.Description;
        AddedDate.textContent=user.AddedDate;
        category.textContent=user.Category;
        price.textContent=user.price;
        tr.append(BName,AuthorName,Description,AddedDate,category,price,Delete);
        tbody.append(tr);
        
    });

}
Showdata();