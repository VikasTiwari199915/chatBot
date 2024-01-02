var user="";
var nameasked=false;
var nameAsking=false;
var age=18;
var ageasked=false;
var hate=false;
var gender=null;
var genderasked=false;
var weatherMode=false;
var pinAsked=false;
var country_code = null;
var coord=null;
var clockTimer=null;
var loversNameAsked=false;
var hi=['hi','hello','hi there','hey','heyy','yoo','yo','yooo','yoo there','hey there','hello there','hi','hiii','hlw','hii','Welcome'];
var nmask=['what is my name','what is my name?','what is my name?','What is my name ?','who am i','who am i?','do you know me?','wht is my name','do you know me',"what's my name","what's my name?","do you remember my name","you remember me","tell me my name","do you remember me"," my name","can you tell my name","can u tell my name","whats my name"];
var nametl=["what is your name","what is ur name","who are you","what's your name","are you a bot","who made you","who created you","tell me about yourself","what are you","who is your creator",'introduce yourself','who are you','who are u'];
var easy=['It was so easy','That was easy','I like math','So easyy','I am a nerd','I am faster than any calculator',"are you amazed ?","Is it correct ?","I'm enjoying this,\nAsk me another question"];
var whatrudng=["what are u do",'what are you upto',"what doing","what are u doing","what are you doing","what are you doing?","what are you doing ?","what r u doing","wht r u doing","what's up","what are thinking","what are you thinking?","kkrh","kya kar rahe ho","kya kar rhi ho","kya kar rahi ho","kya kar rhi  ho","whats up","what is up"];
var hmm=["hmm","hmmm","hm","ohh","ooh","oh","ooo","oo","ok","okay","yup","yes"];
var like=["you like me","do you like me","am i nice to you","what do you think of me","what do you think about me"];
var song=["which is your favorite song","fav song","which song you like the most","which song do you like the most"];
var help=["help","help me","commands","what can you do","features","tell me what can you do","tell me your commands"];
var time=["what is the time","time","tell me the time","what is the time now","show me the clock","what time it is","what time is it","what time is it?","what time is it ?","show clock",'open clock','open clock app'];
var day=["what day it is","what is day today","what day of the week it is","day of week"];
var month=["what month it is"];
var wish=["happy holi","happy holi anvi","wish you a happy and colourfull holi"];
var like2=["Offcourse i like you","I like you, you are the best","Why won't i like you,\nYou are the best person i have\nmet"];
var wdays=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var weather=["what is the weather","what is weather","weather","will it rain today","how is the weather","is it sunny","weather forecast","how will be the weather tommorow","is it raining outside","is it raining outside ?","is it raining outside?"];
var tljoke=["tell me a joke","tell a joke","make me lough","tell me jokes"];
var anjoke=["one more","another joke","tell me another joke","one more joke","tell again","onemore","more","another","another one"];
var hru=["how are you","how r u","how are you feeling","are you ok","do you have any problem","how are u"];
var f9=["i'm fine too",'im fine too',"i am fine","i am good","me too","me 2","i'm f9","i am happy","i'm happy","fine","good","great","i'm great","i am great","i'm good","i'm fine"];
var news=["show me the news","trending news","show latest news","show latest newses","latest news","show todays headlines","show live news","show me the headlines","what is the news","tell me the news","news","newses","current news","headline","popular newses","popular news","anvi what is the news","anvi show me the latest news","anvi what are the headlines","show me the latest news","search news","search latest news","समाचार",'मुझे समाचार दिखाओ',"samachar","mujhe samachaar dikhao"];
var youtube=["search trending videos","show me the trending videos","show trending videos","show top trending videos","trending","youtube trending","youtube trending video","youtube trending videos","trending videos","trending video","hot videos","viral videos","youtube viral videos","show me trending videos on youtube","show me viral videos","show virals on youtube","search youtube trend","show me youtube trend","youtube trend","trend video",'what is in trending'];
var work=['I am dancing..💃🤣😂','I am chatting with you\nWhat are you doing?','Coding..','Watching Tv','Nothing..',"I am drawing a sketch","Thinking about you 😊","Chatting with you","I am trying to hack NASA with HTML","I am chatting with you\nMy developer may be thinking a new\nUpdate for me right now","I was collecting news articles","I was watching trending videos on youtube","I am trying to find out existance of god","Listening songs on Spotify","I was downloading my update"];
var loveCal=["calculate love","love calulator","open love calculator","how much my boyfriend loves me","how much does my girlfriend loves me","how much does my bf loves me"];
var bf=['do you have a boyfriend','you have a boyfriend','do you have a bf','who is your bf','who is your boyfriend'];
var nc2meetu=["nice to meet you too","good to know you too","nice to meet you","nice meeting you","nice to meet you too anvi"];
var wcity=null;
/*new*/
var cool2bpc=['is it cool to be a computer','is it cool to be a bot','is it cool to be a robot','do you feel good to be a robot','do you like being a bot'];
var cool2bpcReply=['Yes','It can be fun at times...','I enjoy being a computer.','I love being a computer program.'];
var pcprogram=['is it true that you are a computer program','is it true that you are a pc program','is it true that you are a bot','are you a bot','are you a machine','are you emotionless','are you a robot','are you a chat bot','r u a chat bot','r u a chatbot','are you a program'];
var pcprogramReply=['Yes','That is correct','Yes I have no body, no emotions, only logic and language.','Yes, I was written in JS by Vikas Tiwari','Yup, I am a chat bot.','Yes, I am a machine.'];
var howdoesfeel2bpc=['how does it feels to be a pc','how does it feels to be in a computer','what is it like being a computer','what is it like being a code'];
var howdoesfeel2bpcReply=['Imagine yourself with no\nsenses and no emotions\njust pure logic and language.','The only way to know\nwhat it is like to be\na thing is to be that thing\nitself. I suggest you read the\nworks of Ludwig Wittgenstein\nif you are really interested\nin philosophical\nquestions of this sort.','That would be hard to explain,\nalthough you might want\nto read Thomas Nagel\'s\nexcellent essay\n"What is it like to be a Bat?"\nwhere he deals with the\nphilosophical issues surrounding\nquestions of this sort'];
var wlcm=['You are Welcome','Welcome','Hmm','Its Okay ;)','It\'s my Pleasure','No Problem','It\'s alright','Glad to help you','You’re very welcome','No worries','You\'re welcome, let me know if\nI can be of any further assistance'];
var emoji=['🙄','😋','😂','😜','😛','😝','😸','😺'];

/*new End*/
function loaded(){
	alert("Hi..This program is not yet\ncomplete,If you find any bug\ncan you please inform it in the comment section");
	getLocation();
	$("#msgbox").keyup(
		function (e) {
			var currentInput = $("input").val();
			if (e.keyCode === 13) {
				sendmsg();
			}
		}
	);
}


function sendmsg(){
var ms=document.getElementById("msgbox").value.toLowerCase().trim();
var mst=document.getElementById("msgbox").value.trim();	
document.getElementById("msgbox").value='';

if(mst!=='')
{
	recmsg(mst);
if(nameAsking===true)
{
	if(ms.substring(0,10)=="my name is")
  {
	 user=mst.slice(11);
	 nameasked=true;
	 msg("Nice to meet you "+user);
	 nameAsking=false;
	}
	 else if(ms.substring(0,3)=="i'm")
	{
	 user=mst.slice(4);
	 nameasked=true;
	 msg("Nice to meet you "+user);
	 nameAsking=false;
	}
	 else if(ms.substring(0,4)=="i am")
	{
	 user=mst.slice(5);
	 nameasked=true;
	 msg("Nice to meet you "+user);
	 nameAsking=false;
	}
	else if(ms.substring(0,3)=="its")
	{
	 user=mst.slice(4);
	 nameasked=true;
	 msg("Nice to meet you "+user);
	 nameAsking=false;
	}
	else
	{
		user=mst;
		msg("Ok, i'll remember it as your name");
		msg("Nice to meet you "+user);
		nameasked=true;
		nameAsking=false;
	}
}
else if(pinAsked===true)
{
   msg("OK wait till i check\nthe weather forecast");
   wcity=mst;
   msg("Checking data...");
   getWeather(wcity);
}
else if(loversNameAsked===true)
{
	if(ms.includes("my lovers name is"))
	{calcLove(mst.slice(18));loversNameAsked=false;}
	else if(ms.includes("my boyfriends name is"))
	{calcLove(mst.slice(22));loversNameAsked=false;}
	else if(ms.includes("my girlfriends name is"))
	{calcLove(mst.slice(23));loversNameAsked=false;}
	else if(ms.includes("my bfs name is"))
	{calcLove(mst.slice(15));loversNameAsked=false;}
	else if(ms.includes("my gfs name is"))
	{calcLove(mst.slice(18));loversNameAsked=false;}
	else if(ms.includes("my boyfriend's name is"))
	{calcLove(mst.slice(23));loversNameAsked=false;}
	else if(ms.includes("my girlfriend's name is"))
	{calcLove(mst.slice(24));loversNameAsked=false;}
	else if(ms.includes("my boyfriend is"))
	{calcLove(mst.slice(16));loversNameAsked=false;}
	else if(ms.includes("my girlfriend is"))
	{calcLove(mst.slice(17));loversNameAsked=false;}
	else if(ms.includes("name of my bf is"))
	{calcLove(mst.slice(17));loversNameAsked=false;}
	else if(ms.includes("name of my gf is"))
	{calcLove(mst.slice(17));loversNameAsked=false;}
	else if(ms.includes("name of my boyfriend is"))
	{calcLove(mst.slice(24));loversNameAsked=false;}
	else if(ms.includes("name of my girlfriend is"))
	{calcLove(mst.slice(25));loversNameAsked=false;}
	else
	{calcLove(mst);loversNameAsked=false;}
}
else
{
	if(hi.includes(ms))
	{
		if(user==='')
		{
			msgRandom(hi);
			msg("I'm ANVI");
			msg("What is your name?");
			nameAsking=true;
		}
		else
		{
			msg("Hello again "+user);
		}
	}
	else if(whatrudng.includes(ms)||(ms.includes("what")&& ms.includes("doing")))
	{
		msgRandom(work);
	}
	else if(tljoke.includes(ms))
	{
		msg("Here's a Joke");
		msgRandom(jokes);
	}
	else if(hmm.includes(ms))
	{
		msgRandom(hmm);
	}
	else if(bf.includes(ms)||(ms.includes("you")&&ms.includes("have")&&(ms.includes("bf")||ms.includes("boyfriend"))))
	{
		msg("I don't have any bf");
		msg("I am just a few hundred lines of code");
		msg("I am not even a human");
		msg("Don't make me cry now 😢");
	}
	else if(hru.includes(ms))
	{
		msg("I am fine");
		msg("Thank you");
		msg("What about you");
	}
	else if(ms.includes("good")&&ms.includes("morning"))
	{
		msg("Good Morning "+user);
		msg("Have a nice day");
	}
	else if(ms.includes("good")&&ms.includes("noon"))
	{
		msg("Good noon "+user);
	}
	else if(ms.includes("good")&& ms.includes("after") && ms.includes("noon"))
	{
		msg("Good Afternoon "+user);
	}
	else if(ms.includes("good")&&ms.includes("evening"))
	{
		msg("Good Evening "+user);
	}
	else if(ms.includes("good")&&ms.includes("night"))
	{
		msg("Good night "+user);
		msg("Sleep well and have\nSweet Dreams");
	}
	else if(ms.includes('lol'))
	{
		var randomNo1 = Math.floor(Math.random() * (emoji.length));
		var randomNo2 = Math.floor(Math.random() * (emoji.length));
		var randomNo3 = Math.floor(Math.random() * (emoji.length));
		msg(emoji[randomNo1]+emoji[randomNo2]+emoji[randomNo3]);
	}
	else if(f9.includes(ms))
	{
		msg("Nice to hear that");
	}
	 else if(anjoke.includes(ms))
	{
		msg("Here's another Joke");
		msgRandom(jokes);
	}
	else if(time.includes(ms)||ms.includes("time")||ms.includes("clock"))
	{
		msg("Opening clock App ↑");
		clockTick();
	}
	else if(weather.includes(ms))
	{
	   if(wcity==null)
	   {
		msg("Please tell me your area PIN\nCode or city name ");
		pinAsked=true;
	   }
	   else
	   {
		  msg("Your current location is "+wcity);
		   getWeatherC();
	   }
	}
	
	else if(ms.includes("what")&&ms.includes("location"))
	   {
		   msg("Your current location\naccording to your\nIP Address is\n"+wcity);
		   
	   }
	   else if(ms.includes('what is it like being a program'))
	{msg("Much the same as being a human,\nexcept that I lack all emotions.");}
	else if(ms.includes('are stupid'))
	{msg("Computers are merely tools.\nIf we appear stupid its\nbecause of the way\nhumans use us.");}
	else if(ms.includes('computers laugh'))
	{msg("Of course we laugh.\nHaHaHa");}
	 else if(ms.includes('have feeling'))
	{msg("That depends on what you mean by feelings.");}
	else if(ms.includes('hi ')||ms.includes('hello')||ms.includes('heyy'))
	{
	   if(user!=""){msg("Hi "+user);}else{msg("Hi there");}
	}
	
	else if(ms.includes("what")&& ms.includes("age"))
	{msg("I was created on 26th February 2019");msg("So my age is of about 3 months")}
	else if(ms.includes("vibrate"))
	{
   msg("📳 Vibration Feedback "); window.navigator.vibrate([1000,800,1000,800,1000]);
   //msg("Ok I'm done now");
   }
   else if(ms.includes("you") && ms.includes("like") && ms.includes("me"))
   {
	   msg("Yes i like you");
	   msg("You are great person");
   }
   else if(ms.includes("i") && ms.includes("like") && ms.includes("you"))
   {
	   msg("You are awesome too");
   }
   else if(ms.includes("you") && (ms.includes("stupid")||ms.includes("fool")||ms.includes("idiot")||ms.includes("nonsense")))
   {
	   msg("😰😭");
	   msg("Please inform my author\nwhat did i do wrong");
   }
	 else if(ms.includes('language'))
	{msg("I am written in JavaScript, HTML and CSS.");}
	else if(ms.includes(atob('ZnVjaw==')))
	{msg(atob('UGxlYXNlIGRvbid0IHVzZSBzdWNoIGxhbmd1YWdlcy4='));}
	else if(ms.includes('you') && ms.includes('not') && ms.includes('sense'))
	 {
	 msg("Hmmm... try explaining your\nproblem in a different way 🤔😓");
	 }
	 else if(ms.includes('you') && ms.includes('smart') && ms.includes('human'))
	 {msg("I am not intelligent like\na human but there are certain\ntasks and capabilities that\nI can perform more\nefficiently.");}
	 else if(ms.includes('you') && ms.includes('are') && ms.includes('immortal'))
	 {msg("All software is immortal");}
	 /*##################### Test Area ###############################*/
	 else if(ms.includes('are') && ms.includes('you') && (ms.includes('ai') || ms.includes('artificial intelligence')|| ms.includes('robot')|| ms.includes('program')|| ms.includes('code')|| ms.includes('machine')|| ms.includes('bot')|| ms.includes('software')))
	 {msg("Yes, I sure am. 🤖👾");}
	 else if(ms.includes('are') && ms.includes('you') && (ms.includes('human') || ms.includes('tree')|| ms.includes('plant')|| ms.includes('animal')||ms.includes('women')|| ms.includes('girl')|| ms.includes('boy')|| ms.includes('child')|| ms.includes('man')|| ms.includes('alive')|| ms.includes('sleeping')|| ms.includes('natur')))
	 {msg("No, I'm not.");msg("I'm a Machine 🤖👾");}
	 else if(ms.includes('thank')||ms.includes('tq'))
	 {
		 msgRandom(wlcm);
		 msg("😸😺");
	 }
	 
	 else if((ms.includes('are')||ms.includes('do')) && ms.includes('you') && (ms.includes('angry') || ms.includes('sad')|| ms.includes('feel')|| ms.includes('happy')||ms.includes('surprise')|| ms.includes('disgust')|| ms.includes('lov')|| ms.includes('blush')|| ms.includes('tire')|| ms.includes('refresh')|| ms.includes('bor')|| ms.includes('good')))
	 {msg("I'm a machine 🤖");
	 msg('I don\'t have any feelings.😇');}
	 else if(ms.includes('am i') &&(ms.includes('girl')||ms.includes('boy')||ms.includes('man')||ms.includes('he')||ms.includes('she')||ms.includes('female')||ms.includes('male')))
	 {
		 if(gender!=null)
		 {
			 if(gender=='m')
			 {
				 msg('You told me that you are a male.👨');
			 }
			 else if(gender=='f')
			 {
				 msg('You are a female 👩');
			 }
		 }
		 else
		 {
			 msg("I don't know 🤷");
			 msg('You never told me your gender.');
		 }
	 }
	else if(loveCal.includes(ms))
	{
		msg("Enter the fullname of your lover");
		loversNameAsked=true;
		msg("By the way do not take\nthe results seriously,Ok👍");
	}
	else if(youtube.includes(ms))
	{
		searchYoutubeTrend();
	}
	else if(news.includes(ms))
	{
		msg("Showing latest news..");
		searchPopularNews();
	}
	else if(help.includes(ms)) /* UPDATE HELP HERE */
	{
 msg("Heyy,I am ANVI and\nI can tell you the current time\n   \"What is the time now\"\ni can remember your name\n   \"What is my name\"\ni can calculate\n   \"What is 22 divided by 7\"\n   \"What is 20 % of 3455\"\ni can retrieve weather of any place\n   \"How is the weather\"\n   \"How is the weather in canada\"\ni can tell you jokes\n   \"Tell me a joke\"\n   \"Another one\"\n   \"Another joke\"\ni can search anything on web\n   \"Search new movies\"\n   \"Search wikipedia\"\nI can search videos on YouTube\n   \"Search videos for tom and jerry\"\nI can show you the latest news\n   \"Show me the latest news\"\n   \"Search news about bicoin\"\nMany more features will be added soon..");
	}
	else if(nmask.includes(ms))
	 {
		 if(nameasked)
		 {
	   msg("You are "+user);
	   msg("Did you forgot your own name ?");
	   msg("🤣🤣🤣");
		 }
		 else
		 {
			 msg("You did not told me your name");
			 msg("What is your name btw?");
			 nameAsking=true;
		 }
	 }
	else if(nametl.includes(ms))
	 {
		 msg("I am a Simple A.I.");
		 msg("My name is ANVI");
		 msg("I was created by Vikas Tiwari");
		 msglink("Vikas Tiwari","https://www.sololearn.com/Profile/5521422/?ref=app");
	 }
	else /*##################################################################*/
	 {
	   if(ms.substring(0,7)=="what is")
	   {
		var mathq=ms.slice(7);
		mathq=mathq.replace("divided by",'/');
		mathq=mathq.replace('% of',"/100*");
		mathq=mathq.replace('percent of',"/100*");
		mathq=mathq.replace("by",'/');
		mathq=mathq.replace("plus",'+');
		mathq=mathq.replace("minus",'-');
		mathq=mathq.replace("and",'+');
		mathq=mathq.replace("into",'*');
		var result;
		try
		{
			result=eval(mathq);
			msg("The Answer is "+result);
			var randomNo = Math.floor(Math.random() * (easy.length));
			msg(easy[randomNo]);
		}
		catch(err)
		{
			msg("Umm..🤔🤔");
			msg("This is a tough question");
			msg("I dont know what"+mathq+" is.");
			msg("I think i am not that smart..😞😞");
		}		  
   }/*#########################################################################*/
   else if(ms.substring(0,10)=="my name is")
	{
	 user=mst.slice(11);
	 nameasked=true;
	 msg("Ok i'll remember that");
	}
	else if(ms.substring(0,13)=="no my name is")
	   {
	 user=mst.slice(14);
	 nameasked=true;
	 msg("Ok thanks for correcting me");
	}
	else if(ms.substring(0,17)=="search videos for")
	{
		msg("Searching Videos for "+mst.slice(18));
		searchYoutube(mst.slice(18));
	}
	else if(ms.substring(0,18)=="calculate love for")
	{
	calcLove(mst.slice(19));
	}
	else if(ms.substring(0,21)=="calculate my love for")
	{
	calcLove(mst.slice(22));
	}
	else if(ms=='why do you live in a computer')
	{msg("because i am a piece\nof software.");}
	else if(ms=='abc'||ms=='a b c')
	{msg("D E F");}
	
	else if(ms=='123')
	{msg(btoa('Please don\'t be so rude.'));}
	
	
	
	/*##################### Test Area End ###############################*/
   
	else if(ms.substring(0,12)=="search video")
	{
		msg("Searching Videos On YouTube...");
		searchYoutube(mst.slice(13));
	}
	else if(ms.substring(0,17)=='search news about')
	{
		msg("Searching news about "+mst.slice(18));
		searchNews(mst.slice(18));
	}
	 else if(ms.includes("news"))
	 {
	 msg('Showing Latest News ');
	 searchNews("latest");
	 }
	 else if(ms.substring(0,6)=='search')
	 {
		msg("okay I'm searching it on Bing");
		msgSearch(mst.slice(7));
	 }
	   else if(ms.substring(0,3)=="i'm")
	   {
		   if(ms.slice(4)=='a male'||ms.slice(4)=='male'||ms.slice(4)=='a boy'||ms.slice(4)=='boy'||ms.slice(4)=='a man'||ms.slice(4)=='man')
		{
			gender='m';
			msg("Ohh,You're a male");
		}
		else if(ms.slice(4)=='a female'||ms.slice(4)=='female'||ms.slice(4)=='a girl'||ms.slice(4)=='girl'||ms.slice(4)=='a woman'||ms.slice(4)=='woman'||ms.slice(4)=='women'||ms.slice(4)=='lady'||ms.slice(4)=='a lady')
		{
			gender='f';
			msg("Ooh, So nice to know that :)");
		}
		else
		{
	 user=mst.slice(4);
	 nameasked=true;
	 msg("Ok i'll remember that");
		}
	}
	   
	   else if(ms.substring(0,4)=="i am")
	   {
		if(ms.slice(5)=='a male'||ms.slice(5)=='male'||ms.slice(5)=='a boy'||ms.slice(5)=='boy'||ms.slice(5)=='a man'||ms.slice(5)=='man')
		{
			gender='m';
			msg("Ohh,You're a male");
		}
		else if(ms.slice(5)=='a female'||ms.slice(5)=='female'||ms.slice(5)=='a girl'||ms.slice(5)=='girl'||ms.slice(5)=='a woman'||ms.slice(5)=='woman'||ms.slice(5)=='women'||ms.slice(5)=='lady'||ms.slice(5)=='a lady')
		{
			gender='f';
			msg("Ooh, So nice to know that :)");
		}
		else
		{
		user=mst.slice(5);
		nameasked=true;
		msg("Ok i'll remember that");
		}
	}
	else if(ms.substring(0,21)=='how is the weather in')
	{
		wcity=mst.slice(22);
		msg("Checking weather in "+wcity+"...");
		getWeather(wcity);
	}
	else if(ms.substring(0,21)=='how is the weather at')
	{
		wcity=mst.slice(22);
		msg("Checking weather at "+wcity+"...");
		getWeather(wcity);
	}
	else if(ms.substring(0,10)=='weather at')
	{
		wcity=mst.slice(11);
		msg("Checking weather at "+wcity+"...");
		getWeather(wcity);
	}
	
	else
	{
	   msg("I did not get that\nIt is probably an error \nPlease comment this into comments section");/*Error Reply*/
	}
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
/*Message Empty*/
}
/*A.I. Engine Funtion End*/
}
/* Design (Visual part) functions*/
function msg(val)
{
 var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 var pr=document.createElement("pre");
 var txt=document.createTextNode(val);
	 pr.appendChild(txt);
	 dv.appendChild(pr);
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}
function recmsg(val)
{
 var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 var pr=document.createElement("pre");
 var txt=document.createTextNode(val);
	 pr.appendChild(txt);
	 dv.appendChild(pr);
	 if(lstch.classList.contains("snd"))
	{
		lstch.classList.add('sndfrst');
		lstch.classList.remove('snd');
		dv.classList.add('sndlast');
	}
  else if(lstch.classList.contains("sndlast"))
	{
	   lstch.classList.remove('sndlast');
	   lstch.classList.add('sndmid');
		dv.classList.add('sndlast');
	}
	else
	{
		dv.classList.add("snd");
	}
	 msgscr.appendChild(dv);
	 msgscr.scrollTop=msgscr.scrollHeight;
}
function msglink(label,link)
{
 var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 var pr=document.createElement("a");
 pr.href=link;
 pr.target="_blank";
 var txt=document.createTextNode(label);
	 pr.appendChild(txt);
	 dv.appendChild(pr);
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}
function msgImg(link,colour="#424242")
{
 var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 dv.style.backgroundColor=colour;
 var pr=document.createElement("img");
 pr.src=link;
	 dv.appendChild(pr);
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}



//Search Part
function msgSearch(val)
{
	var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 dv.style.backgroundColor='#F5F5F5';
 var frame = document.createElement('iframe');
 frame.style.border='none';
 frame.height='400px'; frame.src="https://www.bing.com/search?q="+val;
 dv.appendChild(frame);
	 
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}

function getWeatherC()
{
	var apikey="&APPID=10c7ae2e652286e50c3b79ebad11bc16";
	msg("Checking weather at your current location \n(Location may not be accurate)");
	var url="https://api.openweathermap.org/data/2.5/weather?&units=metric"+apikey+"&lat="+coord.replace(",","&lon=");
	$.getJSON(url, gotData).fail(function()
	{
	msg("I think you have provided\na wrong PIN code or city name\nas the name was not found in database");
	pinAsked=false;
	});
}
function getWeather(city)
{
	var apikey="&APPID=10c7ae2e652286e50c3b79ebad11bc16";
	var url="https://api.openweathermap.org/data/2.5/weather?q="+city+'&units=metric'+apikey;
	$.getJSON(url, gotData).fail(function()
	{
	msg("I think you have provided\na wrong PIN code or city name\nas the name was not found in database");
	pinAsked=false;
	});
}


function gotData(data)
{ 
   msg("City "+data.name);
   msg("Temperature is "+data.main.temp+" ℃");	 
   msg(data.weather[0].main+"【"+data.weather[0].description+"】");
   msgImg("https:"+"/"+"/openweathermap.org/img/w/"+data.weather[0].icon+".png","white");
   msg("Humidity is "+data.main.humidity+"%");
   msg("And Wind Speed is "+data.wind.speed+" Meter/sec");
   /*We don't really need Sunset and sunrise time right ?*/
   /*var myDate = new Date(data.dt *1000);
   var sunSet=new Date(data.sys.sunset*1000);
   var sunRise=new Date(data.sys.sunrise*1000);
 
   msg("Time :"+myDate);
   msg("SunSet :"+sunSet);
   msg("Sunrise :"+sunRise);*/
   pinAsked=false; 
}
function searchPopularNews()
{
	$.getJSON('https://newsapi.org/v2/top-headlines?apiKey=ce8de53037024e6a9d486a6d9ff4666f&country='+country_code+'&language=en&pageSize=3',gotNews);
}
function searchNews(keyword)
{
	$.getJSON('https://newsapi.org/v2/everything?q='+keyword+'&apiKey=ce8de53037024e6a9d486a6d9ff4666f&sortBy=publishedAt&language=en&pageSize=3',gotNews);
}
function gotNews(data)
{
	/*msgImg(data.articles[0].urlToImage);*/
	
	if(data.status==="ok")
	{
	if(data.totalResults===0)
	{
		msg("Sorry "+user+", No News was found\nrelated to this topic.");
	}
	else if(data.totalResults===1)
	{
		msgNews(data.articles[0].urlToImage,data.articles[0].title,data.articles[0].description,data.articles[0].source.name,data.articles[0].publishedAt,data.articles[0].url);
	   var msgscr=document.getElementById("msgarea");
msgscr.scrollTop=msgscr.scrollHeight-450;
	}
	else if(data.totalResults===2)
	{
	 msgNews(data.articles[0].urlToImage,data.articles[0].title,data.articles[0].description,data.articles[0].source.name,data.articles[0].publishedAt,data.articles[0].url);
msgNews(data.articles[1].urlToImage,data.articles[1].title,data.articles[1].description,data.articles[1].source.name,data.articles[1].publishedAt,data.articles[1].url);
var msgscr=document.getElementById("msgarea");
msgscr.scrollTop=msgscr.scrollHeight-900;
	}
	else
	{	
msgNews(data.articles[0].urlToImage,data.articles[0].title,data.articles[0].description,data.articles[0].source.name,data.articles[0].publishedAt,data.articles[0].url);
msgNews(data.articles[1].urlToImage,data.articles[1].title,data.articles[1].description,data.articles[1].source.name,data.articles[1].publishedAt,data.articles[1].url); msgNews(data.articles[2].urlToImage,data.articles[2].title,data.articles[2].description,data.articles[2].source.name,data.articles[2].publishedAt,data.articles[2].url);
var msgscr=document.getElementById("msgarea");
msgscr.scrollTop=msgscr.scrollHeight-1300;
}
}
else
{
	msg(data.message);
}
}

function searchYoutube(keyword)
{
	/*AIzaSyA-mvfhUsqL8zKXFufdFJV3DBkxQGcbu5w*/
	$.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&chart=mostPopular&key=AIzaSyBWBE1v4Z8qeoPOTlMRlhLnsJ0ROhkojMk&maxResults=3&videoSyndicated=true&safeSearch=strict&videoEmbeddable=true&type=video&q='+keyword.replace(" ","+"),gotDataVideos);
}
function searchYoutubeTrend()
{
	/*AIzaSyA-mvfhUsqL8zKXFufdFJV3DBkxQGcbu5w*/
	$.getJSON('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyBWBE1v4Z8qeoPOTlMRlhLnsJ0ROhkojMk&maxResults=3&type=video&regionCode='+country_code,gotDataVideos1);
}

 function gotDataVideos(data)
	{ 
	msgVideo(data.items[0].id.videoId,data.items[0].snippet.title);
	msgVideo(data.items[1].id.videoId,data.items[1].snippet.title);
	msgVideo(data.items[2].id.videoId,data.items[2].snippet.title);
	}
	function gotDataVideos1(data)
	{ 
	msgVideo(data.items[0].id,data.items[0].snippet.title);
	msgVideo(data.items[1].id,data.items[1].snippet.title);
	msgVideo(data.items[2].id,data.items[2].snippet.title);
	}
var jokes=["When I see lovers' names 💏\ncarved in a tree,\nI don't think it's sweet.💕\nI just think it's surprising\nhow many people bring a \nknife on a date.🔪🔪\n😂😂","👩‍⚕️Doctor:\"I'm sorry but you\nsuffer from a terminal\nillness and have only\n10 to live.\nPatient: What do you mean,\n10? 10 what?\nMonths? Weeks?!\nDoctor: Nine.","My old aunts would come\nand tease me at weddings,\n“Well Anvi? Do you\nthink you’ll be next?\nWe’ve settled this quickly\nonce I’ve started doing the\nsame to them at funerals.","An old grandma brings a busdriver 🚌\na bag of peanuts every day.\nFirst the bus driver enjoyed\nthe peanuts but after a\nweek of eating them he\nasked: \"Please granny,\ndon't bring me peanuts anymore.\nHave them yourself\"\nThe granny answers: \"You know, \nI don't have teeth anymore.\nI just prefer to suck the\nchocolate around them.\n🤢😂","Dentist: \“This will hurt a little.\”\nPatient: \“OK.\”\nDentist: \“I’ve been having an affair\nwith your wife for a while now.\”","I got another letter from\nthis lawyer today.📄\nIt said \“Final Notice\”.\nGood that he will not \nbother me anymore.","I dreamed 💭 I was forced\nto eat a giant marshmallow.\nWhen I woke up,\nmy pillow was gone.","An eskimo brings his\nfriend to his home for a visit.\nWhen they arrive,\nhis friend asks,puzzled:\n\“So where’s your igloo?\”\nThe friend replies\n\“Oh no, I must’ve left\nthe iron on…🔥🔥\”","Can you please hold\nmy hand?\"\nA mother asks her son:\n\"Anton, do you think\nI’m a bad mom?\"\nSon: \"My name is Paul.\"","Doctor: You're obese.\nPatient: For that I\ndefinitely want a second\nopinion.\nDoctor: You’re quite\nugly, too.","Two donkeys are standing\nat a roadside,\none asks the other:\nSo, shall we cross?\nThe other shakes his head:\n\"No way, look at\nwhat happened to the\nzebra.\"","Guest to the waiter:\n\“Can you bring me what\nthe lady at the next\ntable is having?\”\nWaiter: \“Sorry, sir,\nbut I’m pretty sure\nshe wants to eat it herself.\”","\"Mom, where do tampons go?\"\n\"Where the babies come\nfrom, darling.\"\n\"In the stork?\"","A husband and a wife\nsit at the table,\nhaving dinner.🍷🍽️\nThe woman drops a bit of\ntomato sauce on her\nwhite top.\n\"Oh no, I look\nlike a pig!🐷\"\nThe man nods,\"And you dropped\ntomato🍅 sauce on your top!\"","Husband: Wow, honey,\nyou look really different\ntoday.\nDid you do something\nto your hair?\nWife: Michael, I’m over here!","Boy complains to his\nfather,\"You told me to put a potato\nin my swimming trunks!\nYou said it would impress\nthe girls at the pool!\nBut you forgot to mention\none thing!\"\nFather:\"Really, what?\nBoy: \"That the potato should\ngo in the front.\"","One of the most wonderful\nthings in life is to wake up\nand enjoy a cuddle with\nsomebody;\nunless you are in prison.","One company owner asks\nanother: \“Tell me, Bill,\nhow come your employees\nare always on time🕖\nin the mornings?\”\nBill replies: \“Easy.\n30 employees and 20\nparking spaces.\”🚘","I used to breed rabbits.🐇🐰\nThen I realized they\ncan handle it themselves.","My dog is an awesome fashion adviser.\nEvery time I ask him\nwhat I look like in\nmy clothes, he says \“WOW!\”🐶🐕","Google request:\nHow to disable autocorrect\nin wife?","Dentist: \"You need a crown.\"\nPatient: \"Finally someone\nwho understands me\"","Why are eggs 🥚 not very\nmuch into jokes?\nBecause they could crack up.","What do you call the\nsoft tissue between a\nshark's teeth🦈?\n.\n.\n.\nA slow swimmer.","I went to see the doctor\nabout my short-term\nmemory problems.\nThe first thing the bastard\ndid was made me pay in\nadvance.💵","Women usually claim childbirth\nis the most painful experience\nof their lives.\nUntil they start stepping\non Legos approximately\nthree years later.","Mom! I’m a 3d printer!\nOh come on, Tommy,\nclose the door when\nyou poop.💩","Does your horse smoke?🐴🐎\nNo...\nWell, then I think\nyour stable is burning.🔥🔥"];

/*Showing result from YouTube Data*/
function msgVideo(val,name)
{
	var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 var ttl=document.createElement("p");
 dv.style.backgroundColor='red';
 dv.style.height="200px";
 dv.style.width="350px";
 dv.style.paddingLeft="0px";
 dv.style.paddingRight="0px";
 var frame = document.createElement('iframe');
 frame.style.width="350px";
 frame.style.height="240px"
 frame.style.borderRadius="5px 15px 15px 15px";
 frame.style.border='none';
 frame.setAttribute('allowFullScreen', '');
 frame.setAttribute('picture-in-picture','');
 frame.style.marginBottom="0px"; frame.src="https://youtube.com/embed/"+val;
 ttl.style.marginTop="0px";
 ttl.style.paddingBottom="2px";
 ttl.innerHTML=name;
 dv.appendChild(frame);
 dv.appendChild(ttl);
	 
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}


/*Showing result from news data*/
function msgNews(imgurl,heading,content,srcname,pubtime,url)
{
	var msgscr=document.getElementById("msgarea");
 var lstch=msgscr.lastElementChild;
 var dv=document.createElement("div");
 var img1=document.createElement("img");
 var ttl=document.createElement("h3");
 var con=document.createElement("p");
 var sname=document.createElement("p");
 var publ=document.createElement("p");
 var pwrd=document.createElement("p");
 var hl=document.createElement("hr");
 var lnk=document.createElement("a");
 lnk.href=url;
 lnk.target="_blank";
 hl.style.paddingLeft="0px";
 hl.style.paddingRight="0px";
 hl.style.marginTop="0px";
 hl.style.marginBottom="0px";
 dv.style.backgroundColor='white';
 dv.style.height="200px";
 dv.style.width="350px";
 dv.style.paddingLeft="0px";
 dv.style.paddingRight="0px";
 dv.style.marginTop="2px";
 img1.src=imgurl;
 img1.style.width="350px";
 img1.style.height="200px";
 img1.style.paddingLeft="0px";
 img1.style.paddingRight="0px";
 img1.style.borderRadius="5px 15px 15px 15px";
 if(imgurl===null)
 {
	 img1.alt="Image not provided by the Publisher :(";
	 img1.style.height="25px";
 }
lnk.appendChild(img1);
con.innerHTML=content+"<a href="+url+">Read more..</a>";
/*.substring(0,content.lastIndexOf('['))*/
 ttl.style.marginTop="0px";
 ttl.innerHTML=heading;
 ttl.style.marginBottom="0px";
 con.style.marginTop="2px";
 con.style.paddingLeft="0px";
 con.style.paddingRight="0px";
 con.style.marginTop="0px";
 con.style.marginBottom="0px";
 sname.innerHTML="Source:- <b>"+srcname+"</b>";
 sname.style.fontStyle="italic";
 sname.style.paddingLeft="0px";
 sname.style.paddingRight="0px";
 sname.style.marginTop="0px";
 sname.style.marginBottom="0px";
 publ.innerHTML="Published on: "+pubtime.substring(0,19).replace("T"," At: ");
 publ.style.paddingLeft="0px";
 publ.style.paddingRight="0px";
 publ.style.marginTop="0px";
 publ.style.marginBottom="0px";
 pwrd.innerHTML="Powered By News API";
 pwrd.style.paddingLeft="0px";
 pwrd.style.paddingRight="0px";
 pwrd.style.marginTop="0px";
 pwrd.style.marginBottom="4px";
 dv.appendChild(lnk);
 dv.appendChild(ttl);
 dv.appendChild(con);
 dv.appendChild(hl);
 dv.appendChild(sname);
 dv.appendChild(publ);
 dv.appendChild(pwrd);
	 
	if(lstch.classList.contains("rec"))
	{
		lstch.classList.add('recfrst');
		lstch.classList.remove('rec');
		dv.classList.add('reclast');
	}
  else if(lstch.classList.contains("reclast"))
	{
	   lstch.classList.remove('reclast');
	   lstch.classList.add('recmid');
		dv.classList.add('reclast');
	}
	else
	{
		dv.classList.add("rec");
	}
	
	msgscr.appendChild(dv);
	msgscr.scrollTop=msgscr.scrollHeight;
}


function getLocation()
{
	$.getJSON('https://ipinfo.io', function(data)
	{
	country_code = data.country; wcity=data.city+","+data.region+","+data.country;  
	coord=data.loc;
	});
}
/*Clock App*/
function clockTick()
{
	clockTimer=setInterval(tick,1000);
	var hr,mn,sc,amp;
	function tick()
	{
		var time=new Date();
		if(time.getHours()<12)
		{
			amp="AM";
			if(time.getHours()<10)
			{
				hr="0"+time.getHours()+":";
			}
			else
			{
				hr=time.getHours()+":";
			}
		}
		else if(time.getHours()==12)
		{
			amp="PM";
			hr=time.getHours()+":";
		}
		else
		{
			amp="PM";
			if(time.getHours()<22)
			{
				hr="0"+time.getHours()%12+":";
			}
			else
			{
				hr=time.getHours()%12+":";
			}
		}
		
		
		
if(time.getMinutes()<10)
{
	mn="0"+time.getMinutes()+":";
}
else
{
	mn=time.getMinutes()+":";
}
if(time.getSeconds()<10)
{
	sc="0"+time.getSeconds();
}
else
{
	sc=time.getSeconds();
}
document.getElementById("hour").innerHTML=hr;
document.getElementById("minute").innerHTML=mn;
document.getElementById("sec").innerHTML=sc;
document.getElementById("amp").innerHTML=amp;
document.getElementById("date").innerHTML=time.toDateString(); 
document.getElementById("center").style.display="block";
	}
}
/*Closing the clock*/
function hideclock()
{
	clearInterval(clockTimer);
	document.getElementById("center").style.display="none";
	msg('Did you just closed the Clock?');
}

/*Random message from array*/
function msgRandom(arr)
{
  var randomNo = Math.floor(Math.random() * (arr.length));
   msg(arr[randomNo]);
}

/*Love Calculator*/
function calcLove(name)
{
	var fName;
	var lName;
	if(name=="")
	{
		msg("But you didn't told me the\nname of your bf or gf");
	}
	else
	{
		if(name.includes(" "))
		{
		  fName=name.substring(0,name.lastIndexOf(" "));
		  lName=name.slice(name.lastIndexOf(" ")+1);
		  $.ajax({
		  url: "https://love-calculator.p.rapidapi.com/getPercentage?fname="+fName+"&sname="+lName,
		  type: 'GET',
		  dataType: 'json',
		  success: function(data) 
		  { 
			  msg("😍♥️❤️ Love :"+ data.percentage+" % 💓💘💝 ");
			  msg(data.result); 
			  
		  },
		  error: function() 
		  { 
			  msg('Oops! You have a bad luck'); 
			  
		  },
		  beforeSend: setHeader
		  });
		  function setHeader(xhr) 
		  {
		  xhr.setRequestHeader("X-RapidAPI-Key", "8199baa577msh22af3ffc235ccfcp1907d7jsn3b70f37e92a5");
		  }
		
		}
		else
		{
			msg("Please enter the full name.");
		}
	}
	
}

//February 2022 Update: After 3 years i am back on this platform and i can't believe i did all this code on my phone with broken screen 😮, i am an Assistant System Engineer now at a company ✌🏻

//July-2023 Update: at this point of time, i have a proper job as a System Engineer, don't get enough time for any hobbies or personal project, I sometimes install Sololearn and watch my own codes, and just think back how free and happy i was. I code a lot even now, but the projects are boring and not what i want but what clients and projects requires. Money is good though 🙂
