<template>
<transition>
    <div class="loading">
        <div></div>

	<div class="loading-text">
        <div class="pig">
            <img src="../../assets/pigmentus-logo.png" alt="logo">
        </div>

		<span class="loading-text-words">P</span>
		<span class="loading-text-words">A</span>
		<span class="loading-text-words">Y</span>
		<span class="loading-text-words">M</span>
		<span class="loading-text-words">E</span>
		<span class="loading-text-words">N</span>
		<span class="loading-text-words">T</span>
		<span class="loading-text-words"></span>
		<span class="loading-text-words">P</span>
		<span class="loading-text-words">R</span>
		<span class="loading-text-words">O</span>
		<span class="loading-text-words">C</span>
		<span class="loading-text-words">E</span>
		<span class="loading-text-words">S</span>
		<span class="loading-text-words">S</span>
		<span class="loading-text-words">I</span>
		<span class="loading-text-words">N</span>
		<span class="loading-text-words">G</span>
	</div>
</div>
</transition>

</template>

<script>
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'
export default {
    name: 'OrderLoading',
    data() {
        return {

        }
    },
    mounted(){
        // this.getProduct()
    },
    methods: {
        ...mapMutations(['paymentLoading']),
        getProduct: async function (productId) {
            this.paymentLoading(true);
            let payerId = this.$route.query.PayerID;
            let paymentId = this.$route.query.paymentId;
            let paymentToken = this.$route.query.token;
            // if (this.$store.state.isPaymenLoading === true) {
            //     this.$store.state.isPaymenLoading === false;
            // }
            axios.get('api/paypal/success', { params: { payerId: payerId, paymentId: paymentId, paymentToken: paymentToken } })
                    .then(res => {
                        console.log(res);
                    }).catch(err => console.log(err))
        }
    },
    created() {
        this.getProduct()
    }
}
</script>

<style lang="scss">

@import url(https://fonts.googleapis.com/css?family=Quattrocento+Sans);

@mixin position-center($text-align: center) {
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	text-align: $text-align;
}

.loading {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: #000;
	z-index: 9999;
}

.loading-text {
	@include position-center;
	width: 100%;
	height: 100px;
	line-height: 100px;
	span {
		display: inline-block;
		margin: 0 5px;
		color: rgb(187, 162, 87);
    font-family: 'Quattrocento Sans', sans-serif;
		@for $i from 0 through 17 {
			&:nth-child(#{$i + 1}) {
				filter: blur(0px);
				animation: blur-text 1.5s (#{$i/5})+s infinite linear alternate;
			}
		}
	}
}

@keyframes blur-text {
	0% {filter: blur(0px);}
	100% {filter: blur(4px);}
}


.pig {
        margin: auto;
        width: 200px;
        height: 70px;
        margin-bottom: 20px;
    }
</style>