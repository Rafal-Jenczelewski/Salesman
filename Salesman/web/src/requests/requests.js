function getCookie(name) {
    if (!document.cookie) {
        return null;
    }

    const xsrfCookies = document.cookie.split(';')
        .map(c => c.trim())
        .filter(c => c.startsWith(name + '='));

    if (xsrfCookies.length === 0) {
        return null;
    }

    return decodeURIComponent(xsrfCookies[0].split('=')[1]);
}

const api = "http://127.0.0.1:8000/tsp/";

export function postInstance(instance) {
    return fetch(api + "instances/", {
        method: 'post',
        body: JSON.stringify(instance),
        header: {
            'X-CSRF-TOKEN': getCookie('CSRF-TOKEN')
        }
    }).then(res => res.status)
}

export function postTask(task) {
    return fetch(api + "task", {
        method: "post",
        body: JSON.stringify(task),
        header: {
            'X-CSRF-TOKEN': getCookie('CSRF-TOKEN')
        }
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

//TODO: API, content-type
export function postFile(data) {
    return fetch(api + "ex", {
        method: "post",
        headers: {
            "Content-type": "ex",
            'X-CSRF-TOKEN': getCookie('CSRF-TOKEN')
        },
        body: data
    })
}