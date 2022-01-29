<template>
    <div id="ldbrd">
        <leader-user v-for="u in users" :key="u.name">
            <div class="user">
                <span class="uname">{{ u.name }}</span>
                <button>{{ u.class }}</button>
                <img
                    @click="hidden = !hidden; nam=u.name"
                    class="leaderb-portrait"
                    :src="u.img"
                    v-if="!hidden"
                />
                <div class="charsSelect" v-else-if="nam==u.name">
                    <img v-for="c in chars" :key="c.name" :src="c.img" />
                </div>
            </div>
        </leader-user>
    </div>
</template>


<script>
import { defineComponent, ref } from "vue"


export default defineComponent({
    setup() {
        const hidden = ref(false);
        const nam = ref("x");

        return {
            users: [
                { name: "Excellify", img: "https://cdn.discordapp.com/attachments/353432193730871296/935479115740504134/bratishka.png", class: "s" },
                { name: "AnatoleAM", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494107390935100/tolya.png", class: "i" },
                { name: "EncycloAcid", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494107747483668/le_crisp.png", class: "x" },
                { name: "AWDKA", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108036878397/awdka.png", class: "x" },
                { name: "Octopus", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108410159164/octopus.png", class: "g" },
                { name: "Gleb", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108653441024/gleb.png", class: "x" }
            ],
            chars: [
                { name: "Bratishka", img: "https://cdn.discordapp.com/attachments/353432193730871296/935479115740504134/bratishka.png" },
                { name: "Tolye", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494107390935100/tolya.png" },
                { name: "LeCrisp", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494107747483668/le_crisp.png" },
                { name: "AWDKA", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108036878397/awdka.png" },
                { name: "Octopus", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108410159164/octopus.png" },
                { name: "Gleb", img: "https://cdn.discordapp.com/attachments/353432193730871296/935494108653441024/gleb.png" }
            ],
            hidden,
            nam
        }
       

    }
})


/*
const openChars = new Vue({
    el: "#user",

})
*/

</script>
<style>
.user {
    flex-direction: row;
    display: flex;
    background-color: rgba(100, 100, 100, 0.5);
}

.uname {
    flex-grow: 4;
    text-align: right;
}

.leaderb-portrait {
    width: 3vh;
}

button {
    border: solid black 1px;
    margin: 0;
    padding: 0 0.3vh;
}

.hidden {
    display: none;
}

.charsSelect {
    flex-direction: column;
}

.charsSelect img {
    width: 3vh;
}
</style>