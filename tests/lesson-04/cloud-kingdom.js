let playerName = "Mario";
let currentLives = 3;
const coins =  [25,30,45];
let totalCoins = 0;
for (let i = 0; i < coins.length; i++) {
    totalCoins += coins[i];
}
avgCoins = totalCoins / coins.length;
let remainder = totalCoins % 3;

console.log("Số coin dư : " + remainder);
console.log("Số coin trung bình : " + avgCoins);
console.log("Tổng số coin : " + totalCoins);    
