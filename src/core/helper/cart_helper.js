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

export const loadCartItems = () =>{
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            return JSON.parse(localStorage.getItem("cart"))
        }
    }
}

export const removeItemFronCart = (product_id) => {
    let cart = []
    if(typeof window !== undefined){
        if(localStorage.getItem("cart")){
            cart = JSON.parse(localStorage.getItem("cart"))
        }
        
        cart.map((product, i) =>{
            if(product._id == product_id){
                cart.splice(i, 1)
            }
        })

        localStorage.setItem("cart", JSON.stringify(cart))
    }

    return cart
}

export const removeCart = next => {
    let cart = []
    if(typeof window !== undefined){
        localStorage.removeItem("cart")
        localStorage.setItem("cart", JSON.stringify(cart))
        next()
    }
}
