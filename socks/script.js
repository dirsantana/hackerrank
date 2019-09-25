/*John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

For example, there are  socks with colors . There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

Function Description

Complete the sockMerchant function in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

sockMerchant has the following parameter(s):

n: the number of socks in the pile
ar: the colors of each sock
Input Format

The first line contains an integer , the number of socks represented in . 
The second line contains  space-separated integers describing the colors  of the socks in the pile.

Constraints

 where 
Output Format

Return the total number of matching pairs of socks that John can sell.

Sample Input

9
10 20 20 10 10 30 50 10 20
Sample Output

3
Explanation

sock.png

John can match three pairs of socks.*/

function meias(n, ar) {
    var temp = 0;
    var pares = 0;
    //funcao
    var mM;
    mM = minMax(ar);
    console.log(mM);
    for (var i = mM[0]; i <= mM[1]; i++) {
        for (var x = 0; x < n; x++) {
            if (ar[x] == i) {
                temp++;
            }
        }
        if (temp % 2 == 0 && temp > 1) {
            pares = pares + (temp / 2);
        } if (temp % 2 != 0 && temp >= 1) {
            pares = pares + ((temp - 1) / 2);
        }
        temp = 0;
    }
    return pares;
}

function minMax(ar) {
    var mM = [];
    mM[0] = ar[0];
    mM[1] = ar[0];
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] < mM[0]) {
            mM[0] = ar[i];
        } if (ar[i] > mM[1]) {
            mM[1] = ar[i];
        }
    }
    return mM;
}
