<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    import { routes } from "$lib/routes";

    import Box from "$lib/components/Box.svelte";
    import CardBox from "$lib/components/CardBox.svelte";
    import Pokeball from "$lib/components/Pokeball.svelte";

    async function logout() {
        await signOut();
        goto(`${base}/`);
    }

    let size = 100;
</script>

<div class="grid">
    <div class="left" />

    <div class="center">
        <a sveltekit:prefetch href="{base}/">
            <Box
                spin
                --size-x={`${size}px`}
                --size-y={`${size}px`}
                --size-z={`${size}px`}
                --hue="210"
                --transform="translateZ(0px) rotate3d(1, 1, 0, 25deg)"
                --border="0px solid black"
                lightenTop
                darkenBottom
            >
                <div class="box-content">
                    <Pokeball --size={`${size / 2}px`} />
                </div>
                <div class="box-content" slot="back">
                    <Pokeball --size={`${size / 2}px`} />
                </div>
                <div class="box-content" slot="left">
                    <img
                        style={`width:${(size * 2) / 3}px;`}
                        src="/images/cards/tcg_logo.png"
                        alt="Pokemon TCG Logo"
                    />
                </div>
                <div class="box-content" slot="right">
                    <img
                        style={`width:${(size * 2) / 3}px;`}
                        src="/images/cards/tcg_logo.png"
                        alt="Pokemon TCG Logo"
                    />
                </div>
            </Box>
        </a>
    </div>

    <div class="right">
        <!-- <ul>
            {#each routes as route}
                <li
                    class:active={$page.url.pathname === route.path}
                    class="hover:bg-gray-100 dark:hover:bg-gray-900 w-16"
                >
                    <a
                        sveltekit:prefetch
                        href={route.path}
                        class="h-16 flex flex justify-center items-center w-full"
                    >
                        <svg
                            class="h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            {#each route.svg as svg}
                                <path d={svg.src} />
                            {/each}
                        </svg>
                    </a>
                </li>
            {/each}
        </ul> -->
        <CardBox size="50" />
    </div>
</div>

<style>
    .grid {
        width: 100vw;
        display: grid;
        grid-gap: 10px;
        grid-template-columns: 300px minmax(600px, 1fr) 300px;
    }

    @media only screen and (max-width: 1600px) {
        .grid {
            grid-template-columns: 300px minmax(400px, 1fr) 300px;
        }
    }

    @media only screen and (max-width: 900px) {
        .grid {
            grid-template-columns: 200px minmax(300px, 1fr) 200px;
        }
        .left {
            min-height: 0;
            height: 0;
        }
    }

    @media only screen and (max-width: 600px) {
        .grid {
            grid-gap: 10px;
            min-height: 300px;
            grid-template-columns: minmax(300px, 1fr);
        }
        .grid *:nth-child(1) {
            /* height: 0; */
            min-height: 0;
        }
    }

    .left,
    .right,
    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 150px;
    }

    .box-content {
        display: flex;
        align-items: center;
        justify-content: center;
        height: inherit;
        width: inherit;
    }
</style>
