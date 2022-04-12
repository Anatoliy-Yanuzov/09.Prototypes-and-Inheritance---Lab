function Person(first, last) {
    this.firstName = first;
    this.lastName = last;

    Object.defineProperty(this, 'fullName', {
        get: function () {
            return `${this.firstName} ${this.lastName}`;
        },
        set: function (fullName) {
            let pattern = /(?<firstName\w+) (?<lastName\w+)/;
            let matchResult = fullName.match(pattern);

            if (matchResult) {
                this.firstName = matchResult.groups.firstName;
                this.lastName = matchResult.groups.lastName;
            }
        }
    });
}