<template>
    <div id="app">
        <meta name="format-detection" content="telephone=yes"/>
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
            this.checkUrl();
        },
        methods: {
            checkUrl(){
                let url = location.href.split('#');
                let query = url[1].split('?');
                let type = query[1] ? query[1].split('=') : '';
                if(query[0] == '/publicity'){
                    this.$router.replace({
                        path:'/publicity',
                        query:{
                            [type[0]]:type[1]
                        }
                    })
                }
            },
        },        
    }
</script>