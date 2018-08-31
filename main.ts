
class SocialProfileClass{
    name:string;
    birthday:string;
    age:number;
    gender:string;
    homeTown:string;
    currentCity:string;
    school:string;
    college:string;
    workplace:string;
    private phoneNumber:number;
    private email:string;
    intrestedIn:string;
    languages:string;
    
    constructor(name:string,birthday:string,age:number,gender:string,homeTown:string,currentCity:string,school:string,college:string,workplace:string,phoneNumber:number,email:string,intrestedIn:string,languages:string){
        this.name=name;
        this.birthday=birthday;
        this.age=age;
        this.gender=gender;
        this.homeTown=homeTown;
        this.currentCity=currentCity;
        this.school=school;
        this.college=college;
        this.workplace=workplace;
        this.phoneNumber=phoneNumber;
        this.email=email;
        this.intrestedIn=intrestedIn;
        this.languages=languages;
    }

    getAge(){
        console.log(this.age);
        
    }
    
    getIntrests(){
        console.log(this.intrestedIn);
        
    }

    getPhoneNumber(){
        console.log(this.phoneNumber);
        
    }

    getEmail(){
        console.log(this.email);
        
    }

}



let guru=new SocialProfileClass("Guru","14 Nov 1991",26,"M","Nandyal","Bangalore","GSEM","MRIET","ABC",123456789,"abc@abc.com","outdoor","Telugu, English, Hindi");

console.log(guru.name);

guru.getPhoneNumber();
guru.getEmail();