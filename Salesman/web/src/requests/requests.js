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

export function fetchInstances() {
    return fetch(api + 'instances')
        .then(res => res.json())
}

export function fetchHistory() {
    return fetch(api + 'history')
        .then(res => res.json())
}

export function fetchTasks() {
    return fetch(api + "tasks")
        .then(res => res.json())
}
