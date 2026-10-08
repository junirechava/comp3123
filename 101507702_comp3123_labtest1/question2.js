// Question 2: Promises  
// resolvedPromise 
const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let success = {'message': 'delayed success!'}
            resolve(success);
        }, 500);
    });
};

// rejectedPromise 
const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let exception = {'error': 'delayed exception!'}
                reject(exception);
            } catch (e) {
                console.error(e);
            }
        }, 500);
    });
};

// 3. call both promises separately and handle their results
resolvedPromise()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    });

rejectedPromise()
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err); 

 });








