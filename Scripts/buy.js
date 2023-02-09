// you can write your js code here
let DashbordData=JSON.parse(localStorage.getItem("buy-list"))||[];
let tbody=document.getElementById("buy_list")
function Showdata(){
    tbody.innerHTML="";
    DashbordData.forEach(function (user,index) {
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
            DashbordData.splice(index,1);
            localStorage.setItem("buy-list",JSON.stringify(DashbordData));
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