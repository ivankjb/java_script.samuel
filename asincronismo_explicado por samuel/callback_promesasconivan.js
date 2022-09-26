    function arreglos() {

        let limite = Math.round(Math.random() * 10)
        return new Promise((resolve, reject) => {
            if (limite === 0) {
                reject(new Error('no se definió '))
            }
            var vec = []
            console.log(`El array se definio para ${limite} elementos`)
            setTimeout(() => {
                for (let i = 0; i < limite; i++) {
                    vec[i] = Math.round(Math.random() * 100)
                }

            }, 0);
            resolve(vec)
        })
    }

    arreglos()
        .then((vec) => {
            setTimeout(() => {
                let suma = 0
                for (let i = 0; i < vec.length; i++) {
                    suma += vec[i];
                }
                console.log(vec)
                console.log(`la suma de sus elementos es: ${suma}`);
            }, 0);
        })
        .catch((err) => { console.log(err.message) })


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




    arreglos = () => {
        // let limite = Math.round(Math.random() * 10)
        let limite = 100
        return new Promise((resolve, reject) => {
            if (limite === 0) {
                reject(new Error('no se definió '))
            }
            var vec = []
            setTimeout(() => {

                for (let i = 0; i < 10; i++) {
                    vec[i] = Math.round(Math.random() * 100)
                }

            }, 0);
            //console.log(vec)
            resolve(vec)
        })
    }

    async function sumar() {
        try {
            const vec = await arreglos()
                //console.log(vec)
            setTimeout(() => {
                let suma = 0
                for (let i = 0; i < vec.length; i++) {
                    suma += vec[i];
                }
                console.log(vec)
                console.log(suma);
            }, 0)
        } catch (err) {
            console.log(err.message)
        }
    }

    sumar()