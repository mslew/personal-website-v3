<script lang="ts">
    import { onMount } from 'svelte';
    import { fade } from 'svelte/transition';
    let onLoadVisible = false; //MAKE SURE YOU CHANGE THIS BACK CHIEF
    onMount(() => {
        setTimeout(makeVisible, 7000);
    });

    function makeVisible(){
        onLoadVisible = true;
    }
</script>

{#if onLoadVisible}
<section id="projects" in:fade>
    <div class="container mt-5">
        <div class="row top">
            <div class="col">
                <div class="intro">
                    <p class="sectionNumberHeader">02.</p>
                    <p class="sectionHeader">My Projects</p>
                    <hr class="line" />
                </div>
            </div>
        </div>
        <!--{#each projects.projects as project, i}
            {#if i % 2 === 0}
                <Project title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}/>
            {:else}
                <ProjectSwitched title={project.title} techs={project.techs} githubIcon={project.githubIcon}
                externalIcon={project.externalIcon} github={project.github} link={project.link} description={project.description}/>
            {/if}
        {/each}-->
        <slot />
    </div>
</section>
{/if}

<style lang="scss">
    @import '../../scss/variables.scss';
    .top{
        margin-top: 15rem;
        width: 100%;
        color: $white;
        margin-left: 2rem;
        @include media-breakpoint-down(md){
            margin-top: 10rem;
        }
    }
    .intro{
        display: flex;
        margin-bottom: 1rem;
    }
    .sectionNumberHeader{
        color: $orange;
        font-size: 1.5rem;
        padding-right: 1rem;
    }
    .sectionHeader{
        color: $white;
        font-size: 1.5rem;
    }
    hr{
        color: $white;
        border: .1rem solid $white;
        width: 50%;
        height: 100%;
        margin-left: 1rem;
    }
</style>