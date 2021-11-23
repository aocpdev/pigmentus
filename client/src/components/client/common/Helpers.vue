<script>
import axios from 'axios'
import store from "../../../store/index";
export default {
    name: "Helpers",
    data() {
        return {

        }
    },
    methods: {
        getSaveForLater(userId){
            axios.get("api/saved", { params: { userId: userId } }).then((res) => {
                console.log("Save For Later: ", res);
            }).catch((err) => console.log(err));
        },
        getCartforDB(userId) {
        axios.get("api/cart", { params: { userId: userId } }).then((res) => {
                if (res.data.cartDetails.cart.length === 0 ) {
                    store.state.isCartEmpty = true;
                }else {
                    store.state.cartDetails = res.data.cartDetails;
                }
            })
            .catch((err) => console.log(err));
        },
        getWishlistForDB() {

        },
        compareLStoDB: async function() {
            if (localStorage.getItem("__pigmentusCart") !== undefined) {
                const sum = function (a) {
                    return (a.length && parseFloat(a[0]) + sum(a.slice(1))) || 0;
                };
                let localStrg = JSON.parse(localStorage.getItem("__pigmentusCart"))
                if (store.state.user !== '') {
                    axios.get('api/cart', { params: { userId: store.state.user.id} }).then(res => {
                    store.state.cartDetails = res.data.cartDetails;
                    if (res.data.cartDetails.cart.length > 0 && localStrg !== null) {
                        localStrg.cart.forEach((storage, indx) => {
                        let isSaved = false;
                        let quantityArray = []
                        res.data.cartDetails.cart.forEach((element, index) => {
                            if (storage.productId === element.productId) {
                            isSaved = true;
                            quantityArray.push(storage.quantity);
                            quantityArray.push(element.quantity);

                            element.quantity = sum(quantityArray);
                            element.isEditInCart = true;
                            axios
                            .post("api/cart", element)
                            .then((res) => {
                                this.getCartforDB(store.state.user.id);
                            })
                            .catch((err) => console.log(err));

                            console.log(sum(quantityArray))

                            }else if (isSaved === false && res.data.cartDetails.cart.length === index + 1) {
                            storage.isEditInCart = false;

                            let newProduct = {
                                isEditInCart: false,
                                productId: storage.productId,
                                userId: store.state.user.id,
                                quantity: storage.quantity,
                            }

                            axios
                            .post("api/cart", newProduct)
                            .then((res) => {
                                this.getCart(store.state.user.id);
                            })
                            .catch((err) => console.log(err));

                            }
                        });

                        localStorage.removeItem('__pigmentusCart');
                        });

                    }else if (localStrg !== null) {
                        localStrg.cart.forEach((storage, indx) => {

                        let cartObj = {
                                userId: store.state.user.id,
                                productId: storage.productId,
                                quantity: storage.quantity
                            }
                            axios.post("api/cart", cartObj).then((res) => {
                                this.getCartforDB(store.state.user.id);
                                localStorage.removeItem('__pigmentusCart');
                            })
                            .catch((err) => console.log(err));


                        });
                    }


                    }).catch(err => console.log(err))
                }else {

                }
                }else {

                }
        },
        getSavedProducts: async function() {

            axios.get("api/saved", { params: { userId: store.state.user.id } }).then((res) => {
                store.state.saveForLater = res.data.savedProducts.rows[0].products;
                console.log("Saved For Later", store.state.saveForLater)
            })
            .catch((err) => console.log(err));


        },
    },



}
</script>