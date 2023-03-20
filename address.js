//Author: RkDevStack
var ethers = require('ethers');  
var crypto = require('crypto');

var id = crypto.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
console.log("SAVE, BUT DONT SHARE TO ANYONE:", privateKey);

var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);
