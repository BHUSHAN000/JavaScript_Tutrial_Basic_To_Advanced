
    // Promise.race()

    const promise1 = new Promise((resolve, reject) => {
        console.log('promise1');
        setTimeout(() => resolve(100),5000);
    });

    const promise2 = new Promise((resolve, reject) => {
    console.log("promise2");
    setTimeout(() => resolve(200), 3000);
    });

    const promise3 = new Promise((resolve, reject) => {
    console.log("promise3");
    setTimeout(() => resolve(300), 1000);
    });

    Promise.race([promise1, promise2, promise3])
        .then((value) => {
            console.log("resolve",value);
        })
        .catch((error) => {
            console.log("reject",error);
        });
