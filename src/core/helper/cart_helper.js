export const addItemToCart = (item, next) => {
    let cart = []
    if(window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        cart.push({
            ...item
        })
        localStorage.setItem("cart", JSON.stringify(cart))
        next()
    }
}

