<template>
    <div class="container">
        <div class="row justify-content-between">
            <div class="card d-inline-block col-3 m-4" style="width: 18rem;" v-for="post in posts" :key="post.id">
                <div class="card-body">
                    <h5 class="card-title">{{post.title}}</h5>
                    <p class="card-text">{{post.content}}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Main",
    data(){
        return{
            chiamataApi: 'http://127.0.0.1:8000/api/posts',
            posts: []
        }
    },
    created(){
        this.getPosts();
    },
    methods:{
        getPosts(){
            axios.get(this.chiamataApi)
            .then(response => {
                
                this.posts = response.data.result.data;
                
            })
            .catch();
        }
    }
}
</script>