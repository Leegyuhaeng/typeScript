"use strict";
function print(params) {
    if ('name' in params)
        console.log(params.name);
    else if ('school' in params)
        console.log(params.school);
    else if ('city' in params)
        console.log(params.city);
    else
        console.log('500 Error');
}
print({ name: "name" });
