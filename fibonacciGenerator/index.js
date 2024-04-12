function fibonacciGenerator (n) {
    let fibonacciArray = [0, 1]
    if(n === 1) {
        fibonacciArray.pop()
    }
    else if (n > 2) {
        for (i=2; i<n; i++) {
            let previous = fibonacciArray[i-1]
            let previous2 = fibonacciArray[i-2]
            fibonacciArray.push(previous + previous2)
        }
    }

    return fibonacciArray;
    }

/*
1. n이 1일 때는 [0] / n이 2일 때는 [0, 1]
2. n이 3이상일 때부터는 배열을 가지고 계산 할 수 있다.
3. 빈 배열을 만들고, 반복문을 만든 다음에, 1일 때는 0을 푸쉬하고, 2일 때는 1을 푸쉬하고 
3부터는 그 전 배열을 추가하면 될텐데?
*/
    