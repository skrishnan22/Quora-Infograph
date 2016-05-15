ans_cnt=parseInt(document.getElementsByClassName("list_count")[0].innerHTML.replace(',',''));

var timer=setInterval(function(){
	var len=document.body.scrollHeight;
	var end=1;
	while(end==1){
		var newlen=len;
		len = document.body.scrollHeight;
		window.scrollTo(0, len);
		if(len==newlen)
		{
			end=0;
	}
	}
	var x=document.getElementsByClassName("AnswerListItem PagedListItem feed_item");
if(ans_cnt==x.length)
{
    clearInterval(timer);
    upv_views();
	topics();
	new_win();		
}},3000);
function convert(c_count){
	if(c_count.slice(-1)=='k'){
		count = parseFloat(c_count.slice(0,-1)*1000);
	}
	else if(c_count.slice(-1)=='m'){
		count = parseFloat(c_count.slice(0,-1)*1000*1000);
	}
	else
		count=parseFloat(c_count);
return count	
}	
function human_format(num)
{
    magnitude = 0
    while (num >= 1000)
	{
        magnitude += 1
        num /= 1000.0
    }
	mags=['', 'K', 'M', 'G', 'T', 'P'];
   ret_num = parseInt(num)+mags[magnitude];
   return ret_num;
   }	
   
function upv_views(){
upvotes = document.getElementsByClassName("PagedList UserAnswerProfileFeed")[0].getElementsByClassName("Answer Upvote Button")	
var upv_max = 0;
total_upv = 0;
total_views = 0;
for(var i=0;i<upvotes.length;i++)
{   c = convert(upvotes[i].getElementsByClassName("count")[0].innerHTML)
	total_upv+=c;
	if(c>upv_max)
	{
		upv_max=c;
		pos=i;
		}
		}
upv_ques=document.getElementsByClassName("PagedList UserAnswerProfileFeed")[0].getElementsByClassName("question_text")[pos].innerText;
upv_h=human_format(total_upv);
views = document.getElementsByClassName("PagedList UserAnswerProfileFeed")[0].getElementsByClassName("meta_num")
var view_max=0;
for(var i=0;i<views.length;i++)
{   c = convert(views[i].innerHTML)
	total_views+=c;
	if(c>view_max)
	{
		view_max=c;
		pos=i;
		}
		}
view_ques=document.getElementsByClassName("PagedList UserAnswerProfileFeed")[0].getElementsByClassName("question_text")[pos].innerText;
view_h=human_format(total_views);
ratio=parseInt(total_views/total_upv);
}	

function topics(){
	topics=document.getElementsByClassName("ProfileExperienceList")[0].getElementsByClassName("topic_info");
	topic0 = topics[0].getElementsByClassName("TopicName")[0].innerText;
	topic1=topics[1].getElementsByClassName("TopicName")[0].innerText;
	topic2=topics[2].getElementsByClassName("TopicName")[0].innerText;
	img_link = document.getElementsByClassName("profile_wrapper")[0].getElementsByClassName("profile_photo_img")[0].src;
	user_name = document.getElementsByClassName("profile_wrapper")[0].getElementsByClassName("profile_photo_img")[0].alt;
	}	
function new_win(){
newwin = window.open();

newwin.document.write('<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Josefin+Slab"><link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Arvo">   <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto"></head><style> #infograph {background:#E9F2F5;width:700px;height:700px;margin:auto;}#most-upvotes{position:relative;left:20px;float:left;background:#1C2F51;width:200px;height:250px;}.title{color:white;text-align:center;font-family:"Arvo",serif;font-size:25px;font-weight:bold;}#upvotes{background: #F62A25;   margin-left: 240px;   margin-bottom: 0px;   width: 230px;   height: 100px; } .content {   color: white;   margin-top: 20px;   font-family: "Josefin Slab", serif;   font-size: 20px;   text-align: center; } #answers {   width: 230px;   height: 100px;   background: #FF9719;   margin-left: 240px;   margin-top: 30px; } #user {   background: #3399ff;   width: 200px;   height: 250px;   margin-top: 20px;   margin-left: 250px;   margin-right: auto; } #user img {   display: block;   margin-right: auto;   margin-left: auto;   margin-top: 10px; } #most-viewed {   position: relative;   height: 250px;   width: 200px;   background: #ff3333;   bottom: 290px;   left: 490px;   }#followers{   position: relative;   background: #00cc7a;   width: 200px;   height: 140px;   left: 490px;   bottom: 720px;  } #topics{   background:  #00b359;   position: relative;   width: 450px;   height: 150px;   bottom: 360px;   left: 20px;   } .topic{   width:150px;   float: left;   color: white;   font-size: 20px;   text-align: center;   margin-top: 20px;   font-family: "Roboto",serif; } #views{   position: relative;   background: #b30047;   height: 100px;   width: 230px;   bottom: 770px;   left: 10px; } #questions{   position: relative;   background: #ffcc00 ;   height: 100px;   width: 230px;   bottom: 750px;   left: 10px; } #vuratio{   position: relative;   background: #ff9900 ;   height: 200px;   width: 210px;   bottom: 750px;   float: right;   right: 10px; } </style>   <body>     <div id="infograph">       <div id="most-upvotes">         <div class="title">Most Upvoted         </div>         <div class="content">         </div>       </div>       <div id="upvotes">         <div class="title">Upvotes</div>         <div class="content" style="font-size:50px;font-weight:bold"></div>       </div>       <div id="answers">         <div class="title" >Answers</div>         <div class="content" style="font-size:50px;font-weight:bold "></div>       </div>       <div id="user">         <img id="profile_img" width="150px " height="150px "><div class="title" style="margin-top:10px "></div>       </div>       <div id="most-viewed">         <div class="title">Most Viewed</div>         <div class="content"></div>       </div>       <div id="followers">         <div class="title">Followers</div>         <div class="content" style="font-weight: bold;font-size:50px;"></div>         </div>     <div id="topics">       <div class="title">Topics</div>         <div class="topic"></div>         <div class="topic"></div>         <div class="topic"></div>              <div class="content" style="font-weight: bold;font-size:50px;"></div>         </div>       <div id="views">         <div class="title">Views</div>         <div class="content" style="font-weight: bold;font-size:50px;"></div>         </div>         <div id="questions">         <div class="title">Questions</div>         <div class="content" style="font-weight: bold;font-size:50px;"></div>         </div>         <div id="vuratio">         <div class="title">Views per Upvote</div>         <div class="content" style="font-weight: bold;font-size:50px;"></div>         </div>     </div> 	/<script> 	 document.getElementById("most-upvotes").getElementsByClassName("content")[0].innerText=window.opener.upv_ques; 	 document.getElementById("upvotes").getElementsByClassName("content")[0].innerText=window.opener.upv_h; document.getElementById("answers").getElementsByClassName("content")[0].innerText=window.opener.document.getElementsByClassName("list_count")[0].innerText; document.getElementById("most-viewed").getElementsByClassName("content")[0].innerText=window.opener.view_ques; document.getElementById("profile_img").src=window.opener.img_link; document.getElementById("user").getElementsByClassName("title")[0].innerText=window.opener.user_name; 	 document.getElementById("questions").getElementsByClassName("content")[0].innerText=window.opener.document.getElementsByClassName("list_count")[1].innerText; document.getElementById("views").getElementsByClassName("content")[0].innerText=window.opener.view_h; document.getElementById("followers").getElementsByClassName("content")[0].innerText=window.opener.document.getElementsByClassName("list_count")[3].innerText; document.getElementById("vuratio").getElementsByClassName("content")[0].innerText=window.opener.ratio; document.getElementById("topics").getElementsByClassName("topic")[1].innerText=window.opener.topic1; 	 document.getElementById("topics").getElementsByClassName("topic")[2].innerText=window.opener.topic2;document.getElementById("topics").getElementsByClassName("topic")[0].innerText=window.opener.topic0; 	  	</script> 	 	   </body>  </html>')
}
