<script>
    export let top = false;
    export let bottom = false;
    export let srcImage = false;
</script>

{#if top}
    <div class="trapezoid-top" />
{/if}
<div class="trapezoid-content {srcImage ? 'background-image' : ''}">
    <slot />
</div>
{#if bottom}
    <div class="trapezoid-bottom" />
{/if}

<style>
    :root {
        --trapezoid-width: 600px;
        --hue: 1;
        --saturation: 64%;
        --light: 44%;
    }

    div {
        --color: hsl(var(--hue), var(--saturation), var(--light));
        --color-lighten: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) + 10%)
        );
        --color-darken: hsl(
            var(--hue),
            var(--saturation),
            calc(var(--light) - 10%)
        );
    }

    .background-image {
        background-image: url("/images/pokemon/pokemonset_2.svg");
    }

    .trapezoid-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        background-color: var(--color-lighten);
        width: inherit;
        color: var(--color-darken);
    }

    .trapezoid-top {
        border-bottom: calc(var(--trapezoid-width) * 0.02) solid var(--color);
        border-left: calc(var(--trapezoid-width) * 0.05) solid transparent;
        border-right: calc(var(--trapezoid-width) * 0.05) solid transparent;
    }

    .trapezoid-bottom {
        border-top: calc(var(--trapezoid-width) * 0.02) solid var(--color);
        border-left: calc(var(--trapezoid-width) * 0.05) solid transparent;
        border-right: calc(var(--trapezoid-width) * 0.05) solid transparent;
        width: inherit;
    }
</style>
