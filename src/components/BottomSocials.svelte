<script lang="ts">
    import GitHub from "./icons/GitHub.svelte";
    import LinkedIn from "./icons/LinkedIn.svelte";
    import Handshake from "./icons/Handshake.svelte";
    import Instagram from "./icons/Instagram.svelte";
</script>

<div class="socials">
    <hr />
    <a class="item" href="https://github.com/mslew" target = "_blank" rel="noreferrer" aria-label="GitHub" title="GitHub"><GitHub class="icon" height={30}/></a>
    <a class="item" href = "https://www.linkedin.com/in/maximus-lewis-50ba47203/" target = "_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn"><LinkedIn class="icon" height={30}/></a>
    <a class="item" href = "https://lewisu.joinhandshake.com/users/20583963" target = "_blank" rel="noreferrer" aria-label="Handshake" title="Handshake"><Handshake class="icon" height={30}/></a>
    <a class="item" href = "https://www.instagram.com/maxslewis/" target = "_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><Instagram class="icon" height={30}/></a>
    <hr />
</div>

<style lang="scss">
    @import '../scss/variables.scss';
    .socials{
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: .5rem;
        @include media-breakpoint-up(xl){
            display: none;
        }
    }
    hr{
        margin-left: 1rem;
        margin-right: 1rem;
        color: $white;
        border: .1rem solid $white;
        width: 2rem;
        height: 100%;
    }
    .item{
        padding-left: .5rem;
        padding-right: .5rem;
        &:hover{
            animation: raise .25s linear;
            animation-fill-mode: forwards;
            :global(.icon){
                fill: $orange;
            }
        }
    }
</style>