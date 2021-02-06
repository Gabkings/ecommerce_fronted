const URL = "http://127.0.0.1:8000/api/user/"



export const singup = async user => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}

export const signin = async user => {
    const formData = new FormData();
    for (const name in user) {
        console.log(user[name]);
        formData.append(name, user[name]);
      }
      try {
        const response = await fetch(`${URL}login`, {
            method: "POST",

            body: formData,
        })
        console.log("SUCCESS", response)
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}
