var allSigns = ["","Capricorn","Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius"];
var descriptions = ["","Today you could look in the mirror and be appalled by what you see, activating your insecurity about the way you look. " +
"This could send you looking for various treatments. Go ahead if you want, Capricorn, but your impressions are clouded right now and you " +
"probably look far better than you think. If you get together with a love partner, this person's reaction should give you the reassurance " +
"you need.", "Artistic or spiritual inspiration could come your way today, Aquarius, although it might be muddled and you could be perplexed " +
"about how to deal with it. Don't try to force the issue. Write down your ideas and return to them later. Someone close might feel unwell, " +
"and you may want to spend some time with him or her. This might take some effort, but it won't go unappreciated.", "Today you may spend " +
"some time by yourself working on your own projects, Pisces. The desire to spend time alone with a special someone may also interfere with " +
"plans you've already made to attend a social gathering or event involving a lot of people. You won't want to give up either, so you might " +
"try to find a compromise of some kind. Think about it.", "Various personal issues might be on your mind today, Aries. You could want to " +
"work them all out without distractions, so you may decide to spend part of the day alone. Responsibilities from the outside world might " +
"make it impossible for you to take as much time as you'd like. Don't let it get to you. Work out the matters that" +
" seem most pressing and save the rest for later.", "You could be expecting an important letter, call, or email today, Taurus, and " +
"sit on the edge of your chair waiting for it. This might be from a friend or lover. It could be delayed, and this might get you flustered. " +
"Distract yourself and do something else while you wait. If you make good use of the hours, the time will fly by.", "Today you could feel " +
"like you have one foot in another world. It's a great feeling, Gemini, with a lot of love and wisdom mixed in. This could prove useful " +
"in relating to others. It increases your awareness not only of them but also of yourself. It could make a big difference in any creative " +
"projects. Don't let the day go by without making this feeling work for you in some way.", " A number of exciting people could attend a " +
"party or group meeting at your home. You're in just the right space to be a great host, Cancer, and you're likely to meet some interesting " +
"new people. Much of the conversation could focus on computers and other forms of technology or perhaps on astrology or other occult subjects." +
" You should have a good time and learn a lot.", "A rally or other sort of mass meeting could take place in your neighborhood today, Leo. " +
"It could be the most exciting thing that's happened to your community in a long time. Expect to meet a number of interesting people. " +
"Social events, perhaps connected to this rally, could take up a lot of your time, almost to the point of wearing you out. Don't try to " +
"do too much.", "Today you might try to put computers or other forms of advanced technology to work for you, Virgo. This could be of great " +
"benefit to you. You might be blown away by the advantages of it. Your mind should be quick enough to grasp any new software or equipment " +
"that you will want to use. The innovation could also help raise your earning power. Isn't technology wonderful?","You might feel especially " +
"adventurous today, Libra, and wish to go away for a while with a romantic partner. A spiritual retreat or a workshop in metaphysical " +
"disciplines might be an option to consider. This is a good time to go, especially if you're thinking about traveling by air. You should " +
"have a wonderful time. Let go of some misgivings, experience deep insights, and make new friends.", " A group that shares your interest " +
"in an intellectual or spiritual discipline might meet at your home today, Scorpio. This could be a stimulating event, especially since " +
"new members could become good friends. A lot of plans could be made, perhaps for future activities. Fascinating discussions could take " +
"place. Don't let the meeting run too late. You will want to unwind before bedtime.", "Communications with friends should go well, " +
"Sagittarius. You have what it takes to express yourself clearly and honestly and give information without confusing the issue. " +
"Group activities or work done in the company of others could bring the results you want. You might have to spend a lot of time " +
"on the phone or on the computer sending email, but you will get a lot done." ];


function determineSign (month,day) {
    if (month == 12 && day > 22 || month == 1 && day <= 20) {
        return 1;
    }

    if (month == 1 && day > 20 || month == 2 && day <= 18) {
        return 2;
    }
    if (month == 2 && day > 18 || month == 3 && day <= 20) {
        return 3;
    }

    if (month == 3 && day > 20 || month == 4 && day <= 20) {
        return 4;
    }

    if (month == 4 && day > 20 || month == 5 && day <= 21) {
        return 5;
    }

    if (month == 5 && day > 21 || month == 6 && day <= 21) {
        return 6;
    }

    if (month == 6 && day > 21 || month == 7 && day <= 23) {
        return 7;
    }

    if (month == 7 && day > 23 || month == 8 && day <= 23) {
        return 8;
    }

    if (month == 8 && day > 23 || month == 9 && day <= 23) {
        return 9;
    }

    if (month == 9 && day > 23 || month == 10 && day <= 23) {
        return 10;
    }

    if (month == 10 && day > 23 || month == 11 && day <= 22) {
        return 11;
    }

    if (month == 11 && day > 22 || month == 12 && day <= 22) {      
        return 12;
    }
}

function submit(){
    var month = document.getElementById("monthMenu").value;
    var day = document.getElementById("dayMenu").value;
    var name = document.getElementById("nameBox").value;
    if (name == ""){
        alert("Input name");
        return false;
    }
    if(validateDate(month,day) == false) {
        return false;
    }
    var sign = determineSign(month,day);
    console.log(allSigns[sign]);
    var now = new Date();
    if (month == now.getMonth() + 1 && day == now.getDate()){
        document.getElementById("sign").innerHTML="Happy Birthday "+name+", your sign is "+allSigns[sign];
    }else{
        document.getElementById("sign").innerHTML="Hi "+name+", your sign is "+allSigns[sign];
    }
    document.getElementById("descriptions").innerHTML=descriptions[sign];
    document.getElementById("descriptions").innerHTML=descriptions[sign];
    document.getElementById("images").src="HoroscopeImages/" + sign + ".jpg";
}

function validateDate(month,day){
    if (month == 2 && day == 29 || day == 30 || day == 31){
        alert("Input a real date");
        return false;
    }
    if (month == 4 && day == 31){
        alert("Input a real date");
        return false;
    }
    if (month == 6 && day == 31){
        alert("Input a real date");
        return false;
    }
    if (month == 9 && day == 31){
        alert("Input a real date");
        return false;
    }
    if (month == 11 && day == 31){
        alert("Input a real date");
        return false;
    }
}






//birthday
//css
