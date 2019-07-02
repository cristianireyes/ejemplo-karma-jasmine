module.exports = backendMock;

function backendMock() {
    const USER = {
        name: 'Cristian Reyes',
        age: 25
    };
    const EMAIL_TEST_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;

    this.getUserData = getUserData;
    this.saveNewUser = saveNewUser;
    this.isEmail = isEmail;
    this.dependency = dependency;
    this.callDependency = callDependency;
    this.dependency = dependency;

    function getUserData() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(USER);
            }, 1000);
        });
    }

    function isEmail(email) {
        if (typeof email !== 'string')
            return false;
        else
            return EMAIL_TEST_REGEX.test(email);
    }

    function saveNewUser(name, age) {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (!name || !age)
                    reject(new Error('Inserte un tipo de dato valido.'));
                else if (typeof name !== 'string')
                    reject(new Error('El nombre debe ser alfanumerico.'));
                else if (typeof age !== 'number')
                    reject(new Error('La edad debe ser un numero.'));
                else
                    resolve(true);
            }, 1000);
        });
    }

    function callDependency() {
        return this.dependency();
    }

    function dependency() {
        return true;
    }
}
