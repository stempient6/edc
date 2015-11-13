
//console.log(name.length);
var name = prompt('what is your name?');
//  	console.log(p)
// 	console.log(typeof p)
	sign = 0,
	Aries = "<h2>Aries</h2><p><strong> March 21-April 19</strong> <br>Today's Full Moon in Taurus generates monetary pressure that may have you suffering from financial anxiety. No need to sweat. Focus on your work, but don't take on more than you can handle. Why not buy everyone a treat? Or simply be very friendly and helpful. Make an effort to get to know fellow workers better and to build up a h2er rapport between you.</p>",
	Taurus = "<h2>Taurus</h2><p><strong> April 20-May 20</strong> <br>Get set for a significant fortnight, courtesy of today's Full Moon in your sign. It's telling you to examine every aspect of your life and to make some constructive changes to it. You need to say goodbye to any aspects of your life that no longer serve you properly. This could involve anything from starting a serious health regime to chucking out any clothes that you no longer wear. But don't underestimate the power of this Full Moon!</p>",
	Gemini = "<h2>Gemini</h2><p><strong> May 21-June 21</strong><br>There's a Full Moon today which will affect the most private and hidden side of your life until early November. This means that something you've been trying to keep a secret could finally come to light, completely altering your life in the process. This will also be the ideal opportunity to get to grips with something that you've been putting off, because you'll feel so much better once you've got it out of the way.</p>",
	Cancer = "<h2>Cancer</h2><p><strong> June 22-July 22</strong><br> The best way to strengthen a relationship right now is to talk to one another. It's no good making assumptions about what you need and want from each other, because you may be completely off-beam. Instead, you need to talk things through, preferably face-to-face, so you both know where you stand. Such a conversation will be amazingly productive and therapeutic.</p>",
	Leo = "<h2>Leo</h2><p><strong> July 23-August 22</strong><br> There's a Full Moon today, which means your career and long-term goals will be going through some changes during the next few weeks. You might decide that one plan is no longer valid and must be scrapped for something more exciting, or you could achieve huge success when you finally accomplish something you've wanted to do for a long time.</p>",
	Virgo = "<h2>Virgo</h2><p><strong> August 23-September 22</strong><br> There's an emotional rapport between you and someone today and it does your heart good. Don't expect fulsome declarations of undying love because you'll be disappointed. Instead, there will be the chance to increase your understanding of one another and to appreciate your relationship's many strengths.</p>",
	Libra = "<h2>Libra</h2><p><strong> September 23-October 22</strong><br> The Full Moon will have a big impact on your financial situation during the next few weeks, especially if you've been ignoring some unpleasant facts recently. It's time to take stock of where you stand materially, not only with your personal bank account but also over your tax affairs, your savings and, if you have one, your mortgage. Look at the facts and see if you can improve them in some way.</p>",
	Scorpio = "<h2>Scorpio</h2><p><strong> October 23 - November 21</strong><br> Today's Full Moon will affect your relationships during the next few weeks. This means you may realize that the connection between you and a partner is slipping and needs some urgent attention. Alternatively, you might team up with someone and discover that it's the best thing you've done in a long while.</p>",
	Sagittarius = "<h2>Sagittarius</h2><p><strong> November 22-December 21</strong><br> If you need someone's support you've certainly got it. They're ready and willing to stand by you and help in any way you need. All you have to do is ask. But remember what they've done so you can return the favor another time. If you're going shopping today you'll be interested in buying items that will increase your status or enhance your image in some way.</p>",
	Capricorn = "<h2>Capricorn</h2><p><strong> December 22-January 19</strong><br> Someone dear to your heart has some interesting information for you, dear Goaties. They'll tell you something that really sets you thinking or that even acts as a moral beacon for you. You could also become fascinated by a spiritual, religious or political quest to make the world a better place, and will wonder how you can do your bit to help.</p>",
	Aquarius = "<h2>Aquarius</h2><p><strong> January 20-February 18</strong><br> Today's Full Moon is telling you to make some changes to your home life during the next few weeks. Maybe you've been toying with the idea of moving house and you'll soon start to see all the reasons why this is such a good plan. You may have to say goodbye to a member of the family, or relinquish a painful memory once and for all.</p>",
	Pisces = "<h2>Pisces</h2><p><strong> February 19-March 20</strong><br> You have the chance to build up a h2 emotional rapport with someone special today, so don't miss it. You need to put in a little spadework with this person first, especially if things are often rather strained between you, but the results will be more than worth it. You might also reach a new understanding with a friend or your other half. It's a good day!</p>";

       
//console.log(name);
if(name === 'null' || name === ''){
	//console.log("They clicked the cancle button")
	document.write('HEY! You suck!');
}else{
	sign = prompt('What is your sign?')
	}if(sign === 'Aries'){		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Aries)
	}
	else if(sign === 'Taurus'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Taurus)
	}else if(sign === 'Gemini'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Gemini)
	}else if(sign === 'Cancer'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Cancer)
	}else if(sign === 'Leo'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Leo)
	}else if(sign === 'Virgo'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Virgo)
	}else if(sign === 'Libra'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Libra)
	}else if(sign === 'Scorpio'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Scorpio)
	}else if(sign === 'Sagittarius'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Sagittarius)
	}else if(sign === 'Pisces'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Pisces)
	}else if(sign === 'Capricorn'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Capricorn)
	}else if(sign === 'Aquarius'){
		
		document.write("<h1>Hello " + name + ", Your horoscope for today is: </h1><br>" + Aquarius)
	}else{
		document.write("<h1>Hello " + name + ", You have no horoscope")
	}




//Data Types
//boolean: true false
//string: anything inside quotes
//Integer: Number
//Float: number with decimal
//Array: List of things - []
//Object: collection of properties and values - {}