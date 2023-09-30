let user = {address:"At.Post Sawali(bk)"}; // A user without address property
// console.log(user.address.street) //Error
console.log(user.address ? user.address.street : undefined);
