function Human() {
    this.humanName = 'User';
    this.humanAge = '22';
    this.humanSex = 'male';
    this.humanWeight = '55';
}


function Employee(company, salary, name, age, sex, weight) {
    this.company = company || 'Google';
    this.salary = salary || '2000';
    this.name = name || this.humanName;
    this.age = age || this.humanAge;
    this.sex = sex|| this.humanSex;
    this.weight = weight || this.humanWeight;

}

Employee.prototype = new Human();

var alex = new Employee('UTI', '1000', 'alex', '25', 'male');
var svetik = new Employee('KSM', '2000', 'svetik', '', 'female');

console.log(alex);
console.log(svetik);

function Student(university, scholarship, name, age, sex, weight) {
    this.university = university || 'KPI';
    this.scholarship = scholarship || '800';
    this.name = name || this.humanName;
    this.age = age || this.humanAge;
    this.sex = sex|| this.humanSex;
    this.weight = weight || this.humanWeight;

}

Student.prototype = new Human();

var dagni = new Student('', '', 'dagni', '', 'female');
var riarden = new Student('NAU', '', 'riarden', '45', 'male');

console.log(dagni);
console.log(riarden);

var btn = document.getElementById('search__button');
btn.addEventListener("click", showResults);


function showResults() {
       var searchRequest = new XMLHttpRequest();
       searchRequest.onreadystatechange = function() {
          if(searchRequest.readyState == 4 && searchRequest.status == 200) {
            var data = JSON.parse(searchRequest.responseText);
            var html= '<div class="block">';
                for (i=0; i<data.results.length; i++) {
                html = html + '<img style="width: data.results[i].media[0].gif.dims[0];  width: data.results[i].media[0].gif.dims[1];" src="' + data.results[i].media[0].gif.url + '">';
                }
            html = html+'</div>';

            document.getElementById("search__result").innerHTML = html;

          }
       };

       searchRequest.open('GET', 'https://api.tenor.co/v1/search?tag=' + document.getElementById("search__request").value + '&key=LIVDSRZULELA');
       searchRequest.send();
   }
