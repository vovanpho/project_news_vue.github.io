<template>
    <div class="permanent">
        <form class="formInline mlauto">
            <comp-search-focus @keyup="focusSearch"/>
            <div class="mdform my0">
                <input class="formControl" type="text" placeholder="Search" v-model="query" 
                @blur="searchResultVisible=false"
                @focus="searchResultVisible=true"
                @keydown.esc="searchResultVisible=false"
                @input="softReset"
                ref="search"
                @keyup="performSearch"
                @keydown.up.prevent="highlightPrev"
                @keydown.down.prevent="highlightNext"
                @keydown.enter="gotolink"
                />
            </div>
            <button href="#" class="btn btnmd" type="submit"><fontAwesomeIcon :icon="['fas', 'search']" /></button>
            <div class="closeSearch" v-if="query.length>0" @click="reset"><fontAwesomeIcon :icon="['fas', 'times']"/></div>
        </form>
        <div class="viewResult" v-if="query.length>0 && searchResultVisible">
            <div class="flexCol" ref="results">
                <a v-for="(post, index) in searchResults" 
                :key="index" 
                :href="post.item.url" 
                @mousedown.prevent ='searchResultVisible=true'
                :class="{ 'bgcolor': index === highlightIndex }"
                target="_blank" 
                rel="noopener noreferrer"
                >
                <div>{{post.item.title}}</div>
                </a>
            </div>
            <div v-if="searchResults.length==0"><p>No resutl for "<strong>{{query}}</strong>"</p></div>
        </div>
    </div>
</template>

<script>
import CompSearchFocus from "./CompSearchFocus.vue"
import axios from "axios"
export default {
    name: "CompSearch",
    components:{
        CompSearchFocus
    },
    data(){
        return{
            query: '',
            searchResultVisible:false,
            posts:null,
            searchResults:[],
            highlightIndex:0,
            options:{
                shouldSort:true,
                includeMatches:true,
                threshold:0.5,
                location:0,
                distance:500,
                maxPatternLength:32,
                minMatchCharLength:1,
                keys:['title']
            }
           
        }
    },
    created() {
    axios.get("http://newsapi.org/v2/everything",{params: this.$store.getters.axiosParams})
         .then(Response => {this.posts=Response.data.articles})
         .catch(console.error(), (this.errored = true))
         .finally(() => (this.loading = false));
    },
    methods: {
        reset(){
            this.query=''
            this.highlightIndex=0
        },
        softReset(){
            this.searchResultVisible=true
            this.highlightIndex=0
        },
       
        focusSearch(e){
            if(e.key==='/'){
                this.$refs.search.focus()
            }
        },
        performSearch(){
            this.$search(this.query, this.posts, this.options)
            .then(results => {
                this.searchResults = results
            })
        },
        highlightPrev(){
            if(this.highlightIndex>0){
                this.highlightIndex=this.highlightIndex-1
                this.scrollIntoView()
            }
        },
        highlightNext(){
            if(this.highlightIndex<this.searchResults.length-1){
                this.highlightIndex=this.highlightIndex+1
                this.scrollIntoView()
            }
        },
        scrollIntoView(){
            this.$refs.results.children[this.highlightIndex].scrollIntoView({block:'nearest'})
        },
        gotolink(){
            if (this.searchResults[this.highlightIndex]) {
                window.location=this.searchResults[this.highlightIndex].post.url
            }
            
        }
    }
}
</script>

<style>
/* https://www.youtube.com/watch?v=6i8D8j5Gkk8     */
    .permanent{
        position: relative;
    }

    .permanent .formInline{
        border: 1px soild;
        position: relative;
    } 
        
        .formControl{
            width: 100%;
            box-sizing: border-box;
            height: 2rem;
            padding: 0 2rem;
        }
        .btn.btnmd{
            position: absolute;
            top: 0;
            padding: 6px;
        }
        
        .closeSearch{
            position: absolute;
            top: 0px;
            right: 0;
            padding: 6px;
        }
    .permanent .viewResult{
        max-height: 10rem;
        z-index: 20;
        background-color: rgb(252, 252, 252);
        overflow: hidden;
        overflow-y:auto;
        position:absolute;
        right: 0;
    }
    .flexCol{
        border: 1px solid;
    }
    a.bgcolor{
            background-color: rgb(167, 187, 243);
    }
</style>