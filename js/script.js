const app = new Vue({
    el: '#app',
    data: {
        emailList: []
    },
    methods: {

    },
    created() {

        for (let i = 0; i < 10; i++) {

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(resp => {
                    console.log(resp);
                    this.emailList.push(resp.data.response);
                })
        }

    }
});