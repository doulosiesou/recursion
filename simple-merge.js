const a = [1,2,5,7,8];
const b = [3,4,6,9,12];

const c = [];
const m = a.length
const n = b.length
const p = m + n;

function merge(arrA, arrB, m = arrA.length, n = arrB.length) {
    let i = 0;
    let j = 0;
    let k = 0;
    while(i <= m){
        if(arrA[i] < arrB[j]){
          c[k] = arrA[i]
          i++;
          k++;
        } else{
          if(j >= n){
            c[k] = a[i]
            i++
            k++
          } else {
            c[k] = arrB[j]
            j++;
            k++
          }
        }
      }
    if(c.length > p){
      c.pop()
    }
    return c
}

console.log(merge(a, b, m, n));