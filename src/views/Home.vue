
<script>
export default {
    name: "home",
    components: {},
    data() {
        return {
            amount: 0.01,
            orderID: 12345
        };
    },
    created() {
        // console.log(window.paypal.Buttons());

        //     window.paypal
        //         .Buttons({ createOrder: function(data, actions) {
        //   // Set up the transaction
        //   return actions.order.create({
        //     purchase_units: [{
        //       amount: {
        //         value: '0.01'
        //       }
        //     }]
        //   });
        // } })
        //         .render("#payment");
        const _this = this;
        window.paypal
            .Buttons({
                style: {
                    layout: "vertical",
                    color: "blue",
                    shape: "pill",
                    label: "pay"
                },
                createOrder: _this.createOrder,
                onApprove: _this.onApprove
            })
            .render("#payment");
    },
    methods: {
        createOrder: function(data, actions) {
            return actions.order.create({
                purchase_units: [
                    {
                        amount: { value: this.amount }
                    }
                ]
            });
        },
        onApprove: function(data, actions) {
            // Capture the funds from the transaction
            return actions.order.capture().then(function(details) {
                // Show a success message to your buyer
                console.log(details);

                alert(
                    "Transaction completed by " + details.payer.name.given_name
                );

                // return fetch("/paypal-transaction-complete", {
                //     method: "post",
                //     headers: {
                //         "content-type": "application/json"
                //     },
                //     body: JSON.stringify({
                //         orderID: this.orderID
                //     })
                // });
            });
        }
    }
};
</script>

<template>
    <div class="home">
        <input type="number" class="form-control" placeholder="Enter test amount" v-model="amount">
        <!-- <input
            type="number"
            class="form-control"
            placeholder="Enter test order id"
            v-model="orderID"
        >-->
        <br>
        <div>
            <div id="payment"></div>
        </div>
    </div>
</template>

<style>
.home {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: lightgray;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 10rem);
}

.form-control {
    /* width: 100%; */
    border-radius: 0.25rem;
    padding: 0.5rem;
}
</style>
