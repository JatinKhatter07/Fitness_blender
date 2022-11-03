document.getElementById("btn").addEventListener("click",referpage)
function referpage(){
    updateData();
    window.location.href="discussion.html"
}

function updateData(){
    var com_div=document.getElementById("community-contents");
    var div=document.createElement("div");
    
    var data=`
    <div class="content-flex-col">
    <div class="flex-row-content">
    <div>
        <a class="anc" href="">${localStorage.getItem("title")}</a>
        <P>${"By Anshu"}</P>
    </div>
    <div>
        <p>${localStorage.getItem("topic")+"/Announcements"}</p>
    </div>
    <div>
        <p>${Math.floor(Math.random()*10)}</p>
    </div>
    <div>
        <p>${Math.floor(Math.random()*50)}</p>
    </div>
</div>
</div>`;

        div.innerHTML=data;
    com_div.append(div);
}
updateData();