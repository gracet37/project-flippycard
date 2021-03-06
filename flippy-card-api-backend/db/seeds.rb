# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user_one = User.create(name: "Grace")

chinese = Deck.create(category: "Chinese", user_id: user_one.id, score: 0, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJoHyPwDbIHWN2Xr7_ywst2zT2FslWeb7f-IlXshuZrMfsS4_Z")
spanish = Deck.create(category: "Spanish", user_id: user_one.id, score: 0, img_url: "https://previews.123rf.com/images/steinar14/steinar141703/steinar14170300153/74617655-a-vector-travel-concept-spain-flat-style-colorful-cartoon-illustration-.jpg")
german = Deck.create(category: "German", user_id: user_one.id, score: 0, img_url: "https://media.istockphoto.com/vectors/cartoon-character-saying-hello-and-welcome-in-german-vector-id624129918")
french = Deck.create(category: "French", user_id: user_one.id, score: 0, img_url: "https://media.istockphoto.com/vectors/cartoon-character-saying-hello-and-welcome-in-french-vector-id624129804")
japanese = Deck.create(category: "Japanese", user_id: user_one.id, score: 0, img_url: "https://thumbs.dreamstime.com/b/vector-illustration-japanese-language-national-flag-japan-two-hand-drawn-doodle-speech-bubbles-written-name-109521191.jpg")
maori = Deck.create(category: "Maori", user_id: user_one.id, score: 0, img_url: "https://thumbs.dreamstime.com/z/vector-illustration-cartoon-character-saying-hello-welcome-maori-vector-illustration-cartoon-character-saying-hello-117720184.jpg")
romanian = Deck.create(category: "Romanian", user_id: user_one.id, score: 0, img_url: "https://st4.depositphotos.com/5966606/19761/v/1600/depositphotos_197616634-stock-illustration-vector-illustration-cartoon-character-saying.jpg")
nzslang = Deck.create(category: "Bonus: NZ Slang", user_id: user_one.id, score: 0, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRacc5fIas18x05fD1Kn4RzsnoLk9U9OnGBJe1Kj6DpXNfQWs-M")



Card.create(english: "Hello", foreign: "你好 (nǐ hǎo)", deck_id: chinese.id, complete: false)
Card.create(english: "Thank You", foreign: "谢谢 (xiè xie)", deck_id: chinese.id, complete: false)
Card.create(english: "How are you?", foreign: "你好吗? (nǐ hǎo ma)", deck_id: chinese.id, complete: false)
Card.create(english: "I'm Sorry", foreign: "对不起 (duì bu qǐ)", deck_id: chinese.id, complete: false)
Card.create(english: "Where is the bathroom?", foreign: "洗手间在哪里？(xǐ shǒu jiān zài nǎ lǐ?)", deck_id: chinese.id, complete: false)
Card.create(english: "Good Morning", foreign: "早 (zǎo)", deck_id: chinese.id, complete: false)
Card.create(english: "Good Evening", foreign: "晚安 (wǎnān)", deck_id: chinese.id, complete: false)
Card.create(english: "GoodBye", foreign: "再见 (Zàijiàn)", deck_id: chinese.id, complete: false)
Card.create(english: "How much?", foreign: "多少钱 (Duōshǎo qián)", deck_id: chinese.id, complete: false)
Card.create(english: "Cat", foreign: "够 (Māo)", deck_id: chinese.id, complete: false)
Card.create(english: "Dog", foreign: "猫 (Gǒu)", deck_id: chinese.id, complete: false)
Card.create(english: "Father", foreign: "爸爸 (Bàba)", deck_id: chinese.id, complete: false)
Card.create(english: "Mother", foreign: "妈妈 (Māmā)", deck_id: chinese.id, complete: false)
Card.create(english: "School", foreign: "学校 (Xuéxiào)", deck_id: chinese.id, complete: false)
Card.create(english: "Homework", foreign: "作业 (zuòyè)", deck_id: chinese.id, complete: false)
Card.create(english: "Hamburger", foreign: "汉堡包 (Hànbǎobāo)", deck_id: chinese.id, complete: false)
Card.create(english: "America", foreign: "美国 (Měiguó)", deck_id: chinese.id, complete: false)
Card.create(english: "China", foreign: "中国 (Zhōngguó)", deck_id: chinese.id, complete: false)
Card.create(english: "Excuse Me", foreign: "不好意色 (Bù hǎoyì sè)", deck_id: chinese.id, complete: false)
Card.create(english: "You're Pretty", foreign: "你很漂亮 (Nǐ hěn piàoliang)", deck_id: chinese.id, complete: false)
Card.create(english: "Cool Guy", foreign: "帅哥 (Shuàigē)", deck_id: chinese.id, complete: false)

Card.create(english: "Hello", foreign: "Hola", deck_id: spanish.id, complete: false)
Card.create(english: "Love", foreign: "Amor", deck_id: spanish.id, complete: false)
Card.create(english: "Happiness", foreign: "Felicidad", deck_id: spanish.id, complete: false)
Card.create(english: "Cat", foreign: "Gato", deck_id: spanish.id, complete: false)
Card.create(english: "Dog", foreign: "Perro", deck_id: spanish.id, complete: false)
Card.create(english: "Smile", foreign: "Sonreír", deck_id: spanish.id, complete: false)
Card.create(english: "Yes", foreign: "Sí", deck_id: spanish.id, complete: false)
Card.create(english: "Thank You", foreign: "Gracias", deck_id: spanish.id, complete: false)
Card.create(english: "Good-bye", foreign: "Adiós", deck_id: spanish.id, complete: false)
Card.create(english: "Good Morning", foreign: "Buenos días.", deck_id: spanish.id, complete: false)
Card.create(english: "Good afternoon", foreign: "Buenas tardes.", deck_id: spanish.id, complete: false)
Card.create(english: "Good evening", foreign: "Buenas noches", deck_id: spanish.id, complete: false)
Card.create(english: "What is your name?", foreign: "¿Cómo se llama usted?", deck_id: spanish.id, complete: false)
Card.create(english: "How are you?", foreign: "¿Cómo está usted?", deck_id: spanish.id, complete: false)
Card.create(english: "I am fine", foreign: "Estoy bien", deck_id: spanish.id, complete: false)
Card.create(english: "See you later", foreign: "Hasta luego", deck_id: spanish.id, complete: false)
Card.create(english: "Please", foreign: "Por favor", deck_id: spanish.id, complete: false)
Card.create(english: "I'm Sorry", foreign: "Lo siento", deck_id: spanish.id, complete: false)
Card.create(english: "I do not understand", foreign: "Yo no comprendo", deck_id: spanish.id, complete: false)
Card.create(english: "You're welcome", foreign: "De nada", deck_id: spanish.id, complete: false)
Card.create(english: "How much does it cost?", foreign: "¿Cuánto cuesta?", deck_id: spanish.id, complete: false)

Card.create(english: "Good morning", foreign: "Guten Morgen", deck_id: german.id, complete: false)
Card.create(english: "Hello", foreign: "Hallo", deck_id: german.id, complete: false)
Card.create(english: "Thank you", foreign: "Danke", deck_id: german.id, complete: false)
Card.create(english: "Please", foreign: "Bitte", deck_id: german.id, complete: false)
Card.create(english: "Good evening", foreign: "Guten Abend", deck_id: german.id, complete: false)
Card.create(english: "Day", foreign: "der Tag", deck_id: german.id, complete: false)
Card.create(english: "Week", foreign: "die Woche", deck_id: german.id, complete: false)
Card.create(english: "Month", foreign: "der Monat", deck_id: german.id, complete: false)
Card.create(english: "Welcome", foreign: "Wilkommen", deck_id: german.id, complete: false)
Card.create(english: "See you later", foreign: "Bis bald", deck_id: german.id, complete: false)
Card.create(english: "Thanks a lot", foreign: "vielen Dank", deck_id: german.id, complete: false)
Card.create(english: "Sorry", foreign: "Entschuldigung", deck_id: german.id, complete: false)
Card.create(english: "dog", foreign: "der Hund", deck_id: german.id, complete: false)
Card.create(english: "cat", foreign: "die Katze", deck_id: german.id, complete: false)
Card.create(english: "house", foreign: "das Haus", deck_id: german.id, complete: false)
Card.create(english: "car", foreign: "das Auto", deck_id: german.id, complete: false)
Card.create(english: "train", foreign: "der Zug", deck_id: german.id, complete: false)
Card.create(english: "city", foreign: "die Stadt", deck_id: german.id, complete: false)
Card.create(english: "bird", foreign: "der Vogel", deck_id: german.id, complete: false)
Card.create(english: "student (university)", foreign: "der Student/die Studentin", deck_id: german.id, complete: false)
Card.create(english: "student (grade school)", foreign: "der Schüler/die Schülerin", deck_id: german.id, complete: false)

Card.create(english: "Hello", foreign: "こんにちは (konnichiwa)", deck_id: japanese.id, complete: false)
Card.create(english: "Thank you", foreign: "ありがとありがとう（ございます）arigato (gozaimasu)", deck_id: japanese.id, complete: false)
Card.create(english: "Sorry/excuse me", foreign: "すみません (sumimasen)", deck_id: japanese.id, complete: false)
Card.create(english: "Nice to meet you", foreign: "よろしくお願いします　(yoroshiku onegaishimasu)", deck_id: japanese.id, complete: false)
Card.create(english: "yes", foreign: "はい (hai)", deck_id: japanese.id, complete: false)
Card.create(english: "Good morning", foreign: "おはいよございますおはいよございます (ohaiyogozaimasu)", deck_id: japanese.id, complete: false)
Card.create(english: "Good evening", foreign: "こんばんはこんばんは (konbanwa)", deck_id: japanese.id, complete: false)
Card.create(english: "fish", foreign: "魚 (sakana)", deck_id: japanese.id, complete: false)
Card.create(english: "meat", foreign: "肉 (niku)", deck_id: japanese.id, complete: false)
Card.create(english: "rice", foreign: "ご飯 (gohan)", deck_id: japanese.id, complete: false)
Card.create(english: "vegetables", foreign: "野菜 (yasai)", deck_id: japanese.id, complete: false)
Card.create(english: "please", foreign: "お願いします (onegaishimasu)", deck_id: japanese.id, complete: false)
Card.create(english: "convenience store", foreign: "コンビニ (konbini)", deck_id: japanese.id, complete: false)
Card.create(english: "computer", foreign: "パソコン (pasokon)", deck_id: japanese.id, complete: false)
Card.create(english: "how much does it cost?", foreign: "いくらですか (ikura desu ka?)", deck_id: japanese.id, complete: false)
Card.create(english: "toilet", foreign: "トイレ (toilet)", deck_id: japanese.id, complete: false)
Card.create(english: "amazing", foreign: "すごい (sugoi)", deck_id: japanese.id, complete: false)
Card.create(english: "how are you?", foreign: "お元気ですか (o genki desu ka?)", deck_id: japanese.id, complete: false)
Card.create(english: "father", foreign: "お父さん (otosan)", deck_id: japanese.id, complete: false)
Card.create(english: "mother", foreign: "お母さん (okasan)", deck_id: japanese.id, complete: false)

Card.create(english: "Yes", foreign: "Oui", deck_id: french.id, complete: false)
Card.create(english: "No", foreign: "Non", deck_id: french.id, complete: false)
Card.create(english: "Please", foreign: "S'il vous plaît", deck_id: french.id, complete: false)
Card.create(english: "No, thank you", foreign: "Non, merci", deck_id: french.id, complete: false)
Card.create(english: "You're welcome", foreign: "Il n'y a pas de quoi", deck_id: french.id, complete: false)
Card.create(english: "Hello", foreign: "Bonjour", deck_id: french.id, complete: false)
Card.create(english: "Goodbye", foreign: "Au revoir", deck_id: french.id, complete: false)
Card.create(english: "Good night", foreign: "Bonne nuit", deck_id: french.id, complete: false)
Card.create(english: "How are you?", foreign: "Comment allez-vous?", deck_id: french.id, complete: false)
Card.create(english: "Very well, thanks", foreign: "Très bien, merci", deck_id: french.id, complete: false)
Card.create(english: "Excuse me", foreign: "Excusez-moi", deck_id: french.id, complete: false)
Card.create(english: "Do you speak English?", foreign: "Est-ce que vous parlez anglais?", deck_id: french.id, complete: false)
Card.create(english: "I don't understand.", foreign: "Je ne comprends pas.", deck_id: french.id, complete: false)
Card.create(english: "Sorry", foreign: "Désolé(e)", deck_id: french.id, complete: false)
Card.create(english: "Leave me alone!", foreign: "Laissez-moi tranquille.", deck_id: french.id, complete: false)
Card.create(english: "That's fine.", foreign: "C'est bien.", deck_id: french.id, complete: false)
Card.create(english: "I love you (singular)", foreign: "Wee", deck_id: french.id, complete: false)
Card.create(english: "I don't know", foreign: "Je ne sais pas.", deck_id: french.id, complete: false)
Card.create(english: "I love you ", foreign: "Je t'aime", deck_id: french.id, complete: false)

Card.create(english: "Hello", foreign: "Kia Ora", deck_id: maori.id, complete: false)
Card.create(english: "Good Bye", foreign: "Haere rā", deck_id: maori.id, complete: false)
Card.create(english: "Woman", foreign: "Wahine", deck_id: maori.id, complete: false)
Card.create(english: "Welcome", foreign: "Haere mai (hi-reh my)", deck_id: maori.id, complete: false)
Card.create(english: "Be strong", foreign: "Kia kaha", deck_id: maori.id, complete: false)
Card.create(english: "Good", foreign: "Ka pai", deck_id: maori.id, complete: false)
Card.create(english: "Family", foreign: "Whānau", deck_id: maori.id, complete: false)
Card.create(english: "Sweet Potato", foreign: "Kumara", deck_id: maori.id, complete: false)
Card.create(english: "Love", foreign: "Aroha", deck_id: maori.id, complete: false)
Card.create(english: "Maori War Dance", foreign: "Haka", deck_id: maori.id, complete: false)
Card.create(english: "Feast prepared in earth oven", foreign: "Hangi", deck_id: maori.id, complete: false)
Card.create(english: "Clan", foreign: "Hapu", deck_id: maori.id, complete: false)
Card.create(english: "Walk", foreign: "Hikoi", deck_id: maori.id, complete: false)
Card.create(english: "Meeting", foreign: "Hui", deck_id: maori.id, complete: false)
Card.create(english: "Tribe", foreign: "Iwi", deck_id: maori.id, complete: false)
Card.create(english: "Food", foreign: "Kai", deck_id: maori.id, complete: false)
Card.create(english: "Prestige", foreign: "Mana", deck_id: maori.id, complete: false)


Card.create(english: "Hello", foreign: "Salut!", deck_id: romanian.id, complete: false)
Card.create(english: "Good Morning", foreign: "Bună dimineața", deck_id: romanian.id, complete: false)
Card.create(english: "Good Evening", foreign: "Bună seara", deck_id: romanian.id, complete: false)
Card.create(english: "Good Night", foreign: "Noapte bună", deck_id: romanian.id, complete: false)
Card.create(english: "Good Bye", foreign: "La revedere", deck_id: romanian.id, complete: false)
Card.create(english: "Yes", foreign: "Da", deck_id: romanian.id, complete: false)
Card.create(english: "No", foreign: "Nu", deck_id: romanian.id, complete: false)
Card.create(english: "You're Welcome!", foreign: "Cu plăcere!", deck_id: romanian.id, complete: false)
Card.create(english: "Excuse Me", foreign: "Scuze!", deck_id: romanian.id, complete: false)
Card.create(english: "I'm Sorry", foreign: "Îmi pare rău!	", deck_id: romanian.id, complete: false)
Card.create(english: "One moment please", foreign: "Un moment, vă rog.", deck_id: romanian.id, complete: false)
Card.create(english: "Thank you", foreign: "Mulțumesc", deck_id: romanian.id, complete: false)
Card.create(english: "Good Day", foreign: "Bună ziua", deck_id: romanian.id, complete: false)

Card.create(english: "Add on to any sentence for emphasis", foreign: "Eh", deck_id: nzslang.id, complete: false)
Card.create(english: "Yes, but no. “Do you want a vanilla ice cream? “Yeah nah, I’ll be right.”", foreign: "Yeah nah", deck_id: nzslang.id, complete: false)
Card.create(english: "Not much", foreign: "Bugger All", deck_id: nzslang.id, complete: false)
Card.create(english: "Thanks", foreign: "Chur", deck_id: nzslang.id, complete: false)
Card.create(english: "Middle of nowhere", foreign: "The wops", deck_id: nzslang.id, complete: false)
Card.create(english: "When something is disfigured", foreign: "Munted", deck_id: nzslang.id, complete: false)
Card.create(english: "Dodgey", foreign: "Sus", deck_id: nzslang.id, complete: false)
Card.create(english: "Too Easy", foreign: "Piece of Piss", deck_id: nzslang.id, complete: false)
Card.create(english: "Disappointment", foreign: "Stink One", deck_id: nzslang.id, complete: false)
Card.create(english: "Down to do something", foreign: "Keen", deck_id: nzslang.id, complete: false)
Card.create(english: "Flip-Flops", foreign: "Jandals", deck_id: nzslang.id, complete: false)
Card.create(english: "When someone looks cool or trendy", foreign: "Skux", deck_id: nzslang.id, complete: false)
Card.create(english: "An insult to someone", foreign: "Egg", deck_id: nzslang.id, complete: false)
Card.create(english: "Too much – “I got you a pie” “Too much bro”", foreign: "Tu Meke", deck_id: nzslang.id, complete: false)
Card.create(english: "I got this lollipop for free!” “That’s mean as!", foreign: "Mean as", deck_id: nzslang.id, complete: false)
Card.create(english: "McDonalds", foreign: "Maccas", deck_id: nzslang.id, complete: false)
Card.create(english: "Get beat up - Wanna Hiding Bro", foreign: "Wanna hiding", deck_id: nzslang.id, complete: false)
Card.create(english: "Thanks", foreign: "Ta", deck_id: nzslang.id, complete: false)
Card.create(english: "Used when you agree with someone - hard out bro", foreign: "Hard Out", deck_id: nzslang.id, complete: false)
