<script>
    export let text;
</script>

<div class="heading">{text}</div>
<div class="trapezoid" />

<style>
    :root {
        --width: 400px;
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

    .heading {
        text-align: center;
        margin-top: calc(var(--width) * 0.06);
        padding: calc(var(--width) * 0.04) calc(var(--width) * 0.1);
        background-color: var(--color-lighten);
        width: var(--width);
        margin-left: calc(var(--width) * 0.05 * -1);
        font-size: var(--font-size);
        color: var(--color-darken);
        font-weight: bold;
    }

    .trapezoid {
        border-top: calc(var(--width) * 0.05) solid var(--color);
        border-left: calc(var(--width) * 0.05) solid transparent;
        border-right: calc(var(--width) * 0.05) solid transparent;
        height: 0;
        width: var(--width);
        margin-left: calc(var(--width) * 0.05 * -1);
        margin-bottom: calc(var(--width) * 0.04);
    }
</style>
