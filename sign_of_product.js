var arraySign = function(nums) {
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0) return 0;
        if(nums[i]<0) count +=1;
    }
    if(count%2==0)return 1;
    else return -1;
};

var n =[];
var s = prompt("Enter size : ");
console.log("Enter desired input : ");
for(let i=0;i<s;i++){
   ele=prompt();
   n.push(ele);
}
console.log("*****************************************");
console.log("Entered Array is = [" + n + "]")
console.log("*****************************************");
num = arraySign(n);
console.log("*****************************************");
console.log("Sign of Product of required array is = " + num );
console.log("*****************************************");