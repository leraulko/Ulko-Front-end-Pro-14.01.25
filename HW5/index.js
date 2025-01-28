let birthYear = prompt('Enter your year of birth:');

if (birthYear === null) {
    alert('Its a shame you didnt wanna enter your year of birth')

} else {
    let userAge = new Date().getFullYear() - +birthYear;

    let userCity = prompt('What city do you live in?');

    if (userCity === null) {
        alert('Its a shame you didnt wanna enter your city')

    } else {
        let favSport = prompt('What is your fav kind of sport?');

        if (favSport === null) {
            alert('Its a shame you didnt wanna enter your fav sport')

        } else {

            let sportAlert;
            switch (favSport.toLowerCase()) {
                case 'tennis':
                    sportAlert = 'Cool! So you wanna be like Novak Djokovic';
                    break;
                
                case 'boxing':
                    sportAlert = 'Cool! So you wanna be like Oleksandr Usyk';
                    break;

                case 'fencing':
                    sportAlert = 'Cool! So you wanna be like Olha Kharlan';
                    break;

                default:
                    sportAlert = 'Its a great sport!';
            }


            let cityAlert;
            switch (userCity.toLowerCase()) {
                case 'kyiv':
                    cityAlert = 'You live in the capital of Ukraine!';
                    break;
            
                case 'washington':
                    cityAlert = 'You live in the capital of USA!';
                    break;
    
                case 'london':
                    cityAlert = 'You live in the capital of Great Britain!';
                    break;
    
                default:
                    cityAlert = `You live in ${userCity}!`;
            }


            alert(`Your age is ${userAge},\n ${cityAlert},\n ${sportAlert}`)
        }
    }
}