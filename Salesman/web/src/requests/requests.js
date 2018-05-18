const api = "http://127.0.0.1:8000/tsp/";

export function postInstance(instance) {
    return fetch(api + "instances/", {
        method: 'post',
        body: JSON.stringify(instance)
    }).then(res => res.status)
}

export function postTask(task) {
    return fetch(api + "task", {
        method: "post",
        body: JSON.stringify(task)
    })
}

export function getInstances() {
    // return fetch(api + "instances")
    //     .then(res => res.json())
    //     // .then(json => json.)
    return [
        {
            id: 1,
            name: "Test1",
            graph: "12 12\n1 1",
            cityCount: 2,
            owner_id: 1
        },
        {
            id: 2,
            name: "Test2",
            graph: "12 12\n1 1",
            cityCount: 2,
            owner_id: 1
        },
        {
            id: 3,
            name: "Test3",
            graph: "12 12\n1 1",
            cityCount: 2,
            owner_id: 1
        },
        {
            id: 4,
            name: "Test4",
            graph: "12 12\n1 1",
            cityCount: 2,
            owner_id: 1
        }
    ]
}

export function getSoultions(){
    return Promise.resolve({
        solutions: [
            {
                id: 1,
                result: "1 2 3 4 5 6 7",
                cost: "123",
                generations: 100,
                population: 50,
                time: "12:12"
            },
            {
                id: 2,
                result: "1 2 3 4 5 6 7",
                cost: "123",
                generations: 100,
                population: 50,
                time: "12:12"
            }
        ]
    })
}
