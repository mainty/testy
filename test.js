function closure(i){
	var counter = i;

	document.writeln(">>" + counter);

	return function() {
		return ++counter;
	}
}

var c1 = closure(12);
var c2 = closure;

document.writeln(c1());
document.writeln(c1());
document.writeln(c1());
document.writeln(c1());

document.writeln("<br><br>");

var Member = function(fname,lname){
	this.abc = "mogemoge";
	this.fname = fname;
	this.lname = lname;
};

Member.abc= "hogehoge"

Member.prototype.getName= function(){
	return this.fname + " " +  this.lname;
};

var mem = new Member("志賀", "雄太");

document.writeln(mem.fname + "<br>");
document.writeln(mem.getName());

document.writeln(Member.abc);
document.writeln(mem.abc);

var NewMember = function(){
	this.acb = "hogen"
};
NewMember.abc = "yatta"

NewMember.prototype = new Member;
nm = new NewMember();

document.writeln(NewMember.abc);
print(nm.acb);

function print(text){
	document.writeln(text);
}