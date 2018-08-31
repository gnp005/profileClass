var SocialProfileClass = /** @class */ (function () {
    function SocialProfileClass(name, birthday, age, gender, homeTown, currentCity, school, college, workplace, phoneNumber, email, intrestedIn, languages) {
        this.name = name;
        this.birthday = birthday;
        this.age = age;
        this.gender = gender;
        this.homeTown = homeTown;
        this.currentCity = currentCity;
        this.school = school;
        this.college = college;
        this.workplace = workplace;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.intrestedIn = intrestedIn;
        this.languages = languages;
    }
    SocialProfileClass.prototype.getAge = function () {
        console.log(this.age);
    };
    SocialProfileClass.prototype.getIntrests = function () {
        console.log(this.intrestedIn);
    };
    SocialProfileClass.prototype.getPhoneNumber = function () {
        console.log(this.phoneNumber);
    };
    SocialProfileClass.prototype.getEmail = function () {
        console.log(this.email);
    };
    return SocialProfileClass;
}());
var guru = new SocialProfileClass("Guru", "14 Nov 1991", 26, "M", "Nandyal", "Bangalore", "GSEM", "MRIET", "ABC", 123456789, "abc@abc.com", "outdoor", "Telugu, English, Hindi");
console.log(guru.name);
guru.getPhoneNumber();
guru.getEmail();
