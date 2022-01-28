<script>
    import { base } from "$app/paths";
    import { goto } from "$app/navigation";
    import { routes } from "$lib/routes";
</script>

<div class="trapezoid" />
<div class="footer" />

<style>
    :root {
        --width: 100vw;
        --font-size: 2.5em;
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

    .footer {
        padding: calc(var(--width) * 0.04) calc(var(--width) * 0.1);
        background-color: var(--color);
        /* width: var(--width); */
        /* margin-left: calc(var(--width) * 0.05 * -1); */
        font-size: var(--font-size);
        color: var(--color-darken);
        font-weight: bold;
        overflow: hidden;
    }

    .trapezoid {
        border-bottom: calc(var(--width) * 0.025) solid var(--color-lighten);
        border-left: calc(var(--width) * 0.05) solid transparent;
        border-right: calc(var(--width) * 0.05) solid transparent;
        height: 0;
        /* width: var(--width); */
    }
</style>
