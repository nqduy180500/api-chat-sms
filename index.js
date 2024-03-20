var addTwoNumbers = function(l1, l2) {
    let n1="",n2="";
    while(l1||l2){
        if(l1){
            n1=l1.val+n1;
            l1=l1.next;
        }
        if(l2){
            n2=l2.val+n2;
            l2=l2.next;
        }
    }

    n1=(BigInt(n1)+BigInt(n2)).toString().split('').map(Number);
            console.log(n1);

    let c= new ListNode(n1[n1.length -1]);
    let d = c;
    for(let  i = n1.length -2 ;i>=0;i--){
        d.next= new ListNode(n1[i]);
        d=d.next;
    }
    return c;
};
console.log(addTwoNumbers([2,4,3],[5,2,9]));