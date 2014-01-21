module.exports = {
	url: "mongodb://heroku_app19524016:Wickedgame5@ds053658.mongolab.com:53658/heroku_app19524016",
	user: "heroku_app19524016",
	pass: "Wickedgame5", // frouviAtR6Avieph
	apiKey: "DLKi185eTr62bzKX4EwEXxR5BLBPEfyy",
	data: {
    "header": "Michael Brewer",
    "subHeader": "Full stack developer for hire.",
    "contact": [
      {
        "img": "./img/blogger.png",
        "text": "blog",
        "url": "http://michaelgeekbrewer.blogspot.com"
      },
      {
        "img": "./img/gmail.png",
        "text": "email",
        "url": "mailto:michael.keith.brewer@gmail.com"
      },
      {
        "img": "./img/android-phone.png",
        "text": "mobile 310-420-5285",
        "url": "tel:310-420-5285"
      },
      {
        "img": "./img/linkedin.png",
        "text": "linkedin",
        "url": "http://www.linkedin.com/pub/michael-brewer/7/1bb/201/"
      }
    ],
		"bodySections": [
			{
				"title": "OBJECTIVES",
				"subTitle": "what i want",
				"body": "Transition my career path to focus more on full stack development with an emphasis on API building. Seeking a company working with a cutting edge technology stack and have need for developers who can wear multiple hats. This company will describe itself with words like 'agile' or 'scrum' and team members work tightly together throughout the development cycle. Pair programming may be utilized often and remote working may be encouraged.",
        "items": []
			},
			{
				"title": "DEVELOPMENT",
				"subTitle": "what i use",
				"body": "",
        "items": [
					{"itemName": "Notepad++", "itemDetail": "for all non-.Net development"},
					{"itemName": "balsimiq", "itemDetail": "for UI mockups"},
					{"itemName": "Node.js", "itemDetail": "for years I wished JavaScript could be used for more than just web pages. Node was the fulfillment of that wish. Great for client and server code sharing"},
					{"itemName": "MongoDB", "itemDetail": "when data should be contained within other data"},
					{"itemName": "MS SQL", "itemDetail": "when analytical reporting will be important"},
					{"itemName": "Knockout.js", "itemDetail": "for the great MVVM pattern"},
					{"itemName": "Moca.js", "itemDetail": "for unit testing framework"},
					{"itemName": "Expect.js", "itemDetail": "for self-descriptive unit tests"},
					{"itemName": "Zombie.js", "itemDetail": "for client-side unit tests"},
					{"itemName": "Git", "itemDetail": "for source control"},
					{"itemName": "Heroku", "itemDetail": "for easy operations management and performance scaling with dead simple deployment using Git pushes"},
					{"itemName": "Anonymous Pro", "itemDetail": "an attarctive font that makes it easier to stare at the screen for hours at a time"},
					{"itemName": "Visual Studio", "itemDetail": "the all-around best IDE"},
					{"itemName": "MS Access", "itemDetail": "a great tool for prototyping and building tools"}
				]
			},
			{
				"title": "LEARNING",
				"subTitle": "what i am exploring",
				"body": "",
        "items": [
					{"itemName": "Functional Programming", "itemDetail": "a different way of writing code than what I have been trained in"},
					{"itemName": "Ruby", "itemDetail": "highly popular, I want to understand the hype"},
					{"itemName": "PhoneGap", "itemDetail": "holds promise of reaching more users with the same code base"},
					{"itemName": "Chinese", "itemDetail": "probably one of the hardest things I have ever attempted"}
				]
			},
			{
				"title": "PERSONALITY",
				"subTitle": "about me",
				"body": "I have been fortunate in having a passion that translates into a day job. I am equally entertained by playing games with friends or solving a coding challenge. I keep up with science news, but tend to be the last to hear about anything else going on. I love reading novels. Mostly fantasy, but also some horror and scifi. I am currently finishing the Game of Thrones series and will be reading more Disc world next. My favorite podcasts are Skeptics Guide to the Universe, This Week in Virology, and Philosophize This. I bike, run, rock climb, fence, and CrossFit. I also eat lots of chocolate.",
        "items": []
			}
		],
    "workHistory":{
			"nodes": [
				{//0
					"label": "Operations DB",
					"projectName": "Operis",
					"description": "This is my current project at the office. I have been tasked with creating an application that can simplify the life of our information system auditors -  keeping track of big data regarding network vulnerability scans, reporting vulnerabilities to systems managers, and tracking remediation plans. I am building this application on Node with the frontend managed by Knockout and the data stored in MongoDB. This project is currently undergoing prototyping and detailed requirements gathering.",
					"url": "",
					"links": [ "MongoDB", "Node.js", "Knockout.js" ],
					"class": "node",
					"x": 633, "y": 363
				},
				{//1
					"label": "Tracking DB",
					"projectName": "Compliance Tracking Database",
					"description": "A complete rebuild of an MS Access based tool to track auditing issues, contacts, and work tasks. I normalized the data and added lots of new features to improve system robustness and enhance the UX (all using VBA): keyword indexing; separated front end and backend; automated backups; automated and seamless updates to front end; automatic user recognition using Windows authenticated user; field highlighting and form validation; record level security; creation of detailed, rules driven, domain specific forms to evaluate auditing requirements; and an automated metrics reporting system that generated Word and Excel files for distribution and oversight committee meetings. One major challenge this system presented was the management of 10-20 users utilizing the system at one time. We experienced major slow downs with MS Access when more than one user had the database open. The slowness varied from machine to machine, but some were so bad as to cause a per-click delay of 10 seconds! I iteratively went through progressively complex improvements that reduced the problem - localized lookup tables, caching data, and unbound forms. In the end I advocated for some additional server resources and was able to upgrade the backend to a MS SQL Server, which removed the problem entirely.",
					"url": "",
					"links": [ "VBA", "MS SQL Server", "MS Access" ],
					"class": "node",
					"x": 661, "y": 283
				},
				{//2
					"label": "Inspections DB",
					"projectName": "Laboratory Hazard Assessment Tool",
					"description": "Upgraded a vendor built laboratory inspection tracking and reporting system. The application was an aging black box proprietary website and My SQL database supported by internal applications. The support tools were actively maintained and regularly improved by the vendor, but the customer-facing website was not very user friendly and had an outdated feel. Contractual limits with the vendor meant the website would not be upgraded in the foreseeable future. My task was to make a new website that would work with the existing backend system. The biggest challenge for this project was to reverse engineer the database - over 1000 tables with lots of interaction between tables and only marginal data normalization. We built our website with VB.NET and integrated it with our Active Directory and other databases located in Oracle. Our user authentication was handled by Shibboleth. When the project was finished, we gave a demonstration of it to the vendor and shared portions of our source code with them. I worked with one other developer on the project, using paired programming for the majority of the project duration.  Paired programming was a great experience and I feel that we not only produced excellent quality code as a result, but that both of us learned a great deal from one another .",
					"url": "",
					"links": [ "My SQL", "Oracle", "PL/SQL", "VB.NET", "Visual Studio", "Shibboleth" ],
					"class": "node",
					"x": 647, "y": 202
				},
				{//3
					"label": "SOPs DB",
					"projectName": "Standard Operating Procedures Database",
					"description": "The SOP database contains detailed information about safely handling many different chemicals. I was responsible for creating a system that would index keywords from the uploaded Word documents and then allow users to search for documents. I implemented a fuzzy word search using Damerau-Levenshtein distance, as many chemicals have complex names and could easily be misspelled by the user. I also aided in the CSS and layout of the site.",
					"url": "http://www.sop.ehs.ucla.edu/",
					"links": [ "PL/SQL", "VB.NET", "Visual Studio", "Damerau-Levenshtein Distance" ],
					"class": "node",
					"x": 600, "y": 135
				},
				{//4
					"label": "Overtime",
					"projectName": "Overtime Tracking and Reporting",
					"description": "Administrative staff had been tracking field worker overtime through a burdensome paper based system. Recognizing this problem, I volunteered my time and built an excel based solution that made extensive use of VBA and array formulas to coallate data from multiple tabs and automatically print summary reports.",
					"url": "",
					"links": [ "VBA", "Excel Array Formulas" ],
					"class": "node",
					"x": 524, "y": 110
				},
				{//5
					"label": "Biometric DB",
					"projectName": "Police Department Biometric Security System",
					"description": "I aided in requirements gathering and system setup for a door access system to the University Police Department. The backend system was hosted by MS SQL Server Express, which I investigated data encryption and developed a backup solution that the vendor software lacked. Once the system had been setup, I provided training and SOPs for the end user.",
					"url": "",
					"links": [ "MS SQL Server Express" ],
					"class": "node",
					"x": 446, "y": 126
				},
				{//6
					"label": "Inventory",
					"projectName": "Tool Crib Inventory",
					"description": "The inventory management system for our Facilities Management Tool Crib was outdated and largely paper based, so I was tasked with implementing the inventory management software selected by management. (CribMaster.) I customized the MS Access based solution and built many reports for daily operations as well as management metrics reports. I organized the first full inventory count for the Tool Crib and established the annual inventory counting process using WinCE devices and Datasplice. I developed processes to partially automate barcode labeling and improved time spent processing tool rentals and returns. My solution proved successful in tracking thousands of items and over $100 k worth of tools coming and going from the Tool Crib on a daily basis. I interfaced the system with HR to improve off boarding procedures, ensuring all tools checked out to an individual were returned. I also interfaced with our enterprise work order management system to improve reporting of resources allocated to jobs.",
					"url": "",
					"links": [ "MS Access", "MS SQL CE", "Datasplice", "Crystal Reports XI", "Cognos Reports" ],
					"class": "node",
					"x": 379, "y": 172
				},
				{//7
					"label": "Planroom",
					"projectName": "Construction Documents Database",
					"description": "This was my first job ever. I was hired on as an intern after I had taken only a few programming classes. My task was to improve an Access DB. I still remember sitting down on my first day and asking myself \"what is a table?\" From there I quickly learned and enhanced the workflow for data entry into the database such that performance was improved by a factor of 10. I used a combination of VBA and AutoHotKey macros to accomplish this. I also built an ASP website that provided customers with full text search of database records and document downloads.",
					"url": "http://www.bidamerica.com/",
					"links": [ "ASP", "JavaScript", "MS Access", "VBA", "AutoHotKey Script" ],
					"class": "node",
					"x": 347, "y": 249
				},
				{//8
					"label": "Portfolio",
					"projectName": "Personal Resume and Portfolio Web Page",
					"description": "Most recently, I built this portfolio site both because I felt it would be a great way to show off my talents and also because I thought having a force directed graph as a workhistory / personal story would be pretty awesome. (I haven't seen this done before in my survey of zero sites, so I had to get it done to be the first!) I built this site on Node with Knockout.js and Mongo DB. The graph is made with D3.js and the basic HTML started off as a Boilerplate template.",
					"url": "http://ihazco.de",
					"links": [ "JavaScript", "Node.js", "MongoDB", "Knockout.js", "Boilerplate", "D3.js" ],
					"class": "node",
					"x": 465, "y": 414
				},
				{//9
					"label": "2d Graphics",
					"projectName": "Random Asteroid Generator",
					"description": "I built a simple toy that simulates a 2d asteroid field. Your mouse or touches act like gravity wells, sucking in nearby asteroids. I built this as an experiment with the HTML5 canvas element and to learn about particle systems. This is a standard HTML5 one page app using JavaScript. More details are available on a series of posts on my blog <a href\"http://michaelgeekbrewer.blogspot.com/search/label/HTML5\">here</a>.",
					"url": "https://googledrive.com/host/0BzvmTZbSfWLoQjhvUWZVczhxaUU/app_20130716.html?mode=asteroids",
					"links": [ "HTML5 Canvas", "JavaScript", "Particle Systems", "Normal Map" ],
					"class": "node",
					"x": 420, "y": 344
				},
				{//10
					"label": "Particles",
					"projectName": "Particle Painter",
					"description" : "I wanted to learn about particle systems and explore the HTML5 canvas as a potential tool for graphic rich apps. The result is this little toy with 100k particles swimming around on the full-page canvas. You can read more about it on my blog <a href=\"http://michaelgeekbrewer.blogspot.com/2013/07/exploring-particle-effects.html?updated-min=2013-01-01T00:00:00-08:00&updated-max=2014-01-01T00:00:00-08:00&max-results=21\">here</a>.",
					"url": "http://michaelgeekbrewer.blogspot.com/2013/07/exploring-particle-effects.html",
					"links": [ "HTML5 Canvas", "JavaScript", "Particle Systems" ],
					"class": "node",
					"x": 468, "y": 344
				},
				{//11
					"label": "Evolving DNA",
					"projectName": "Iterated Prisoners Dilemma Genetic Algorithm",
					"description": "Over the winter break at the end of 2009 I became interested in the strange behavior of spiders and praying mantis where the female will cannibalize the male after mating. (Called 'Sexual Cannibalism'.) What a brutal act - certainly not something I would encourage my wife to do! I did some research into the current scientific understanding of sexual cannibalism and found that there are several hypothesizes, each with supporting empirical and observational evidence. I could not find any research that attempted to simulate the potential environmental situations that are hypothesized to lead to sexual cannibalism, so I began writing my own simulation.\n<br/>This was a massive undertaking. I invested many many hours to additional research, writing code and analyzing simulation results. I wrote the application in C++. It is a simple console app that works with comma separated text files to save the simulation results and incremental progress reports.",
					"url": "https://sites.google.com/site/michaelgeekbrewer/home/ipdga",
					"links": [ "C++", "Statistical Hypothesis Testing", "Genetic Algorithm", "Visual Studio"],
					"class": "node",
					"x": 540, "y": 309
				}
			],
			"links": [
				{"source":0, "target":1, "class":"nodelink"},
				{"source":1, "target":2, "class":"nodelink"},
				{"source":2, "target":3, "class":"nodelink"},
				{"source":3, "target":4, "class":"nodelink"},
				{"source":4, "target":5, "class":"nodelink"},
				{"source":5, "target":6, "class":"nodelink"},
				{"source":6, "target":7, "class":"nodelink"},
				{"source":8, "target":9, "class":"nodelink"},
				{"source":9, "target":10, "class":"nodelink"},
				{"source":10, "target":11, "class":"nodelink"}
			]
		}
	}
}
