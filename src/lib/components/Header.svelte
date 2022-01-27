<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { page } from "$app/stores";

    import { routes } from "$lib/routes";

    async function logout() {
        await signOut();
        goto(`${base}/`);
    }
</script>

<div class="">
    <ul>
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
    </ul>
</div>
