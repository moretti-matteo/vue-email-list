const app = new Vue({
    el: '#app',
    data: {
        emailList: [],
        max: 10
    },
    methods: {

    },
    created() {

        for (let i = 0; i < this.max; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    console.log(resp);
                    this.emailList.push(resp.data.response);
                })
        }

    }
});